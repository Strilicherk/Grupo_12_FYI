using Flunt.Notifications;
using Flunt.Validations;
using FYI.Domain.Entidades;
using FYI.Shared.Commands;
using System;
using System.Collections.Generic;

namespace FYI.Domain.Commands.Turma
{
    public class AlterarTurmaCommand : Notifiable<Notification>, ICommand
    {
        public AlterarTurmaCommand()
        {

        }
        public AlterarTurmaCommand(Guid id,string nomeTurma, DateTime dataInicio, DateTime dataFim, string publicoAlvo, string descricao, string preRequisito, int quantidadeAluno, int qtdMax)
        {
            Id = id;
            NomeTurma = nomeTurma;
            DataInicio = dataInicio;
            DataFim = dataFim;
            PublicoAlvo = publicoAlvo;
            Descricao = descricao;
            PreRequisito = preRequisito;
            QuantidadeAluno = quantidadeAluno;
            QtdMax = qtdMax;
        }
        public Guid Id { get;  set; }
        public string NomeTurma { get;  set; }
        public DateTime DataInicio { get;  set; }
        public DateTime DataFim { get;  set; }
        public string PublicoAlvo { get;  set; }
        public string Descricao { get;  set; }
        public string PreRequisito { get;  set; }
        public int QuantidadeAluno { get;  set; }
        public int QtdMax { get;  set; }

        // Composição
        public IReadOnlyCollection<Alunos> Alunos { get; private set; }
        private List<Alunos> _alunos { get; set; }


        public Guid IdCurso { get; private set; }

        public Guid IdProfessor { get; private set; }
        public void Validar()
        {
            AddNotifications(
           new Contract<Notification>()
               .Requires()
               .IsNotNullOrEmpty(NomeTurma, "Nome", "Nome não pode ser vazio.")
               .IsNotNullOrEmpty(PublicoAlvo, "Público alvo", "Publico alvo não pode ser vazio.")
               .IsNotNullOrEmpty(Descricao, "Descrição", "Descrição não pode ser vazio.")
               .IsNotNullOrEmpty(PreRequisito, "Pré-requisito", "Pré-requisito não pode ser vazio.")
               .IsNotNull(QuantidadeAluno, "Quantidade de alunos", "Quantidade de alunos não pode ser null")
               .IsNotNull(QtdMax, "Qantidade Maxima", "Quantidade maxima não pode ser null")
               );
        }
    }
}
