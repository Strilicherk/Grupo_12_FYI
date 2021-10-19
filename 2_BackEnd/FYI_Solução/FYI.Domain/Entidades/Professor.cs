using Flunt.Notifications;
using Flunt.Validations;
using FYI.Shared.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Domain.Entidades
{
    public class Professor : Base
    {
        public Professor(string nomeProfessor, string sobrenome, string email) //int professor
        {
            NomeProfessor = nomeProfessor;
            Sobrenome = sobrenome;
            //Telefone = telefone;
            Email = email;

            AddNotifications(
            new Contract<Notification>()
                .Requires()
                .IsNotNullOrEmpty(nomeProfessor, "Nome", "Nome não pode ser vazio.")
                .IsNotNullOrEmpty(sobrenome, "Sobrenome", "Sobrenome não pode ser vazio.")
                //.IsNotNullOrEmpty(telefone, "Telefone", "Telefone não pode ser vazio")
                .IsEmail(email, "Email", "Email não pode ser vazio.")

            );
        }



        public string NomeProfessor { get; private set; }
        public string Sobrenome { get; private set; }
        //public int Telefone { get; set; }
        public string Email { get; private set; }
    }
}
