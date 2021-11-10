using FYI.Domain.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Domain.Repositorios
{
    public interface IFaqRepositorio
    {
        void Adicionar(Faqs faq);
        void Alterar(Faqs Faq);
        Faqs BuscarPorId(Guid id);
        void Excluir(Faqs faq);

        ICollection<Faqs> Listar();
    }
}
