using FYI.Domain.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace FYI.Tests.Entidades
{
    public class FaqTestes
    {
        [Fact]
        public void DeveRetornarSeFaqForValido()
        {
            Faq faq = new Faq(
                "Como adquiro um curso?",
                "Entre em contato conosco!"
            );

            Assert.True(faq.IsValid, "faq valido.");
        }

        [Fact]
        public void DeveRetornarSeCursoForInvalidoSemPergunta()
        {
            Faq faq = new Faq(
                "",
                "Entre em contato conosco!"
            );

            Assert.True(!faq.IsValid, "faq inválido, pergunta incorreto!");
        }

        [Fact]
        public void DeveRetornarSeCursoForInvalidoSemResposta()
        {
            Faq faq = new Faq(
                "Como adquiro um curso?",
                ""
            );

            Assert.True(!faq.IsValid, "faq inválido, resposta incorreto!");
        }
    }
}
