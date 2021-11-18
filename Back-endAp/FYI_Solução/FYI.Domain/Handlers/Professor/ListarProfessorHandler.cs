using Flunt.Notifications;
using FYI.Domain.Queries.Alunos;
using FYI.Domain.Queries.Professores;
using FYI.Domain.Repositorios;
using FYI.Shared.Handlers.Contracts;
using FYI.Shared.Queries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Domain.Handlers.Professor
{
    public class ListarProfessorHandler : Notifiable<Notification>, IHandlerQuery<ListarProfessorQuery>
    {
        private readonly IProfessorRepositorio _professorRepositorio;

        public ListarProfessorHandler(IProfessorRepositorio professorRepositorio)
        {
            _professorRepositorio = professorRepositorio;
        }

        public IQueryResult Handler(ListarProfessorQuery query)
        {
            var lista = _professorRepositorio.Listar();

            return new GenericQueryResult(true, "Alunos encontrados!", lista);
        }

    }
}