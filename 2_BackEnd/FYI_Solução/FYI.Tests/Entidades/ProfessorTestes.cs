using FYI.Domain.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace FYI.Tests.Entidades
{
    public class ProfessorTestes
    {
        [Fact]
        public void DeveRetornarSeProfessorForValido()
        {
            Professores professor = new Professores(
                "Paulo",
                "Brandão"

            );

            Assert.True(professor.IsValid, "Professor válido");
        }

        [Fact]
        public void DeveRetornarSeProfessorForInvalidoSemNome()
        {
            Professores professor = new Professores(
                "",
                "Brandão"

            );

            Assert.True(!professor.IsValid, "Professor invalido, nome incorreto!");
        }

        [Fact]
        public void DeveRetornarSeProfessorForInvalidoSemSobrenome()
        {
            Professores professor = new Professores(
                "Paulo",
                ""
            );

            Assert.True(!professor.IsValid, "Professor invalido, sobrenome incorreto!");
        }

    
    }
}
