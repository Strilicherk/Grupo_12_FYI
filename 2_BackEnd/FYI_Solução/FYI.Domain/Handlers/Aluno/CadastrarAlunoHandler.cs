using Flunt.Notifications;
using FYI.Domain.Commands.Aluno;
using FYI.Domain.Entidades;
using FYI.Domain.Repositorios;
using FYI.Shared.Commands;
using FYI.Shared.Enums;
using FYI.Shared.Handlers.Contracts;


namespace FYI.Domain.Handlers.Curso
{
    class CadastrarAlunoHandler : Notifiable<Notification>, IHandler<CadastrarAlunoCommand>
    {
        private readonly IAlunoRepositorio _alunoRepositorio;
        private readonly IUsuarioRepositorio _usuarioRepositorio;
        private readonly ITurmaRepositorio _turmaRepositorio;
        public CadastrarAlunoHandler(IAlunoRepositorio alunoRepositorio, IUsuarioRepositorio usuarioRepositorio, ITurmaRepositorio turmaRepositorio)
        {
            _alunoRepositorio = alunoRepositorio;
            _usuarioRepositorio = usuarioRepositorio;
            _turmaRepositorio = turmaRepositorio;
        }
        public ICommandResult Handler(CadastrarAlunoCommand command)
        {
            //validar command
            command.Validar();

            //procurar curso
            if (!command.IsValid)
            {
                return new GenericCommandResult(false, "Informe o Aluno corretamente", command.Notifications);
            };
            Usuario usuario = _usuarioRepositorio.BuscarPorEmail(command.Email);
            if (usuario != null)
            {
                return new GenericCommandResult(false, "Email ja existente", null);
            };
            Usuario novoUsuario = new Usuario(command.Email, command.Senha, EnTipoUsuario.Aluno);

            _usuarioRepositorio.Adicionar(novoUsuario);

            if (!novoUsuario.IsValid)
            {
                return new GenericCommandResult(false, "Informe corretamente os dados do professor!", command.Notifications);
            }
            Turmas turma = _turmaRepositorio.BuscarPorId(command.IdTurma);
            if (turma == null)
            {
                return new GenericCommandResult(false, "Curso não encontrado", command.Notifications);
            }

             Alunos aluno = new Alunos(command.Nome, command.Sobrenome, command.CPF, command.DataNascimento, command.Telefone, novoUsuario.Id, turma.Id);
            if (!aluno.IsValid)
            {
                return new GenericCommandResult(false, "Informe corretamente os dados do aluno!", command.Notifications);
            }

            return new GenericCommandResult(true, "Aluno Criado com sucesso!", aluno);
        }
    }
}
