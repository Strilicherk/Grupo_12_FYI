using FYI.Domain.Repositorios;
using FYI.Infra.Data.Contexts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Infra.Data.Repositories.Usuario
{
    public class UsuarioRepository : IUsuarioRepositorio
    {
        private readonly ForYouContext _context;

        public UsuarioRepository(ForYouContext context)
        {
            _context = context;
        }
        public void Adicionar(Domain.Entidades.Usuarios usuario)
        {
            _context.Usuarios.Add(usuario);
            _context.SaveChanges();
        }

        public void Alterar(Domain.Entidades.Usuarios usuario)
        {
            _context.Entry(usuario).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public Domain.Entidades.Usuarios BuscarPorEmail(string email)
        {
            return _context.Usuarios.FirstOrDefault(x => x.Email.ToLower() == email.ToLower());
        }

        public Domain.Entidades.Usuarios BuscarPorId(Guid id)
        {
            return _context.Usuarios.FirstOrDefault(x => x.Id == id);
        }

        public ICollection<Domain.Entidades.Usuarios> Listar()
        {
            return _context.Usuarios
                .AsNoTracking()
                .ToList();
        }
    }
}
