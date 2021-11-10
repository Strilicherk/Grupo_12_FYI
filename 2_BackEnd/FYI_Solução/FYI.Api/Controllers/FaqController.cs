using FYI.Domain.Commands.Faq;
using FYI.Domain.Handlers.Faq;
using FYI.Domain.Queries.Faq;
using FYI.Shared.Commands;
using FYI.Shared.Queries;
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
    public class FaqController : ControllerBase
    {
        // commands:

        // adicionar
        [Route("register")]
        [HttpPost]
        public GenericCommandResult Register(CadastrarFaqCommand command, [FromServices] CadastrarFaqHandler handle)
        {
            return (GenericCommandResult)handle.Handler(command);
        }

        // alterar
        [Route("update")]
        [HttpPatch]
        public GenericCommandResult Update(AlterarFaqCommand command, [FromServices] AlterarFaqHandler handle)
        {
            return (GenericCommandResult)handle.Handler(command);
        }

        // deletar
        [Route("delete")]
        [HttpDelete]
        public GenericCommandResult Delete(ExcluirFaqCommand command, [FromServices] ExcluirFaqHandler handle)
        {
            return (GenericCommandResult)handle.Handler(command);
        }



        // queries:

        // listar
        [Route("list")]
        [HttpGet]
        public GenericQueryResult List([FromServices] ListarFaqHandler handle)
        {
            ListarFaqQuery query = new ListarFaqQuery();

            return (GenericQueryResult)handle.Handler(query);
        }

        // buscar por nome
       // [Route("searchName/{courseName}")]
       // [HttpGet]
        //public GenericQueryResult SearchByName(string courseName, [FromServices] BuscarPorNomeFaqHandler handle)
        //{

        //    var query = new BuscarPorNomeFaqQuery
        //    {
        //        nomeCurso = courseName
        //    };

        //    return (GenericQueryResult)handle.Handler(query);
        //}

        // buscar por id
        [Route("searchId/{id}")]
        [HttpGet]
        public GenericQueryResult SearchById(Guid id, [FromServices] BuscarPorIdFaqHandle handle)
        {
            var query = new BuscarPorIdFaqQuery
            {
                id = id
            };

            // é pego o id do usuário logado
            // var tipoUsuario = HttpContext.User.Claims.FirstOrDefault(t => t.Type == ClaimTypes.Role);

            return (GenericQueryResult)handle.Handler(query);
        }
    }
}
