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
    class AlterarCursoHandler : Notifiable<Notification>, IHandler<AlterarCursoCommand>
    {
        private readonly ICursoRepositorio _cursoRepositorio;
        public AlterarCursoHandler(ICursoRepositorio cursoRepositorio)
        {
            _cursoRepositorio = cursoRepositorio;
        }
        public ICommandResult Handler(AlterarCursoCommand command)
        {
            //validar command
            command.Validar();

            //procurar curso
            if (!command.IsValid)
            {
                return new GenericCommandResult(false, "Informe o curso corretamente", command.Notifications);
            };
            //curso existe?
            Cursos curso = _cursoRepositorio.BuscarPorId(command.Id);
            if (curso == null)
            {
                return new GenericCommandResult(false, "Curso não encontrado", null);
            };
            curso.AlterarCurso(command.NomeCurso);
            _cursoRepositorio.Alterar(curso);

            return new GenericCommandResult(true, "Nome do curso alterado com sucesso!", curso);
        }
    }
}
