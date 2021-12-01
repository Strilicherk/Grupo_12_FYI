using FYI.Domain.Commands.Curso;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace FYI.Tests.Commands.Curso
{
    public class CriarCursoCommandTeste
    {
        [Fact]
        public void DeveRetornarSucessoSeDadosForemValidos()
        {
            var command = new CadastrarCursoCommand();
            command.NomeCurso = "Power BI";

            command.Validar();

            Assert.True(command.IsValid, "Os dados estão preenchidos corretamente");


        }
    }
}
