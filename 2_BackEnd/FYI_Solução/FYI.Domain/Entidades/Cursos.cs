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
    public class Cursos : Base
    {
        public Cursos(string nomeCurso)
        {
            AddNotifications(
            new Contract<Notification>()
                .Requires()
                .IsNotNullOrEmpty(nomeCurso, "NomeCurso", "Nome do curso não pode ser vazio.")
            );

            if (IsValid)
            {
                NomeCurso = nomeCurso;
            }
        }

        public string NomeCurso { get; private set; }

        //Composições
        public IReadOnlyCollection<Turmas> Turmas { get; private set; }
        private List<Turmas> _turmas { get; set; }
        public void AlterarCurso(string nomeCurso)
        {
            AddNotifications(
            new Contract<Notification>()
                .Requires()
                .IsNotEmpty(nomeCurso, "NomeCurso", "Campo 'NomeCurso' não pode ser vazio!")
            );

            if (IsValid)
            {
                NomeCurso = nomeCurso;
            }
        }
    }
}
