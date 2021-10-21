using Flunt.Notifications;
using FYI.Domain.Commands.Usuario;
using FYI.Domain.Entidades;
using FYI.Domain.Repositorios;
using FYI.Shared.Commands;
using FYI.Shared.Handlers.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Domain.Handlers.Usuarios
{
    public class CriarContaHandle : Notifiable<Notification>, IHandler<CriarContaCommand>
    {
        private readonly IUsuarioRepositorio _usuarioRepositorio;
        public CriarContaHandle(IUsuarioRepositorio usuarioRepositorio)
        {
            _usuarioRepositorio = usuarioRepositorio;
        }
        public ICommandResult Handler(CriarContaCommand command)
        {
            command.Validar();
            if (!command.IsValid)
            {
                return new GenericCommandResult
                (
                    false,
                    "Informe corretamente os dados de usuário",
                    command.Notifications
                );
            };

            // Verifica se o email existe
            var usuarioExiste = _usuarioRepositorio.BuscarPorEmail(command.Email);
            if (usuarioExiste != null)
                return new GenericCommandResult(false, "Email já cadastrado", "Informe outro email");

            Usuario u1 = new Usuario
                (
                    command.Email,
                    command.Senha,
                    command.TipoUsuario
                );

            if (!u1.IsValid)
                return new GenericCommandResult(false, "Dados de usuário invalidos", u1.Notifications);

            _usuarioRepositorio.Adicionar(u1);
            
            return new GenericCommandResult(true, "Usuario Criado", "Token");
        }
    }
}
