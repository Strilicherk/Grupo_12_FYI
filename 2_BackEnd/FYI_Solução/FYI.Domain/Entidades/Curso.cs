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
    public class Curso : Base
    {
        public Curso(string nomeCurso)
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
    }
}
