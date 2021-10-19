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
    public class Aluno : Base
    {
        public Aluno(string nomeAluno, string sobrenome, string cpf, DateTime dataNascimento)
        {
            NomeAluno = nomeAluno;
            Sobrenome = sobrenome;
            CPF = cpf;
            DataNascimento = dataNascimento;

            AddNotifications(
            new Contract<Notification>()
                .Requires()
                .IsNotNullOrEmpty(nomeAluno, "Nome", "Nome não pode ser vazio.")
                .IsNotNullOrEmpty(sobrenome, "Sobrenome", "Sobrenome não pode ser vazio.")
                .IsGreaterOrEqualsThan(cpf, 11, "CPF", "O CPF deve ter pelo menos 11 caracteres.")
                .IsNotNull(dataNascimento, "DataNascimento", "Data de nascimento não pode ser vazia.")
            );
        }

        public string NomeAluno { get; private set; }
        public string Sobrenome { get; private set; }
        public string CPF { get; private set; }
        public DateTime DataNascimento { get; private set; }
    }
}
