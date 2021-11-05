using FYI.Domain.Commands.Autenticacao;
using FYI.Domain.Commands.Usuario;
using FYI.Domain.Entidades;
using FYI.Domain.Handlers.Autenticacao;
using FYI.Domain.Handlers.Usuarios;
using FYI.Shared.Commands;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace FYI.Api.Controllers
{
    [Route("v1/account")]
    [Produces("application/json")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {

        [Route("signup")]
        [HttpPost]
        public GenericCommandResult SignUp(CriarContaCommand command, [FromServices] CriarContaHandle handle)
        {
            return (GenericCommandResult)handle.Handler(command);
        }

        [Route("signin")]
        [HttpPost]
        public GenericCommandResult SignIn(LogarCommand command, [FromServices] LogarHandle handle)
        {
            var resultado = (GenericCommandResult)handle.Handler(command);
            if (resultado.Sucesso)
            {
                var token = GenerateJSONWebToken((Usuarios)resultado.Data);
                return new GenericCommandResult(resultado.Sucesso, resultado.Mensagem, new { Token = token });
            }

            return new GenericCommandResult(false, resultado.Mensagem, resultado.Data);
        }



        // Criamos nosso método que vai gerar nosso Token
        private string GenerateJSONWebToken(Usuarios userInfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("ChaveSecretaMuitoSecreta"));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            // Definimos nossas Claims (dados da sessão) para poderem ser capturadas
            // a qualquer momento enquanto o Token for ativo
            var claims = new[] {
                new Claim(JwtRegisteredClaimNames.Email, userInfo.Email),
                new Claim(ClaimTypes.Role, userInfo.TipoUsuario.ToString()),
                new Claim("role", userInfo.TipoUsuario.ToString()),
                new Claim(JwtRegisteredClaimNames.Jti, userInfo.Id.ToString())
            };

            // Configuramos nosso Token e seu tempo de vida
            var token = new JwtSecurityToken
                (
                    "FYI",
                    "FYI",
                    claims,
                    expires: DateTime.Now.AddMinutes(120),
                    signingCredentials: credentials
                );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
