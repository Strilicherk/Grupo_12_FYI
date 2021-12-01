using Flunt.Notifications;
using FYI.Domain.Entidades;
using FYI.Domain.Queries.Faq;
using FYI.Domain.Repositorios;
using FYI.Shared.Commands;
using FYI.Shared.Handlers.Contracts;
using FYI.Shared.Queries;

namespace FYI.Domain.Handlers.Faq
{
    public class BuscarPorIdFaqHandle : Notifiable<Notification>, IHandlerQuery<BuscarPorIdFaqQuery>
    {
        private readonly IFaqRepositorio _faqRepositorio;

        public BuscarPorIdFaqHandle(IFaqRepositorio faqRepositorio)
        {
            _faqRepositorio = faqRepositorio;
        }

        public IQueryResult Handler(BuscarPorIdFaqQuery query)
        {
            query.Validar();

            if (!query.IsValid)
            {
                return new GenericQueryResult(false, "Informe corretamente os dados do curso!", query.Notifications);
            }

            // listar todos os cursos
            var faqBuscado = _faqRepositorio.BuscarPorId(query.id);

            if (faqBuscado == null)
            {
                return new GenericQueryResult(false, "Não existe nenhum curso com este id!", query.Notifications);
            }

            return new GenericQueryResult(true, "Cursos encontrados!", faqBuscado);
        }

    }
}
