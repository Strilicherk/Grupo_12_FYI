using Flunt.Notifications;
using FYI.Domain.Queries.Alunos;
using FYI.Domain.Repositorios;
using FYI.Shared.Handlers.Contracts;
using FYI.Shared.Queries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Domain.Handlers.Aluno
{
    public class ListarAlunoHandler : Notifiable<Notification>, IHandlerQuery<ListarAlunoQuery>
    {
        private readonly IAlunoRepositorio _alunoRepositorio;

        public ListarAlunoHandler(IAlunoRepositorio alunoRepositorio)
        {
            _alunoRepositorio = alunoRepositorio;
        }

        public IQueryResult Handler(ListarAlunoQuery query)
        {
            var lista = _alunoRepositorio.Listar();

            return new GenericQueryResult(true, "Alunos encontrados!", lista);
        }

    }
       
}
