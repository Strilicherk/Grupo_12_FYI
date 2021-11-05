using FYI.Domain.Commands.Faq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace FYI.Tests.Commands.Faq
{
    public class CriarPerguntaCommandTeste
    {
        [Fact]
        public void DeveRetornarSucessoSeDadosForemValidos()
        {
            var command = new CadastrarFaqCommand();
            command.Pergunta = "O que a nossa empresa oferece?";
            command.Resposta = "Ela oferece cursos";

            command.Validar();

            Assert.True(command.IsValid, "Os dados estão preenchidos corretamente");


        }
    }
}
