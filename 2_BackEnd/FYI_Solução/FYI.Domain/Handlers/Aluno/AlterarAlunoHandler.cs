using Flunt.Notifications;
using FYI.Domain.Commands.Aluno;
using FYI.Domain.Entidades;
using FYI.Domain.Repositorios;
using FYI.Shared.Commands;
using FYI.Shared.Handlers.Contracts;


namespace FYI.Domain.Handlers.Curso
{
   public class AlterarAlunoHandler : Notifiable<Notification>, IHandler<AlterarAlunoCommand>
    {
        private readonly IAlunoRepositorio _alunoRepositorio;
        public AlterarAlunoHandler(IAlunoRepositorio alunoRepositorio)
        {
            _alunoRepositorio = alunoRepositorio;
        }
        public ICommandResult Handler(AlterarAlunoCommand command)
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

            aluno.AlterarAluno(command.Nome, command.Sobrenome, command.CPF, command.DataNascimento, command.Telefone);

            _alunoRepositorio.Alterar(aluno);

            return new GenericCommandResult(true, "Aluno alterado com sucesso!", aluno);
        }
    }
}
