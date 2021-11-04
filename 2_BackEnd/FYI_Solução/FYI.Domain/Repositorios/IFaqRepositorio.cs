using FYI.Domain.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Domain.Repositorios
{
    interface IFaqRepositorio
    {
        void Adicionar(Faq faq);
        void Alterar(Faq Faq);
        Faq BuscarPorId(Guid id);
        void Excluir(Faq faq);

        ICollection<Faq> Listar();
    }
}
