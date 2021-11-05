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
        public AlterarTurmaCommand(string nomeTurma, DateTime dataInicio, DateTime dataFim, string publicoAlvo, string descricao, string preRequisito, int quantidadeAluno, int qtdMax)
        {
            NomeTurma = nomeTurma;
            DataInicio = dataInicio;
            DataFim = dataFim;
            PublicoAlvo = publicoAlvo;
            Descricao = descricao;
            PreRequisito = preRequisito;
            QuantidadeAluno = quantidadeAluno;
            QtdMax = qtdMax;
        }

        public string NomeTurma { get; private set; }
        public DateTime DataInicio { get; private set; }
        public DateTime DataFim { get; private set; }
        public string PublicoAlvo { get; private set; }
        public string Descricao { get; private set; }
        public string PreRequisito { get; private set; }
        public int QuantidadeAluno { get; private set; }
        public int QtdMax { get; private set; }

        // Composição
        public IReadOnlyCollection<Alunos> Alunos { get; private set; }
        private List<Alunos> _alunos { get; set; }


        public Guid IdCurso { get; private set; }
        public Cursos Curso { get; private set; }

        public Guid IdProfessor { get; private set; }
        public Professores Professor { get; private set; }
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
