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
    class BuscarPorIdCursoCommand : Notifiable<Notification>, ICommand
    {
        public BuscarPorIdCursoCommand()
        {

        }
        public BuscarPorIdCursoCommand(string nomeCurso)
        {
            NomeCurso = nomeCurso;
        }

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