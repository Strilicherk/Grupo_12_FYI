using Flunt.Notifications;
using Flunt.Validations;
using FYI.Domain.Entidades;
using FYI.Shared.Commands;
using System;

namespace FYI.Domain.Commands.Aluno
{
    public class ExcluirAlunoCommand : Notifiable<Notification>, ICommand
    {
        
        public ExcluirAlunoCommand(Guid id)
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