using Flunt.Notifications;
using Flunt.Validations;
using FYI.Domain.Entidades;
using FYI.Shared.Commands;
using System;
using System.Collections.Generic;

namespace FYI.Domain.Commands.Turma
{
    class ExcluirTurmaCommand : Notifiable<Notification>, ICommand
    {
        public ExcluirTurmaCommand(Guid id)
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
