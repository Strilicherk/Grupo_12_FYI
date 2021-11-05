using FYI.Domain.Commands.Professor;
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
    public class ProfessorController : ControllerBase
    {
        // commands:

        // adicionar
        [Route("register")]
        [HttpPost]
        public GenericCommandResult Register(CadastrarProfessorCommand command, [FromServices] CriarProfessorHandle handle)
        {
            return (GenericCommandResult)handle.Handler(command);
        }

        // alterar
        [Route("update")]
        [HttpPatch]
        public GenericCommandResult Update(AlterarProfessorCommand command, [FromServices] AlterarProfessorHandle handle)
        {
            return (GenericCommandResult)handle.Handler(command);
        }

        // deletar
        [Route("delete")]
        [HttpDelete]
        public GenericCommandResult Delete(ExcluirProfessorCommand command, [FromServices] DeletarProfessorHandle handle)
        {
            return (GenericCommandResult)handle.Handler(command);
        }



        // queries:

        // listar
        [Route("list")]
        [HttpGet]
        public GenericQueryResult List([FromServices] ListarProfessorHandle handle)
        {
            ListarFaqQuery query = new ListarProfessorQuery();

            return (GenericQueryResult)handle.Handler(query);
        }

        // buscar por nome
        [Route("searchName/{courseName}")]
        [HttpGet]
        public GenericQueryResult SearchByName(string courseName, [FromServices] BuscarPorNomeProfessorHandle handle)
        {

            var query = new BuscarPorNomeProfessorQuery
            {
                nomeCurso = courseName
            };

            return (GenericQueryResult)handle.Handler(query);
        }

        // buscar por id
        [Route("searchId/{id}")]
        [HttpGet]
        public GenericQueryResult SearchById(Guid id, [FromServices] BuscarPorIdProfessorHandle handle)
        {
            var query = new BuscarPorIdProfessorQuery
            {
                id = id
            };

            // é pego o id do usuário logado
            // var tipoUsuario = HttpContext.User.Claims.FirstOrDefault(t => t.Type == ClaimTypes.Role);

            return (GenericQueryResult)handle.Handler(query);
        }
    }
}
