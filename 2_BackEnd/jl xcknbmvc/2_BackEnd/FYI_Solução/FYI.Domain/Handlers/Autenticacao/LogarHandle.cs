using Flunt.Notifications;
using FYI.Domain.Commands.Autenticacao;
using FYI.Domain.Repositorios;
using FYI.Shared.Commands;
using FYI.Shared.Handlers.Contracts;
using FYI.Shared.Utils;

namespace FYI.Domain.Handlers.Autenticacao
{
    public class LogarHandle : Notifiable<Notification>, IHandler<LogarCommand>
    {
        private readonly IUsuarioRepositorio _usuarioRepositorio;

        public LogarHandle(IUsuarioRepositorio usuarioRepositorio)
        {
            _usuarioRepositorio = usuarioRepositorio;
        }

        public ICommandResult Handler(LogarCommand command)
        {
            // Validar o command
            command.Validar();

            if (!command.IsValid)
            {
                return new GenericCommandResult(false, "Informe corretamente os dados de usuário", command.Notifications);
            };

            // Buscar usuário por email
            var usuario = _usuarioRepositorio.BuscarPorEmail(command.Email);
            
            // ?Usuario existe?
            if (usuario == null)
                return new GenericCommandResult(false, "Usuario não encontrado", null);
            
            // Validar os hashes
            if (!Senha.ValidarHashes(command.Senha, usuario.Senha))
                return new GenericCommandResult(false, "Senha invalida", null);

            return new GenericCommandResult(true, "Logado com sucesso", usuario);
        }
    }
}
