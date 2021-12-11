using FYI.Domain.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace FYI.Tests.Entidades
{
    public class CursoTestes
    {
        [Fact]
        public void DeveRetornarSeCursoForValido()
        {
            Curso curso = new Curso(
                "Dev"
            );

            Assert.True(curso.IsValid, "Curso valido.");
        }

        [Fact]
        public void DeveRetornarSeCursoForInvalidoSemNome()
        {
            Curso curso = new Curso(
                ""
            );

            Assert.True(!curso.IsValid, "Curso invalido, nome incorreto!.");
        }
    }
}
