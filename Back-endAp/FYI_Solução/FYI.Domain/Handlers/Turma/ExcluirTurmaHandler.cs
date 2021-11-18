using Flunt.Notifications;

using FYI.Domain.Commands.Turma;
using FYI.Domain.Entidades;
using FYI.Domain.Repositorios;
using FYI.Shared.Commands;
using FYI.Shared.Handlers.Contracts;


namespace FYI.Domain.Handlers.Turma
{
    public class ExcluirTurmaHandler : Notifiable<Notification>, IHandler<ExcluirTurmaCommand>
    {
        private readonly ITurmaRepositorio _turmaRepositorio;
        public ExcluirTurmaHandler(ITurmaRepositorio turmaRepositorio)
        {
            _turmaRepositorio = turmaRepositorio;
        }
        public ICommandResult Handler(ExcluirTurmaCommand command)
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

            _turmaRepositorio.Excluir(turma);

            return new GenericCommandResult(true, "Turma alterada com sucesso!", turma);
        }
    }
}
