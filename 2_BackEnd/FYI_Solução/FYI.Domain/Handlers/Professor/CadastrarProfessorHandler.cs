using Flunt.Notifications;
using FYI.Domain.Commands.Professor;
using FYI.Domain.Entidades;
using FYI.Domain.Repositorios;
using FYI.Shared.Commands;
using FYI.Shared.Enums;
using FYI.Shared.Handlers.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace FYI.Domain.Handlers.Professor
{
    public class CadastrarProfessorHandler : Notifiable<Notification>, IHandler<CadastrarProfessorCommand>
    {
        private readonly IProfessorRepositorio _professorRepositorio;
        private readonly IUsuarioRepositorio _usuarioRepositorio;
        public CadastrarProfessorHandler(IProfessorRepositorio professorRepositorio, IUsuarioRepositorio usuarioRepositorio)
        {
            _professorRepositorio = professorRepositorio;
           _usuarioRepositorio = usuarioRepositorio;
        }
        public ICommandResult Handler(CadastrarProfessorCommand command)
        {
            // command.IdUsuario = _usuarioRepositorio.Listar().FirstOrDefault(x => x == x).IdUsuario;
            //validar command
            command.Validar();

            if (!command.IsValid)
            {
                return new GenericCommandResult(false, "Informe corretamente os dados do professor!", command.Notifications);
            }
            Usuario usuario = _usuarioRepositorio.BuscarPorEmail(command.Email);
            if (usuario != null)
            {
                return new GenericCommandResult(false, "Email ja existente", null);
            };
            Usuario novoUsuario = new Usuario(command.Email, command.Senha, EnTipoUsuario.Professor);

            if(!novoUsuario.IsValid)
            {
                return new GenericCommandResult(false, "Informe corretamente os dados do professor!", command.Notifications);
            }

           


            Professores professor = new Professores(command.NomeProfessor, command.Sobrenome, novoUsuario.Id, command.Telefone);
            if(!professor.IsValid)
            {
                return new GenericCommandResult(false, "Informe corretamente os dados do professor!", command.Notifications);
            }

            _usuarioRepositorio.Adicionar(novoUsuario);
            _professorRepositorio.Adicionar(professor);

            return new GenericCommandResult(true, "Novo Professor Criado!", professor);
        }
    }
}
