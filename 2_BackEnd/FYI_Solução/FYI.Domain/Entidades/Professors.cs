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
    public class Professors : Base
    {
        public Professors(string nomeProfessor, string sobrenome) //int professor
        {
            AddNotifications(
            new Contract<Notification>()
                .Requires()
                .IsNotNullOrEmpty(nomeProfessor, "Nome", "Nome não pode ser vazio.")
                .IsNotNullOrEmpty(sobrenome, "Sobrenome", "Sobrenome não pode ser vazio.")
                //.IsNotNullOrEmpty(telefone, "Telefone", "Telefone não pode ser vazio")
            );

            if (IsValid)
            {
                NomeProfessor = nomeProfessor;
                Sobrenome = sobrenome;
                //Telefone = telefone;
            }

        }



        public string NomeProfessor { get; private set; }
        public string Sobrenome { get; private set; }
        //public int Telefone { get; set; }
        public Guid IdUsuario { get; private set; }
        public Usuarios Usuario { get; private set; }
    }
}
