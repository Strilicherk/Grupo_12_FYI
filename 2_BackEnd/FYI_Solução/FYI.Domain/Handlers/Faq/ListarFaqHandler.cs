using Flunt.Notifications;
using FYI.Domain.Queries.Faq;
using FYI.Domain.Repositorios;
using FYI.Shared.Handlers.Contracts;
using FYI.Shared.Queries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Domain.Handlers.Faq
{
    public class ListarFaqHandler : Notifiable<Notification>, IHandlerQuery<ListarFaqQuery>
    {
        private readonly IFaqRepositorio _faqRepositorio;

        public ListarFaqHandler(IFaqRepositorio faqRepositorio)
        {
            _faqRepositorio = faqRepositorio;
        }

        public IQueryResult Handler(ListarFaqQuery query)
        {
            var lista = _faqRepositorio.Listar();

            return new GenericQueryResult(true, "Alunos encontrados!", lista);
        }

    }

}