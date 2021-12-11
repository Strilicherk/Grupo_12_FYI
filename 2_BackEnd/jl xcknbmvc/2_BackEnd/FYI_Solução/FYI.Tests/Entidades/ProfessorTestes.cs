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
            Professor professor = new Professor(
                "Paulo",
                "Brandão",
                "paulobrandao@hotmail.com"
            );

            Assert.True(professor.IsValid, "Professor válido");
        }

        [Fact]
        public void DeveRetornarSeProfessorForInvalidoSemNome()
        {
            Professor professor = new Professor(
                "",
                "Brandão",
                "paulobrandao@hotmail.com"
            );

            Assert.True(!professor.IsValid, "Professor invalido, nome incorreto!");
        }

        [Fact]
        public void DeveRetornarSeProfessorForInvalidoSemSobrenome()
        {
            Professor professor = new Professor(
                "Paulo",
                "",
                "paulobrandao@hotmail.com"
            );

            Assert.True(!professor.IsValid, "Professor invalido, sobrenome incorreto!");
        }

        [Fact]
        public void DeveRetornarSeProfessorForInvalidoSemEmail()
        {
            Professor professor = new Professor(
                "Paulo",
                "Brandão",
                ""
            );

            Assert.True(!professor.IsValid, "Professor invalido, email incorreto!");
        }
    }
}
