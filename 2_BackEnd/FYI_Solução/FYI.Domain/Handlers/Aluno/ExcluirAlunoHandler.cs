using Flunt.Notifications;
using FYI.Domain.Commands.Aluno;
using FYI.Domain.Entidades;
using FYI.Domain.Repositorios;
using FYI.Shared.Commands;
using FYI.Shared.Handlers.Contracts;
using System;

namespace FYI.Domain.Handlers.Curso
{
    public class ExcluirAlunoHandler : Notifiable<Notification>, IHandler<ExcluirAlunoCommand>
    {
        private readonly IAlunoRepositorio _alunoRepositorio;
        public ExcluirAlunoHandler(IAlunoRepositorio alunoRepositorio)
        {
            _alunoRepositorio = alunoRepositorio;
        }
        public ICommandResult Handler(ExcluirAlunoCommand command)
        {
            //validar command
            command.Validar();

            //procurar curso
            if (!command.IsValid)
            {
                return new GenericCommandResult(false, "Informe o Aluno corretamente", command.Notifications);
            };
            //curso existe?
            Alunos aluno = _alunoRepositorio.BuscarPorId(command.Id);
            if (aluno == null)
            {
                return new GenericCommandResult(false, "Aluno não encontrado", null);
            };
            

             _alunoRepositorio.Excluir(aluno);

            return new GenericCommandResult(true, "Aluno alterado com sucesso!", aluno);
        }
    }
}
