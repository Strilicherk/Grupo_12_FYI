using Flunt.Notifications;
using FYI.Domain.Entidades;
using FYI.Domain.Queries.Professores;
using FYI.Domain.Repositorios;
using FYI.Shared.Commands;
using FYI.Shared.Handlers.Contracts;
using FYI.Shared.Queries;

namespace FYI.Domain.Handlers.Professor
{
    public class BuscarPorIdProfessorHandle : Notifiable<Notification>, IHandlerQuery<BuscarPorIdProfessoresQuery>
    {
        private readonly IProfessorRepositorio _professorRepositorio;

        public BuscarPorIdProfessorHandle(IProfessorRepositorio professorRepositorio)
        {
            _professorRepositorio = professorRepositorio;
        }

        public IQueryResult Handler(BuscarPorIdProfessoresQuery query)
        {
            query.Validar();

            if (!query.IsValid)
            {
                return new GenericQueryResult(false, "Informe corretamente os dados do curso!", query.Notifications);
            }

            // listar todos os cursos
            var professorBuscado = _professorRepositorio.BuscarPorId(query.id);

            if (professorBuscado == null)
            {
                return new GenericQueryResult(false, "Não existe nenhum curso com este id!", query.Notifications);
            }

            return new GenericQueryResult(true, "Cursos encontrados!", professorBuscado);
        }

    }
}
