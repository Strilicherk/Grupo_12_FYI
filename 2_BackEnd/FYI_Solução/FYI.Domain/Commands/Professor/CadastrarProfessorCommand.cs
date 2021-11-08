using Flunt.Notifications;
using Flunt.Validations;
using FYI.Domain.Entidades;
using FYI.Shared.Commands;
using FYI.Shared.Enums;
using System;


namespace FYI.Domain.Commands.Professor
{
     public class CadastrarProfessorCommand : Notifiable<Notification>, ICommand
    {
        public CadastrarProfessorCommand()
        {

        }
        public CadastrarProfessorCommand(string nomeProfessor, string sobrenome, string email, string senha, EnTipoUsuario tipoUsuario)
        {
            NomeProfessor = nomeProfessor;
            Sobrenome = sobrenome;
            Senha = senha;
            Email = email;
            TipoUsuario = tipoUsuario;
        }

        public string NomeProfessor { get; set; }
        public string Sobrenome { get; set; }
        //public int Telefone { get; set; }
        public Guid IdUsuario { get; private set; }
        public Entidades.Usuario Usuario { get; private set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public EnTipoUsuario TipoUsuario { get; set; }
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
