using Flunt.Notifications;

using FYI.Domain.Queries.Curso;
using FYI.Domain.Repositorios;
using FYI.Shared.Handlers.Contracts;
using FYI.Shared.Queries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Domain.Handlers.Curso
{
    public class ListarCursoHandler : Notifiable<Notification>, IHandlerQuery<ListarCursoQuery>
    {
        private readonly ICursoRepositorio _cursoRepositorio;

        public ListarCursoHandler(ICursoRepositorio cursoRepositorio)
        {
            _cursoRepositorio = cursoRepositorio;
        }

        public IQueryResult Handler(ListarCursoQuery query)
        {
            var lista = _cursoRepositorio.Listar();

            return new GenericQueryResult(true, "Alunos encontrados!", lista);
        }

    }
}
