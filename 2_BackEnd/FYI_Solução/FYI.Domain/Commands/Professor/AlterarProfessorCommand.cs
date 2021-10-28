using Flunt.Notifications;
using Flunt.Validations;
using FYI.Domain.Entidades;
using FYI.Shared.Commands;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Domain.Commands.Professor
{
    class AlterarProfessorCommand : Notifiable<Notification>, ICommand
    {
        public AlterarProfessorCommand(string nomeProfessor, string sobrenome)
        {
            NomeProfessor = nomeProfessor;
            Sobrenome = sobrenome;
        }

        public string NomeProfessor { get; set; }
        public string Sobrenome { get;  set; }
        //public int Telefone { get; set; }
        public Guid IdUsuario { get;  set; }
        public Usuarios Usuario { get;  set; }
        public void Validar()
        {
            AddNotifications(
           new Contract<Notification>()
               .Requires()
               .IsNotNullOrEmpty(NomeProfessor, "Nome", "Nome não pode ser vazio.")
               .IsNotNullOrEmpty(Sobrenome, "Sobrenome", "Sobrenome não pode ser vazio.")
           //.IsNotNullOrEmpty(telefone, "Telefone", "Telefone não pode ser vazio")
           );
        }
    }
}
