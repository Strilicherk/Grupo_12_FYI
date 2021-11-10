using FYI.Domain.Entidades;
using FYI.Domain.Repositorios;
using FYI.Infra.Data.Contexts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Infra.Data.Repositories.Professor
{
    public class ProfessorRepositorio : IProfessorRepositorio
    {
        private readonly ForYouContext _ctx;

        public ProfessorRepositorio(ForYouContext ctx)
        {
            _ctx = ctx;
        }
        public void Adicionar(Professores Professor)
        {
            _ctx.Add(Professor);
            _ctx.SaveChanges();
        }

        public void Alterar(Professores Professor)
        {
            _ctx.Entry(Professor).State = EntityState.Modified;
            _ctx.SaveChanges();
        }

        public Professores BuscarPorId(Guid id)
        {
            return _ctx.Professores.FirstOrDefault(x => x.Id == id);
        }

        public void Excluir(Professores Professor)
        {
            _ctx.Professores.Remove(Professor);
            _ctx.SaveChanges();
        }

        public ICollection<Professores> Listar()
        {
            return _ctx.Professores
                     .AsNoTracking()
                       .ToList();
        }
    }
}
