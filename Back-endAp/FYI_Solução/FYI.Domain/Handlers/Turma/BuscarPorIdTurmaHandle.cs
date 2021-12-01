using Flunt.Notifications;
using FYI.Domain.Entidades;
using FYI.Domain.Queries.Turmas;
using FYI.Domain.Repositorios;
using FYI.Shared.Commands;
using FYI.Shared.Handlers.Contracts;
using FYI.Shared.Queries;

namespace FYI.Domain.Handlers.Turma
{
    public class BuscarPorIdTurmaHandle : Notifiable<Notification>, IHandlerQuery<BuscarPorIdTurmaQuery>
    {
        private readonly ITurmaRepositorio _turmaRepositorio;

        public BuscarPorIdTurmaHandle(ITurmaRepositorio turmaRepositorio)
        {
            _turmaRepositorio = turmaRepositorio;
        }

        public IQueryResult Handler(BuscarPorIdTurmaQuery query)
        {
            query.Validar();

            if (!query.IsValid)
            {
                return new GenericQueryResult(false, "Informe corretamente os dados do curso!", query.Notifications);
            }

            // listar todos os cursos
            var turmaBuscado = _turmaRepositorio.BuscarPorId(query.id);

            if (turmaBuscado == null)
            {
                return new GenericQueryResult(false, "Não existe nenhum curso com este id!", query.Notifications);
            }

            return new GenericQueryResult(true, "Cursos encontrados!", turmaBuscado);
        }

    }
}
