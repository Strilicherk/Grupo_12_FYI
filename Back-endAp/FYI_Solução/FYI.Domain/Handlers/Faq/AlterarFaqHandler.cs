using Flunt.Notifications;
using FYI.Domain.Commands.Faq;
using FYI.Domain.Entidades;
using FYI.Domain.Repositorios;
using FYI.Shared.Commands;
using FYI.Shared.Handlers.Contracts;


namespace FYI.Domain.Handlers.Faq
{
    public class AlterarFaqHandler : Notifiable<Notification>, IHandler<AlterarFaqCommand>
    {
        private readonly IFaqRepositorio _faqRepositorio;
        public AlterarFaqHandler(IFaqRepositorio faqRepositorio)
        {
            _faqRepositorio = faqRepositorio;
        }
        public ICommandResult Handler(AlterarFaqCommand command)
        {
            //validar command
            command.Validar();

            //procurar curso
            if (!command.IsValid)
            {
                return new GenericCommandResult(false, "Informe o Faq corretamente", command.Notifications);
            };
            //curso existe?
            Faqs faq = _faqRepositorio.BuscarPorId(command.Id);
            if (faq == null)
            {
                return new GenericCommandResult(false, "Faq não encontrado", null);
            };

            faq.AlterarFaq(command.Pergunta, command.Resposta);

            _faqRepositorio.Alterar(faq);

            return new GenericCommandResult(true, "Peegunta e Resposta do Faq alterado com sucesso!", faq);
        }
    }
}
