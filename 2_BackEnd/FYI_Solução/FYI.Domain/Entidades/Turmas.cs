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
    public class Turmas : Base
    {
        public Turmas(string nomeTurma, string publicoAlvo, string descricao, string preRequisito, int quantidadeAluno, int qtdMax)
        {
            AddNotifications(
            new Contract<Notification>()
                .Requires()
                .IsNotNullOrEmpty(nomeTurma, "Nome", "Nome não pode ser vazio.")
                .IsNotNullOrEmpty(publicoAlvo, "Público alvo", "Publico alvo não pode ser vazio.")
                .IsNotNullOrEmpty(descricao, "Descrição", "Descrição não pode ser vazio.")
                .IsNotNullOrEmpty(preRequisito, "Pré-requisito", "Pré-requisito não pode ser vazio.")
                .IsNotNull(quantidadeAluno, "Quantidade de alunos", "Quantidade de alunos não pode ser null")
                .IsNotNull(qtdMax, "Qantidade Maxima", "Quantidade maxima não pode ser null")
            );

            if (IsValid)
            {
                NomeTurma = nomeTurma;
                PublicoAlvo = publicoAlvo;
                Descricao = descricao;
                PreRequisito = preRequisito;
                QuantidadeAluno = quantidadeAluno;
            }
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
    }
}
