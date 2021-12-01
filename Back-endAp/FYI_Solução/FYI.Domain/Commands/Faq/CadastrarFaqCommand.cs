using Flunt.Notifications;
using Flunt.Validations;
using FYI.Shared.Commands;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Domain.Commands.Faq
{
    public class CadastrarFaqCommand : Notifiable<Notification>, ICommand
    {
        public CadastrarFaqCommand()
        {

        }
        public CadastrarFaqCommand(string pergunta, string resposta)
        {
            Pergunta = pergunta;
            Resposta = resposta;
        }

        public string Pergunta { get; set; }
        public string Resposta { get; set; }
        public void Validar()
        {

            AddNotifications(
            new Contract<Notification>()
                .Requires()
                .IsNotNullOrEmpty(Pergunta, "Pergunta", "Pergunta não pode ser vazio.")
                .IsNotNullOrEmpty(Resposta, "Resposta", "Resposta não pode ser vazio.")
            );
        }
    }
}