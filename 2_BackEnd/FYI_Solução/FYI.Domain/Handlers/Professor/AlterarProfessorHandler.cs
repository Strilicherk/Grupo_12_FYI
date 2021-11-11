using Flunt.Notifications;
using FYI.Domain.Commands.Professor;
using FYI.Domain.Entidades;
using FYI.Domain.Repositorios;
using FYI.Shared.Commands;
using FYI.Shared.Handlers.Contracts;


namespace FYI.Domain.Handlers.Professor
{
    public class AlterarProfessorHandler : Notifiable<Notification>, IHandler<AlterarProfessorCommand>
    {
        private readonly IProfessorRepositorio _professorRepositorio;
        public AlterarProfessorHandler(IProfessorRepositorio professorRepositorio)
        {
            _professorRepositorio = professorRepositorio;
        }
        public ICommandResult Handler(AlterarProfessorCommand command)
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

            professor.AlterarProfessor(command.NomeProfessor, command.Sobrenome, command.Telefone);

            _professorRepositorio.Alterar(professor);

            return new GenericCommandResult(true, "Peegunta e Resposta do Faq alterado com sucesso!", professor);
        }
    }
}
