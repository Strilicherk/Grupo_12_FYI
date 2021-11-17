using FYI.Domain.Commands.Turma;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace FYI.Tests.Commands.Turmas
{
    public class CriarTurmaCommandTeste
    {
        [Fact]
        public void DeveRetornarSucessoSeDadosForemValidos()
        {
            var command = new CadastrarTurmaCommand();
            command.NomeTurma = "strilicherk@hotmail.com";
            //command.DataInicio = 11/11/2004;
            //command.DataFim = ;
            command.PublicoAlvo = "Publico Alvo: teste";
            command.Descricao = "Desc teste";
            command.PreRequisito = "Sem pré-requisitos";
            command.QuantidadeAluno = 0;
            command.QtdMax = 35;

            command.Validar();

            Assert.True(command.IsValid, "Os dados estão preenchidos corretamente");


        }
    }
}
