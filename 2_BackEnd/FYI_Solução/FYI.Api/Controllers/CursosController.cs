using FYI.Domain.Commands.Aluno;
using FYI.Domain.Commands.Curso;
using FYI.Shared.Commands;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FYI.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CursosController : ControllerBase
    {
        // commands:

        // adicionar
        [Route("register")]
        [HttpPost]
        public GenericCommandResult Register(CadastrarCursoCommand command, [FromServices] CriarCursoHandle handle)
        {
            return (GenericCommandResult)handle.Handler(command);
        }

        // alterar
        [Route("update")]
        [HttpPatch]
        public GenericCommandResult Update(AlterarCursoCommand command, [FromServices] AlterarCursoHandle handle)
        {
            return (GenericCommandResult)handle.Handler(command);
        }

        // deletar
        [Route("delete")]
        [HttpDelete]
        public GenericCommandResult Delete(ExcluirCursoCommand command, [FromServices] DeletarCursoHandle handle)
        {
            return (GenericCommandResult)handle.Handler(command);
        }



        // queries:

        // listar
        [Route("list")]
        [HttpGet]
        public GenericQueryResult List([FromServices] ListarCursoHandle handle)
        {
            ListarCursoQuery query = new ListarCursoQuery();

            return (GenericQueryResult)handle.Handler(query);
        }

        // buscar por nome
        [Route("searchName/{courseName}")]
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
        [Route("searchId/{id}")]
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
