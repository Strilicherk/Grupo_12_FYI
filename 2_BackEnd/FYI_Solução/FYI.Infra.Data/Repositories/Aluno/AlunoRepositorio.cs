using FYI.Domain.Entidades;
using FYI.Domain.Repositorios;
using FYI.Infra.Data.Contexts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Infra.Data.Repositories.Aluno
{
    public class AlunoRepositorio : IAlunoRepositorio
    {
        private readonly ForYouContext _ctx;

        public AlunoRepositorio(ForYouContext ctx)
        {
            _ctx = ctx;
        }

        public void Adicionar(Alunos Aluno)
        {
            _ctx.Add(Aluno);
            _ctx.SaveChanges();
        }

        public void Alterar(Alunos Aluno)
        {
            _ctx.Entry(Aluno).State = EntityState.Modified;
            _ctx.SaveChanges();
        }

        public Alunos BuscarPorId(Guid id)
        {
            return _ctx.Alunos.FirstOrDefault(x => x.Id == id);
        }

        public void Excluir(Alunos Aluno)
        {
            _ctx.Alunos.Remove(Aluno);
            _ctx.SaveChanges();
        }

        public ICollection<Alunos> Listar()
        {
            return _ctx.Alunos
                .AsNoTracking()
                .ToList();
        }
    }
}
