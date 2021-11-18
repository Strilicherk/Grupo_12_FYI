using Flunt.Notifications;
using Flunt.Validations;
using FYI.Shared.Commands;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Domain.Commands.Curso
{
    public class AlterarCursoCommand : Notifiable<Notification>, ICommand
    {
        public AlterarCursoCommand(string nomeCurso, Guid id)
        {
            Id = id;
            NomeCurso = nomeCurso;
        }
        public Guid Id { get;  set; }
        public string NomeCurso { get; set; }

        public void Validar()
        {
            AddNotifications(
           new Contract<Notification>()
               .Requires()
               .IsNotNullOrEmpty(NomeCurso, "NomeCurso", "Nome do curso não pode ser vazio.")
               );
        }
    }
}