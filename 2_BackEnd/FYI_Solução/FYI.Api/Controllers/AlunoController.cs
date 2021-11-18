using FYI.Domain.Commands.Aluno;
using FYI.Domain.Handlers.Aluno;
using FYI.Domain.Handlers.Curso;
using FYI.Domain.Queries.Alunos;
using FYI.Shared.Commands;
using FYI.Shared.Queries;
using Microsoft.AspNetCore.Mvc;
using System;

namespace FYI.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlunoController : ControllerBase
    {
        // commands:

        // adicionar
        [Route("register")]
        [HttpPost]
        public GenericCommandResult Register(CadastrarAlunoCommand command, [FromServices] CadastrarAlunoHandler handle)
        {
            return (GenericCommandResult)handle.Handler(command);
        }

        // alterar
        [Route("update")]
        [HttpPatch]
        public GenericCommandResult Update(AlterarAlunoCommand command, [FromServices] AlterarAlunoHandler handle)
        {
            return (GenericCommandResult)handle.Handler(command);
        }

        // deletar
        [Route("delete")]
        [HttpDelete]
        public GenericCommandResult Delete(ExcluirAlunoCommand command, [FromServices] ExcluirAlunoHandler handle)
        {
            return (GenericCommandResult)handle.Handler(command);
        }



        // queries:

        // listar
        [Route("list")]
        [HttpGet]
        public GenericQueryResult List([FromServices] ListarAlunoHandler handle)
        {
            ListarAlunoQuery query = new ListarAlunoQuery();

            return (GenericQueryResult)handle.Handler(query);
        }

        // buscar por nome
        //[Route("searchName/{courseName}")]
        //[HttpGet]
        //public GenericQueryResult SearchByName(string courseName, [FromServices] BuscarPorNomeAlunoHandler handle)
        //{

        //    var query = new BuscarPorNomeAlunoQuery
        //    {
        //        nomeCurso = courseName
        //    };

        //    return (GenericQueryResult)handle.Handler(query);
        //}

        // buscar por id
        [Route("searchId/{id}")]
        [HttpGet]
        public GenericQueryResult SearchById(Guid id, [FromServices] BuscarPorIdAlunoHandle handle)
        {
            var query = new BuscarPorIdAlunoQuery
            {
                id = id
            };

            // é pego o id do usuário logado
            // var tipoUsuario = HttpContext.User.Claims.FirstOrDefault(t => t.Type == ClaimTypes.Role);

            return (GenericQueryResult)handle.Handler(query);
        }
    }
}
