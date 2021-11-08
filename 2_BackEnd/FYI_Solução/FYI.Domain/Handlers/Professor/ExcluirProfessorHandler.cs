using Flunt.Notifications;
using FYI.Domain.Commands.Professor;
using FYI.Domain.Entidades;
using FYI.Domain.Repositorios;
using FYI.Shared.Commands;
using FYI.Shared.Handlers.Contracts;


namespace FYI.Domain.Handlers.Curso
{
    class ExcluirProfessorHandler : Notifiable<Notification>, IHandler<ExcluirProfessorCommand>
    {
        private readonly IProfessorRepositorio _professorRepositorio;
        public ExcluirProfessorHandler(IProfessorRepositorio professorRepositorio)
        {
            _professorRepositorio = professorRepositorio;
        }
        public ICommandResult Handler(ExcluirProfessorCommand command)
        {
            //validar command
            command.Validar();

            //procurar curso
            if (!command.IsValid)
            {
                return new GenericCommandResult(false, "Informe o Professor corretamente", command.Notifications);
            };
            //curso existe?
            Professores professor = _professorRepositorio.BuscarPorId(command.Id);
            if (professor == null)
            {
                return new GenericCommandResult(false, "Professor não encontrado", null);
            };

            _professorRepositorio.Excluir(professor);

            return new GenericCommandResult(true, "Nome e Sobrenome do professor excluido com sucesso!", professor);
        }
    }
}
