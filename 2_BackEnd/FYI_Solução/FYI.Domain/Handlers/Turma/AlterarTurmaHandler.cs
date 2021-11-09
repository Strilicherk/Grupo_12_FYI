using Flunt.Notifications;

using FYI.Domain.Commands.Turma;
using FYI.Domain.Entidades;
using FYI.Domain.Repositorios;
using FYI.Shared.Commands;
using FYI.Shared.Handlers.Contracts;


namespace FYI.Domain.Handlers.Curso
{
    class AlterarTurmaHandler : Notifiable<Notification>, IHandler<AlterarTurmaCommand>
    {
        private readonly ITurmaRepositorio _turmaRepositorio;
        public AlterarTurmaHandler(ITurmaRepositorio turmaRepositorio)
        {
            _turmaRepositorio = turmaRepositorio;
        }
        public ICommandResult Handler(AlterarTurmaCommand command)
        {
            //validar command
            command.Validar();

            //procurar curso
            if (!command.IsValid)
            {
                return new GenericCommandResult(false, "Informe a Turma corretamente", command.Notifications);
            };
            //curso existe?
            Turmas turma = _turmaRepositorio.BuscarPorId(command.Id);
            if (turma == null)
            {
                return new GenericCommandResult(false, "Turma não encontrada", null);
            };

            turma.AlterarTurma(command.NomeTurma,command.PublicoAlvo, command.Descricao, command.PreRequisito,command.QuantidadeAluno,command.QtdMax,command.DataInicio, command.DataFim);

            _turmaRepositorio.Alterar(turma);

            return new GenericCommandResult(true, "Turma alterada com sucesso!", turma);
        }
    }
}
