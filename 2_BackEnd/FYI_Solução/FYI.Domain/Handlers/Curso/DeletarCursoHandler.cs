using Flunt.Notifications;
using FYI.Domain.Commands.Curso;
using FYI.Domain.Entidades;
using FYI.Domain.Repositorios;
using FYI.Shared.Commands;
using FYI.Shared.Handlers.Contracts;


namespace FYI.Domain.Handlers.Curso
{
    class DeletarCursoHandler : Notifiable<Notification>, IHandler<ExcluirCursoCommand>
    {
        private readonly ICursoRepositorio _cursoRepositorio;
        public DeletarCursoHandler(ICursoRepositorio cursoRepositorio)
        {
            _cursoRepositorio = cursoRepositorio;
        }
        public ICommandResult Handler(ExcluirCursoCommand command)
        {
            //validar command
            command.Validar();

            //procurar curso
            if (!command.IsValid)
            {
                return new GenericCommandResult(false, "Informe o curso corretamente", command.Notifications);
            };
            //curso existe?
            Cursos curso = _cursoRepositorio.BuscarPorId(command.Id);
            if (curso == null)
            {
                return new GenericCommandResult(false, "Curso não encontrado", null);
            };
            _cursoRepositorio.Excluir(curso);

            return new GenericCommandResult(true, "Nome do curso alterado com sucesso!", curso);
        }
    }
}