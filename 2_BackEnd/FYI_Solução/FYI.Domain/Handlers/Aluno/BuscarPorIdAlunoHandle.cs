using Flunt.Notifications;
using FYI.Domain.Entidades;
using FYI.Domain.Queries.Alunos;
using FYI.Domain.Repositorios;
using FYI.Shared.Commands;
using FYI.Shared.Handlers.Contracts;
using FYI.Shared.Queries;

namespace FYI.Domain.Handlers.Curso
{
    public class BuscarPorIdAlunoHandle : Notifiable<Notification>, IHandlerQuery<BuscarPorIdAlunoQuery>
    {
        private readonly IAlunoRepositorio _alunoRepositorio;

        public BuscarPorIdAlunoHandle(IAlunoRepositorio alunoRepositorio)
        {
            _alunoRepositorio = alunoRepositorio;
        }

        public IQueryResult Handler(BuscarPorIdAlunoQuery query)
        {
            query.Validar();

            if (!query.IsValid)
            {
                return new GenericQueryResult(false, "Informe corretamente os dados do curso!", query.Notifications);
            }

            // listar todos os cursos
            var alunoBuscado = _alunoRepositorio.BuscarPorId(query.id);

            if (alunoBuscado == null)
            {
                return new GenericQueryResult(false, "Não existe nenhum curso com este id!", query.Notifications);
            }

            return new GenericQueryResult(true, "Cursos encontrados!", alunoBuscado);
        }

    }
}
