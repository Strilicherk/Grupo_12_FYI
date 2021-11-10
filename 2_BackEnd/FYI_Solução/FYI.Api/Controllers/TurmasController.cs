using FYI.Domain.Commands.Turma;
using FYI.Domain.Handlers.Turma;
using FYI.Domain.Queries.Turmas;
using FYI.Shared.Commands;
using FYI.Shared.Queries;
using Microsoft.AspNetCore.Mvc;
using System;

namespace FYI.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TurmasController : ControllerBase
    {
        // commands:

        // adicionar
        [Route("register")]
        [HttpPost]
        public GenericCommandResult Register(CadastrarTurmaCommand command, [FromServices] CadastrarTurmaHandler handle)
        {
            return (GenericCommandResult)handle.Handler(command);
        }

        // alterar
        [Route("update")]
        [HttpPatch]
        public GenericCommandResult Update(AlterarTurmaCommand command, [FromServices] AlterarTurmaHandler handle)
        {
            return (GenericCommandResult)handle.Handler(command);
        }

        // deletar
        [Route("delete")]
        [HttpDelete]
        public GenericCommandResult Delete(ExcluirTurmaCommand command, [FromServices] ExcluirTurmaHandler handle)
        {
            return (GenericCommandResult)handle.Handler(command);
        }



        // queries:

        // listar
        [Route("list")]
        [HttpGet]
        public GenericQueryResult List([FromServices] ListarTurmaHandler handle)
        {
            ListarTurmaQuery query = new ListarTurmaQuery();

            return (GenericQueryResult)handle.Handler(query);
        }

        // buscar por nome
        //[Route("searchName/{courseName}")]
       // [HttpGet]
        //public GenericQueryResult SearchByName(string courseName, [FromServices] BuscarPorNomeTurmaHandler handle)
        //{

        //    var query = new BuscarPorNomeTurmaQuery
        //    {
        //        nomeCurso = courseName
        //    };

        //    return (GenericQueryResult)handle.Handler(query);
        //}

        // buscar por id
        [Route("searchId/{id}")]
        [HttpGet]
        public GenericQueryResult SearchById(Guid id, [FromServices] BuscarPorIdTurmaHandle handle)
        {
            var query = new BuscarPorIdTurmaQuery
            {
                id = id
            };

            // é pego o id do usuário logado
            // var tipoUsuario = HttpContext.User.Claims.FirstOrDefault(t => t.Type == ClaimTypes.Role);

            return (GenericQueryResult)handle.Handler(query);
        }
    }
}
