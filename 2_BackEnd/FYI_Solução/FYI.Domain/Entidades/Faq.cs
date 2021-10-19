using Flunt.Notifications;
using Flunt.Validations;
using FYI.Shared.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Domain.Entidades
{
    public class Faq : Base
    {
        public Faq(string pergunta, string resposta)
        {
            Pergunta = pergunta;
            Resposta = resposta;

            AddNotifications(
            new Contract<Notification>()
                .Requires()
                .IsNotNullOrEmpty(pergunta, "Pergunta", "Pergunta não pode ser vazio.")
                .IsNotNullOrEmpty(resposta, "Resposta", "Resposta não pode ser vazio.")
            );

        }

        public string Pergunta { get; private set; }
        public string Resposta { get; set; }
    }
}
