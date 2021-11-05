using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using System;
using FYI.Shared.Commands;
using FYI.Domain.Commands.Turma;

namespace FYI.Api.Controllers
{
    [Route("v1/class")]
    [Produces("application/json")]
    [ApiController]
    public class TurmaController : ControllerBase
    {
        // commands:

        // adicionar
        [Microsoft.AspNetCore.Mvc.Route("register")]
        [HttpPost]
        public GenericCommandResult Register(CadastrarTurmaCommand command, [FromServices] CriarTurmaHandle handle)
        {
            return (GenericCommandResult)handle.Handler(command);
        }

        // alterar
        [Microsoft.AspNetCore.Mvc.Route("update")]
        [HttpPatch]
        public GenericCommandResult Update(AlterarTurmaCommand command, [FromServices] AlterarCursoHandle handle)
        {
            return (GenericCommandResult)handle.Handler(command);
        }

        // deletar
        [Microsoft.AspNetCore.Mvc.Route("delete")]
        [HttpDelete]
        public GenericCommandResult Delete(ExcluirTurmaCommand command, [FromServices] DeletarCursoHandle handle)
        {
            return (GenericCommandResult)handle.Handler(command);
        }



        // queries:

        // listar
        [Microsoft.AspNetCore.Mvc.Route("list")]
        [HttpGet]
        public GenericQueryResult List([FromServices] ListarCursoHandle handle)
        {
            ListarCursoQuery query = new ListarCursoQuery();

            return (GenericQueryResult)handle.Handler(query);
        }

        // buscar por nome
        [Microsoft.AspNetCore.Mvc.Route("searchName/{courseName}")]
        [HttpGet]
        public GenericQueryResult SearchByName(string courseName, [FromServices] BuscarPorNomeCursoHandle handle)
        {

            var query = new BuscarPorNomeCursoQuery
            {
                nomeCurso = courseName
            };

            return (GenericQueryResult)handle.Handler(query);
        }

        // buscar por id
        [Microsoft.AspNetCore.Mvc.Route("searchId/{id}")]
        [HttpGet]
        public GenericQueryResult SearchById(Guid id, [FromServices] BuscarPorIdCursoHandle handle)
        {
            var query = new BuscarPorIdCursoQuery
            {
                id = id
            };

            // é pego o id do usuário logado
            // var tipoUsuario = HttpContext.User.Claims.FirstOrDefault(t => t.Type == ClaimTypes.Role);

            return (GenericQueryResult)handle.Handler(query);
        }

    }
}
