using Flunt.Notifications;
using FYI.Domain.Queries.Alunos;
using FYI.Domain.Queries.Turmas;
using FYI.Domain.Repositorios;
using FYI.Shared.Handlers.Contracts;
using FYI.Shared.Queries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Domain.Handlers.Turma
{
    public class ListarTurmaHandler : Notifiable<Notification>, IHandlerQuery<ListarTurmaQuery>
    {
        private readonly ITurmaRepositorio _turmaRepositorio;

        public ListarTurmaHandler(ITurmaRepositorio turmaRepositorio)
        {
            _turmaRepositorio = turmaRepositorio;
        }

        public IQueryResult Handler(ListarTurmaQuery query)
        {
            var lista = _turmaRepositorio.Listar();

            return new GenericQueryResult(true, "Alunos encontrados!", lista);
        }

    }
}