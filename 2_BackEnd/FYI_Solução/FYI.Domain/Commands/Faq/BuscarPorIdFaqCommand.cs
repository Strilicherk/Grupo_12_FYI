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
    public class BuscarPorIdFaqCommand : Notifiable<Notification>, ICommand
    {
        public BuscarPorIdFaqCommand(Guid id)
        {
            Id = id;
        }
        public Guid Id { get; set; }

        public void Validar()
        {
            AddNotifications(
               new Contract<Notification>()
               .Requires()
               .IsNotEmpty(Id, "Id", "Id não pode ser vazio.")
       ); ;
        }
    }
}
