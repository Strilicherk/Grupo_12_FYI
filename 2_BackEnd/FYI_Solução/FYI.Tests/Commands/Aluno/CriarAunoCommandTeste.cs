using FYI.Domain.Commands.Aluno;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace FYI.Tests.Commands.Aluno
{
    public class CriarAunoCommandTeste
    {
        [Fact]
        public void DeveRetornarSucessoSeDadosForemValidos()
        {
            var command = new CadastrarAlunoCommand();
            command.Nome = "Matheus";
            command.Sobrenome = "Strilicherk";
            command.CPF = "123456789";
            // command.DataNascimento
            command.Telefone = "11997785874";

            command.Validar();

            Assert.True(command.IsValid, "Os dados estão preenchidos corretamente");


        }
    }
}
