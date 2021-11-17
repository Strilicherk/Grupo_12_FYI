using FYI.Domain.Entidades;
using FYI.Domain.Repositorios;
using FYI.Infra.Data.Contexts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Infra.Data.Repositories.Turma
{
    public class TurmaRepositorio : ITurmaRepositorio
    {
        private readonly ForYouContext _ctx;

        public TurmaRepositorio(ForYouContext ctx)
        {
            _ctx = ctx;
        }
        public void Adicionar(Turmas Turma)
        {
            _ctx.Add(Turma);
            _ctx.SaveChanges();
        }

        public void Alterar(Turmas Turma)
        {
            _ctx.Entry(Turma).State = EntityState.Modified;
            _ctx.SaveChanges();
        }

        public Turmas BuscarPorId(Guid id)
        {
            return _ctx.Turmas.FirstOrDefault(x => x.Id == id);
        }
        
        public void Excluir(Turmas Turma)
        {
            _ctx.Turmas.Remove(Turma);
            _ctx.SaveChanges();
        }

        public ICollection<Turmas> Listar()
        {
            return _ctx.Turmas
                .AsNoTracking()
                .Include(x=>x.Curso.NomeCurso)
                .Include(x=>x.Professor)
                .ToList();
        }
    }
}
