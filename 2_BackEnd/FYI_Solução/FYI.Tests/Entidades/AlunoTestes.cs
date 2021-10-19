using FYI.Domain.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace FYI.Tests.Entidades
{
    public class AlunoTestes
    {
        [Fact]
        public void DeveRetornarSeAlunoForValido()
        {
            Aluno aluno = new Aluno(
                "Matheus",
                "Strilicherk",
                "12345678910",
                DateTime.Now
            );

            Assert.True(aluno.IsValid, "Aluno válido.");
        }

        [Fact]
        public void DeveRetornarSeAlunoForInvalidoSemNome()
        {
            Aluno aluno = new Aluno(
                "",
                "Strilicherk",
                "12345678910",
                DateTime.Now
            );

            Assert.True(!aluno.IsValid, "Aluno inválido, nome incorreto.");
        }

        [Fact]
        public void DeveRetornarSeAlunoForInvalidoSemSobrenome()
        {
            Aluno aluno = new Aluno(
                "Matheus",
                "",
                "12345678910",
                DateTime.Now
            );

            Assert.True(!aluno.IsValid, "Aluno inválido, sobrenome incorreto.");
        }

        [Fact]
        public void DeveRetornarSeAlunoForInvalidoSemCPF()
        {
            Aluno aluno = new Aluno(
                "Matheus",
                "Strilicherk",
                "123456789",
                DateTime.Now
            );

            Assert.True(!aluno.IsValid, "Aluno inválido, CPF incorreto");
        }


    }
}
