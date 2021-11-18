using FYI.Domain.Entidades;
using FYI.Domain.Repositorios;
using FYI.Infra.Data.Contexts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Infra.Data.Repositories.Curso
{
    public class CursoRepositorio : ICursoRepositorio
    {
        private readonly ForYouContext _ctx;

        public CursoRepositorio(ForYouContext ctx)
        {
            _ctx = ctx;
        }

        public void Adicionar(Cursos Curso)
        {
            _ctx.Add(Curso);
            _ctx.SaveChanges();
        }

        public void Alterar(Cursos Curso)
        {
            _ctx.Entry(Curso).State = EntityState.Modified;
            _ctx.SaveChanges();
        }

        public Cursos BuscarPorId(Guid id)
        {
            return _ctx.Cursos.FirstOrDefault(x => x.Id == id);
        }

        public void Excluir(Cursos Curso)
        {
            _ctx.Cursos.Remove(Curso);
            _ctx.SaveChanges();
        }

        public ICollection<Cursos> Listar()
        {
            return _ctx.Cursos
                .AsNoTracking()
                .ToList();
        }
    }
}
