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
    public class Professores : Base
    {
        public Professores(string nomeProfessor, string sobrenome, Guid idUsuario) 
        {
            AddNotifications(
            new Contract<Notification>()
                .Requires()
                .IsNotNullOrEmpty(nomeProfessor, "Nome", "Nome não pode ser vazio.")
                .IsNotNullOrEmpty(sobrenome, "Sobrenome", "Sobrenome não pode ser vazio.")
                .IsNotEmpty(idUsuario, "IdUsuario", "IdUsuario não pode ser vazio")
            );

            if (IsValid)
            {
                NomeProfessor = nomeProfessor;
                Sobrenome = sobrenome;
                IdUsuario = idUsuario;
            }

        }

       
        public string NomeProfessor { get; private set; }
        public string Sobrenome { get; private set; }
        public int Telefone { get; set; }

        // Composição
        public IReadOnlyCollection<Turmas> Turmas { get; private set; }
        private List<Turmas> _turmas { get; set; }

        public Guid IdUsuario { get; private set; }
        public Usuario Usuario { get; private set; }

        public void AlterarProfessor(string nomeProfessor, string sobrenome)
        {
            AddNotifications(
             new Contract<Notification>()
                 .Requires()
                 .IsNotNullOrEmpty(nomeProfessor, "Nome", "Nome não pode ser vazio.")
                 .IsNotNullOrEmpty(sobrenome, "Sobrenome", "Sobrenome não pode ser vazio.")
             );

            if (IsValid)
            {
                NomeProfessor = nomeProfessor;
                Sobrenome = sobrenome;
            }
        }

    }
}
