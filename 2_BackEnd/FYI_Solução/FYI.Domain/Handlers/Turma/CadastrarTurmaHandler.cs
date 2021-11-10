using Flunt.Notifications;

using FYI.Domain.Commands.Turma;
using FYI.Domain.Entidades;
using FYI.Domain.Repositorios;
using FYI.Shared.Commands;
using FYI.Shared.Handlers.Contracts;


namespace FYI.Domain.Handlers.Turma
{
    public class CadastrarTurmaHandler : Notifiable<Notification>, IHandler<CadastrarTurmaCommand>
    {
        private readonly ITurmaRepositorio _turmaRepositorio;
        private readonly IProfessorRepositorio _professorRepositorio;
        private readonly ICursoRepositorio _cursoRepositorio;
        public CadastrarTurmaHandler(ITurmaRepositorio turmaRepositorio, IProfessorRepositorio professorRepositorio, ICursoRepositorio cursoRepositorio)
        {
            _turmaRepositorio = turmaRepositorio;
            _professorRepositorio = professorRepositorio;
            _cursoRepositorio = cursoRepositorio;
        }
        public ICommandResult Handler(CadastrarTurmaCommand command)
        {
            //validar command
            command.Validar();

            //procurar curso
            if (!command.IsValid)
            {
                return new GenericCommandResult(false, "Informe a Turma corretamente", command.Notifications);
            };
            Cursos curso = _cursoRepositorio.BuscarPorId(command.IdCurso);
            if (curso ==null)
            {
                return new GenericCommandResult(false, "Curso não encontrado", command.Notifications);
            }
            Professores professor = _professorRepositorio.BuscarPorId(command.IdProfessor);
            if (professor == null)
            {
                return new GenericCommandResult(false, "Professor não encontrado", command.Notifications);
            }
            Turmas turma = new Turmas(command.NomeTurma,command.PublicoAlvo,command.Descricao,command.PreRequisito,command.QuantidadeAluno,command.QtdMax,curso.Id,professor.Id,command.DataInicio,command.DataFim);
            if (!turma.IsValid)
            {
                return new GenericCommandResult(false, "Informe corretamente os da turma!", command.Notifications);
            }
             _turmaRepositorio.Adicionar(turma);

            return new GenericCommandResult(true, "Turma criada com sucesso!", null);
        }
    }
}
