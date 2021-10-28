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
            Usuarios usuario = new Usuarios(
                "strilicherk@hotmail.com",
                "strilicherk",
                Shared.Enums.EnTipoUsuario.Admin
            );

            Assert.True(usuario.IsValid, "Usuário válido");
        }

        [Fact]
        public void DeveRetornarSeUsuarioForInvalidoSemEmail()
        {
            Usuarios usuario = new Usuarios(
                "strilicherk@",
                "strilicherk",
                Shared.Enums.EnTipoUsuario.Admin
            );

            Assert.True(!usuario.IsValid, "Usuário inválido, email incorreto.");
        }

        [Fact]
        public void DeveRetornarSeUsuarioForInvalidoComSenhaFraca()
        {
            Usuarios usuario = new Usuarios(
                "strilicherk@hotmail.com",
                "strili",
                Shared.Enums.EnTipoUsuario.Admin
            );

            Assert.True(!usuario.IsValid, "Usuário inválido, senha incorreta");
        }
    }
}
