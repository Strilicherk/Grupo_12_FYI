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
            Cursos curso = new Cursos(
                "Dev"
            );

            Assert.True(curso.IsValid, "Curso valido.");
        }

        [Fact]
        public void DeveRetornarSeCursoForInvalidoSemNome()
        {
            Cursos curso = new Cursos(
                ""
            );

            Assert.True(!curso.IsValid, "Curso invalido, nome incorreto!.");
        }
    }
}
