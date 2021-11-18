using FYI.Domain.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace FYI.Tests.Entidades
{
    public class UsuarioTestes
    {
        [Fact]
        public void DeveRetornarSeUsuarioForValido()
        {
            Usuario usuario = new Usuario(
                "strilicherk@hotmail.com",
                "strilicherk",
                Shared.Enums.EnTipoUsuario.Admin
            );

            Assert.True(usuario.IsValid, "Usuário válido");
        }

        [Fact]
        public void DeveRetornarSeUsuarioForInvalidoSemEmail()
        {
            Usuario usuario = new Usuario(
                "strilicherk@",
                "strilicherk",
                Shared.Enums.EnTipoUsuario.Admin
            );

            Assert.True(!usuario.IsValid, "Usuário inválido, email incorreto.");
        }

        [Fact]
        public void DeveRetornarSeUsuarioForInvalidoComSenhaFraca()
        {
            Usuario usuario = new Usuario(
                "strilicherk@hotmail.com",
                "strili",
                Shared.Enums.EnTipoUsuario.Admin
            );

            Assert.True(!usuario.IsValid, "Usuário inválido, senha incorreta");
        }
    }
}
