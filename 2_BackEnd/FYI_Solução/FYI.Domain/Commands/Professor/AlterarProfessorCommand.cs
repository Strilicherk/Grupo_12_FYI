using Flunt.Notifications;
using Flunt.Validations;
using FYI.Domain.Entidades;
using FYI.Shared.Commands;
using System;


namespace FYI.Domain.Commands.Professor
{
    public class AlterarProfessorCommand : Notifiable<Notification>, ICommand
    {
        public AlterarProfessorCommand(string nomeProfessor, string sobrenome, Guid id)
        {
            Id = id;
            NomeProfessor = nomeProfessor;
            Sobrenome = sobrenome;
        }
        public Guid Id { get; private set; }
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
