using Flunt.Notifications;
using FYI.Domain.Commands.Curso;
using FYI.Domain.Entidades;
using FYI.Domain.Repositorios;
using FYI.Shared.Commands;
using FYI.Shared.Handlers.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Domain.Handlers.Curso
{
    class CadastrarCursoHandler : Notifiable<Notification>, IHandler<CadastrarCursoCommand>
    {
        private readonly ICursoRepositorio _cursoRepositorio;

        public CadastrarCursoHandler(ICursoRepositorio cursoRepositorio)
        {
            _cursoRepositorio = cursoRepositorio;
        }

        public ICommandResult Handler(CadastrarCursoCommand command)
        {
            command.Validar();

            if (!command.IsValid)
            {
                return new GenericCommandResult(false, "Informe corretamente o nome do curso!", command.Notifications);
            }

            // salvar no BD (repository/adicionarCurso)
            Cursos novoCurso = new Cursos(command.NomeCurso);

            if (!novoCurso.IsValid)
            {
                return new GenericCommandResult(false, "Dados do curso inválidos!", novoCurso.Notifications);
            }

            // adicionando...
            _cursoRepositorio.Adicionar(novoCurso);

            return new GenericCommandResult(true, "Curso criado com sucesso!", "");

        }
    }

}