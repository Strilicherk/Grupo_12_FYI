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
    public class AlterarFaqCommand : Notifiable<Notification>, ICommand
    {
        public AlterarFaqCommand()
        {

        }
        public Guid Id { get; set; }
        public string Pergunta { get; set; }
        public string Resposta { get; set; }
        public void Validar()
        {

            AddNotifications(
            new Contract<Notification>()
                .Requires()
                .IsNotEmpty(Id, "Id", "Id não pode ser vazio.")
                .IsNotNullOrEmpty(Pergunta, "Pergunta", "Pergunta não pode ser vazio.")
                .IsNotNullOrEmpty(Resposta, "Resposta", "Resposta não pode ser vazio.")
            );
        }
    }
}

