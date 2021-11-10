using Flunt.Notifications;
using FYI.Domain.Commands.Faq;
using FYI.Domain.Entidades;
using FYI.Domain.Repositorios;
using FYI.Shared.Commands;
using FYI.Shared.Handlers.Contracts;


namespace FYI.Domain.Handlers.Faq
{
    public class CadastrarFaqHandler : Notifiable<Notification>, IHandler<CadastrarFaqCommand>
    {
        private readonly IFaqRepositorio _faqRepositorio;
        public CadastrarFaqHandler(IFaqRepositorio faqRepositorio)
        {
            _faqRepositorio = faqRepositorio;
        }
        public ICommandResult Handler(CadastrarFaqCommand command)
        {
            //validar command
            command.Validar();

            //procurar curso
            if (!command.IsValid)
            {
                return new GenericCommandResult(false, "Informe o Faq corretamente", command.Notifications);
            };
            //curso existe?
            Faqs faq = new Faqs(command.Pergunta, command.Resposta);
           

            _faqRepositorio.Adicionar(faq);

            return new GenericCommandResult(true, "Pergunta e Resposta do Faq alterado com sucesso!", faq);
        }
    }
}
