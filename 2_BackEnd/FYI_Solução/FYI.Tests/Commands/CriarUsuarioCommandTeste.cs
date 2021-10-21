﻿using FYI.Domain.Commands.Usuario;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace FYI.Tests.Commands
{
    public class CriarUsuarioCommandTeste
    {
        [Fact]
        public void DeveRetornarSucessoSeDadosForemValidos()
        {
            var command = new CriarContaCommand();
            command.Email = "paulobrandao@hotmail.com";
            command.Senha = "12345678";
            command.TipoUsuario = FYI.Shared.Enums.EnTipoUsuario.Admin;
            
            command.Validar();

            Assert.True(command.IsValid, "Os dados estão preenchidos corretamente");
            

        }
    }
}
