using Flunt.Notifications;
using FYI.Domain.Commands.Faq;
using FYI.Domain.Entidades;
using FYI.Domain.Repositorios;
using FYI.Shared.Commands;
using FYI.Shared.Handlers.Contracts;


namespace FYI.Domain.Handlers.Curso
{
    class ExcluirFaqHandler : Notifiable<Notification>, IHandler<ExcluirFaqCommand>
    {
        private readonly IFaqRepositorio _faqRepositorio;
        public ExcluirFaqHandler(IFaqRepositorio faqRepositorio)
        {
            _faqRepositorio = faqRepositorio;
        }
        public ICommandResult Handler(ExcluirFaqCommand command)
        {
            //validar command
            command.Validar();

            //procurar curso
            if (!command.IsValid)
            {
                return new GenericCommandResult(false, "Informe o faq corretamente", command.Notifications);
            };
            //curso existe?
            Faqs faq = _faqRepositorio.BuscarPorId(command.Id);
            if (faq == null)
            {
                return new GenericCommandResult(false, "Faq não encontrado", null);
            };
            _faqRepositorio.Excluir(faq);

            return new GenericCommandResult(true, "Nome do Faq alterado com sucesso!", faq);
        }
    }
}
