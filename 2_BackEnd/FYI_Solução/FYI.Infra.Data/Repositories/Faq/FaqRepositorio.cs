using FYI.Domain.Entidades;
using FYI.Domain.Repositorios;
using FYI.Infra.Data.Contexts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Infra.Data.Repositories.Faq
{
    public class FaqRepositorio : IFaqRepositorio
    {
        private readonly ForYouContext _ctx;

        public FaqRepositorio(ForYouContext ctx)
        {
            _ctx = ctx;
        }
        public void Adicionar(Faqs faq)
        {
            _ctx.Add(faq);
            _ctx.SaveChanges();
        }

        public void Alterar(Faqs Faq)
        {
            _ctx.Entry(Faq).State = EntityState.Modified;
            _ctx.SaveChanges();
        }

        public Faqs BuscarPorId(Guid id)
        {
            return _ctx.Faq.FirstOrDefault(x => x.Id == id);
        }

        public void Excluir(Faqs faq)
        {
            _ctx.Faq.Remove(faq);
            _ctx.SaveChanges();
        }

        public ICollection<Faqs> Listar()
        {
            return _ctx.Faq
                .ToList();
        }
    }
}
