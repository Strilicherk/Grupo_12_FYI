using Flunt.Notifications;
using Flunt.Validations;
using FYI.Domain.Entidades;
using FYI.Shared.Commands;
using System;


namespace FYI.Domain.Commands.Professor
{
    public class BuscarPorIdProfessorCommand : Notifiable<Notification>, ICommand
    {
        public BuscarPorIdProfessorCommand(Guid id)
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
