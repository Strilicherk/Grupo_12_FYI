using Flunt.Notifications;
using Flunt.Validations;
using FYI.Domain.Entidades;
using FYI.Shared.Commands;
using FYI.Shared.Enums;
using System;

namespace FYI.Domain.Commands.Aluno
{
    public class CadastrarAlunoCommand : Notifiable<Notification>, ICommand
    {
        public CadastrarAlunoCommand()
        {

        }
        public CadastrarAlunoCommand(string nome, string sobrenome, string cPF, DateTime dataNascimento, string telefone,string email, string senha, Guid idTurma)
        {
            Nome = nome;
            Sobrenome = sobrenome;
            CPF = cPF;
            DataNascimento = dataNascimento;
            Telefone = telefone;
            IdTurma = idTurma;
            Email = email;
            Senha = senha;
        }

        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public string CPF { get; set; }
        public DateTime DataNascimento { get; set; }
        public string Telefone { get; set; }

        // Composições
        public Guid IdUsuario { get; private set; }

        public Guid IdTurma { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }

        public void Validar()
        {
            AddNotifications(
            new Contract<Notification>()
                .Requires()
                .IsNotNullOrEmpty(Nome, "Nome", "Nome não pode ser vazio.")
                .IsNotNullOrEmpty(Sobrenome, "Sobrenome", "Sobrenome não pode ser vazio.")
                .IsGreaterOrEqualsThan(CPF, 11, "CPF", "O CPF deve ter pelo menos 11 caracteres.")
                .IsNotNull(DataNascimento, "DataNascimento", "Data de nascimento não pode ser vazia.")
                .IsNotEmpty(Telefone, "Telefone", "Telefone não pode ser vazio")
                .IsEmail(Email, "Email", "formato incorreto de email")
                .IsGreaterThan(Senha, 7, "Senha", "A senha deve ter 8 caracteres ou mais")
            );
        }
    }
}