using FYI.Domain.Commands.Usuario;
using FYI.Domain.Handlers.Usuarios;
using FYI.Shared.Commands;
using FYI.Tests.Repositorios;
using Xunit;

namespace FYI.Tests.Handlers
{
    public class CriarContaHandleTeste
    {
        [Fact]
        public void DeveRetornarCasoDadosDoHandleSejamValidos()
        {
            // Criar um command
            var command = new CriarContaCommand();
            command.Email = "strilicherk@hotmail.com";
            command.Senha = "strilicherk";
            command.TipoUsuario = FYI.Shared.Enums.EnTipoUsuario.Admin;

            // Criar um manipulador
            var handle = new CriarContaHandle(new FakeUsuarioRepositorio());

            // Pega o resultado
            var resultado = (GenericCommandResult)handle.Handler(command);

            // Validar condição
            Assert.True(resultado.Sucesso, "Usuário válido");
        }
    }
}
