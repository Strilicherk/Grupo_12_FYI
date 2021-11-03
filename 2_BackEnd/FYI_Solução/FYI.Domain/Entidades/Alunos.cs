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
    public class Alunos : Base
    {
        public Alunos(string nome, string sobrenome, string cpf, DateTime dataNascimento, string telefone)
        {
            AddNotifications(
            new Contract<Notification>()
                .Requires()
                .IsNotNullOrEmpty(nome, "Nome", "Nome não pode ser vazio.")
                .IsNotNullOrEmpty(sobrenome, "Sobrenome", "Sobrenome não pode ser vazio.")
                .IsGreaterOrEqualsThan(cpf, 11, "CPF", "O CPF deve ter pelo menos 11 caracteres.")
                .IsNotNull(dataNascimento, "DataNascimento", "Data de nascimento não pode ser vazia.")
                .IsNotEmpty(telefone, "Telefone", "Telefone não pode ser vazio")
            );

            if (IsValid)
            {
                Nome = nome;
                Sobrenome = sobrenome;
                CPF = cpf;
                DataNascimento = dataNascimento;
                Telefone = telefone;
            }
        }

        public string Nome { get; private set; }
        public string Sobrenome { get; private set; }
        public string CPF { get; private set; }
        public DateTime DataNascimento { get; private set; }
        public string Telefone { get; private set; }

        // Composições
        public Guid IdUsuario { get; private set; }
        public Usuarios Usuario { get; private set; }

        public Guid IdTurma { get; private set; }
        public Turmas Turma { get; private set; }
    }
}
