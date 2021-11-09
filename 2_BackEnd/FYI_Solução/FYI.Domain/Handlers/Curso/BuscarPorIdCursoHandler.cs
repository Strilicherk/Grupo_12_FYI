using Flunt.Notifications;
using FYI.Domain.Commands.Curso;
using FYI.Domain.Entidades;
using FYI.Domain.Repositorios;
using FYI.Shared.Commands;
using FYI.Shared.Handlers.Contracts;


namespace FYI.Domain.Handlers.Curso
{
    public class BuscarPorIdCursoHandle : Notifiable<Notification>, IHandlerQuery<BuscarPorIdCursoQuery>
    {
        private readonly ICursoRepository _cursoRepository;

        public BuscarPorIdCursoHandle(ICursoRepository cursoRepository)
        {
            _cursoRepository = cursoRepository;
        }

        public IQueryResult Handler(BuscarPorIdCursoQuery query)
        {
            query.Validar();

            if (!query.IsValid)
            {
                return new GenericQueryResult(false, "Informe corretamente os dados do curso!", query.Notifications);
            }

            // listar todos os cursos
            var cursoBuscado = _cursoRepository.BuscarPorId(query.id);

            if (cursoBuscado == null)
            {
                return new GenericQueryResult(false, "Não existe nenhum curso com este id!", query.Notifications);
            }

            return new GenericQueryResult(true, "Cursos encontrados!", cursoBuscado);
        }

    }
}

