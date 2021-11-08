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
        public Alunos(string nome, string sobrenome, string cPF, DateTime dataNascimento, string telefone, Guid idUsuario, Guid idTurma)
        {
            AddNotifications(
            new Contract<Notification>()
                .Requires()
                .IsNotNullOrEmpty(nome, "Nome", "Nome não pode ser vazio.")
                .IsNotNullOrEmpty(sobrenome, "Sobrenome", "Sobrenome não pode ser vazio.")
                .IsGreaterOrEqualsThan(cPF, 11, "CPF", "O CPF deve ter pelo menos 11 caracteres.")
                .IsNotNull(dataNascimento, "DataNascimento", "Data de nascimento não pode ser vazia.")
                .IsNotEmpty(telefone, "Telefone", "Telefone não pode ser vazio")
                .IsNotEmpty(idUsuario, "IdUsuario", "IdUsuario não pode ser vazio")
                .IsNotEmpty(idTurma, "IdTurma", "IdTurma não pode ser vazio")
            ); 

            if (IsValid)
            {
                Nome = nome;
                Sobrenome = sobrenome;
                CPF = cPF;
                DataNascimento = dataNascimento;
                Telefone = telefone;
                IdTurma = idTurma;
                IdUsuario = idUsuario;
            }
        }

        public string Nome { get; private set; }
        public string Sobrenome { get; private set; }
        public string CPF { get; private set; }
        public DateTime DataNascimento { get; private set; }
        public string Telefone { get; private set; }

        // Composições
        public Guid IdUsuario { get; private set; }
        public Usuario Usuario { get; private set; }

        public Guid IdTurma { get; private set; }
        public Turmas Turma { get; private set; }

        public void AlterarAluno(string nome, string sobrenome, string cPF, DateTime dataNascimento, string telefone)
        {
            AddNotifications(
            new Contract<Notification>()
                .Requires()
                .IsNotNullOrEmpty(nome, "Nome", "Nome não pode ser vazio.")
                .IsNotNullOrEmpty(sobrenome, "Sobrenome", "Sobrenome não pode ser vazio.")
                .IsGreaterOrEqualsThan(cPF, 11, "CPF", "O CPF deve ter pelo menos 11 caracteres.")
                .IsNotNull(dataNascimento, "DataNascimento", "Data de nascimento não pode ser vazia.")
                .IsNotEmpty(telefone, "Telefone", "Telefone não pode ser vazio")
            );

            if (IsValid)
            {
                Nome = nome;
                Sobrenome = sobrenome;
                CPF = cPF;
                DataNascimento = dataNascimento;
                Telefone = telefone;
            }
        }
    }
}
