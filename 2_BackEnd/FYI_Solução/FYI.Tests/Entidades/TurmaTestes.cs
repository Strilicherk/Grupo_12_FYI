using FYI.Domain.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace FYI.Tests.Entidades
{
    public class TurmaTestes
    {
        [Fact]
        public void DeveRetornarSeTurmaForValido()
        {
            Turma turma = new Turma(
                "Turma de DEV",
                "Iniciantes sem experiência que queiram ingressar no mercado de trabalho de programação",
                "Curso básico de programação com ênfase em C#",
                "Nenhum",
                0
            );

            Assert.True(turma.IsValid, "Turma válida");

        }

        [Fact]
        public void DeveRetornarSeTurmaForInvalidaSemNome()
        {
            Turma turma = new Turma(
                "",
                "Iniciantes sem experiência que queiram ingressar no mercado de trabalho de programação",
                "Curso básico de programação com ênfase em C#",
                "Nenhum",
                0
            );

            Assert.True(!turma.IsValid, "Turma inválida, nome incorreto.");

        }

        [Fact]
        public void DeveRetornarSeTurmaForInvalidaSemPublicoAlvo()
        {
            Turma turma = new Turma(
                "Turma de DEV",
                "",
                "Curso básico de programação com ênfase em C#",
                "Nenhum",
                0
            );

            Assert.True(!turma.IsValid, "Turma inválida, público alvo incorreto.");

        }

        [Fact]
        public void DeveRetornarSeTurmaForInvalidaSemDescricao()
        {
            Turma turma = new Turma(
                "Turma de DEV",
                "Iniciantes sem experiência que queiram ingressar no mercado de trabalho de programação",
                "",
                "Nenhum",
                0
            );

            Assert.True(!turma.IsValid, "Turma inválida, descrição incorreto.");

        }

        [Fact]
        public void DeveRetornarSeTurmaForInvalidaSemPreRequisito()
        {
            Turma turma = new Turma(
                "Turma de DEV",
                "Iniciantes sem experiência que queiram ingressar no mercado de trabalho de programação",
                "Curso básico de programação com ênfase em C#",
                "",
                0
            );

            Assert.True(!turma.IsValid, "Turma inválida, pré-requisito incorreto.");

        }

        //[Fact]
        //public void DeveRetornarSeTurmaForInvalidaSemQuantidadeAluno()
        //{
        //    Turma turma = new Turma(
        //        "Turma de DEV",
        //        "Iniciantes sem experiência que queiram ingressar no mercado de trabalho de programação",
        //        "Curso básico de programação com ênfase em C#",
        //        "Nenhum",
        //        0
        //    );

        //    Assert.True(!turma.IsValid, "Turma inválida, quantidade de alunos incorreto.");

        //}
    }
}
