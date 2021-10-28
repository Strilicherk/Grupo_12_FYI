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
        public Turmas(string nomeTurma, string publicoAlvo, string descricao, string preRequisito, int quantidadeAluno)
        {
            AddNotifications(
            new Contract<Notification>()
                .Requires()
                .IsNotNullOrEmpty(nomeTurma, "Nome", "Nome não pode ser vazio.")
                .IsNotNullOrEmpty(publicoAlvo, "Público alvo", "Publico alvo não pode ser vazio.")
                .IsNotNullOrEmpty(descricao, "Descrição", "Descrição não pode ser vazio.")
                .IsNotNullOrEmpty(preRequisito, "Pré-requisito", "Pré-requisito não pode ser vazio.")
                .IsNotNull(quantidadeAluno, "Quantidade de alunos", "Quantidade de alunos não pode ser null")
            //.IsNotNullOrEmpty(dataInicio, "Data de início", "A data de início não pode ser null ou vazio")
            //.IsNotNullOrEmpty(dataFim, "Data de termino", "A data de termino não pode ser null ou vazio")
            );

            if (IsValid)
            {
                NomeTurma = nomeTurma;
                // DataInicio = dataInicio;
                // DataFim = dataFim;
                PublicoAlvo = publicoAlvo;
                Descricao = descricao;
                PreRequisito = preRequisito;
                QuantidadeAluno = quantidadeAluno;
            }
        }

        public string NomeTurma { get; private set; }
        // public DateTime DataInicio { get; set; }
        // public DateTime DataFim { get; set; }
        public string PublicoAlvo { get; private set; }
        public string Descricao { get; private set; }
        public string PreRequisito { get; private set; }
        public int QuantidadeAluno { get; private set; }
        public Guid IdCurso { get; private set; }
        public Cursos Curso { get; private set; }
        public Guid IdProfessor { get; private set; }
        public Professors Professor { get; private set; }
    }
}
