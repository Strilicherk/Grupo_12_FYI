using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Infra.Data.Repositories.Usuario
{
    public class UsuarioRepository : IUsuarioRepository
    {
        // injeção de dependência
        private readonly CarometroContext _ctx;

        public UsuarioRepository(CarometroContext ctx)
        {
            _ctx = ctx;
        }



        // commands:

        public void Adicionar(Usuario usuario)
        {
            _ctx.Usuarios.Add(usuario);
            _ctx.SaveChanges();
        }

        public void Alterar(Usuario usuario)
        {
            _ctx.Entry(usuario).State = EntityState.Modified;
            _ctx.SaveChanges();
        }

        public void Deletar(Guid id)
        {
            _ctx.Usuarios.Remove(BuscarPorId(id));
            _ctx.SaveChanges();
        }



        // queries:

        public IEnumerable<Usuario> Listar()
        {
            return _ctx.Usuarios
                .AsNoTracking()
                .ToList();
        }

        public Usuario BuscarPorId(Guid id)
        {
            return _ctx.Usuarios.FirstOrDefault(x => x.Id == id);
        }

        public Usuario BuscarPorEmail(string email)
        {
            return _ctx.Usuarios.FirstOrDefault(x => x.Email == email);
        }

    }
}
