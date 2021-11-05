using Flunt.Notifications;
using FYI.Domain.Commands.Curso;
using FYI.Domain.Entidades;
using FYI.Domain.Repositorios;
using FYI.Shared.Commands;
using FYI.Shared.Handlers.Contracts;


namespace FYI.Domain.Handlers.Curso
{
    class BuscarPorIdCursoHandler : Notifiable<Notification>, IHandler<BuscarPorIdCursoCommand>
    {
        private readonly ICursoRepositorio _cursoRepositorio;
        public BuscarPorIdCursoHandler(ICursoRepositorio cursoRepositorio)
        {
            _cursoRepositorio = cursoRepositorio;
        }

        public ICommandResult Handler(BuscarPorIdCursoCommand command)
        {
            throw new System.NotImplementedException();
        }
        //public ICommandResult Handler(BuscarPorIdCursoCommand command)
        //{
        //    //validar command
        //    command.Validar();

        //    //procurar curso
        //    if (!command.IsValid)
        //    {
        //        return new GenericCommandResult(false, "Informe o curso corretamente", command.Notifications);
        //    };
        //    //curso existe?
        //    Cursos curso = _cursoRepositorio.BuscarPorId(command.Id);
        //    if (curso == null)
        //    {
        //        return new GenericCommandResult(false, "Curso não encontrado", null);
        //    };

        //}
    }
}

