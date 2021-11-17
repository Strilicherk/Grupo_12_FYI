using FYI.Domain.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Domain.Repositorios
{
    public interface IUsuarioRepositorio
    {
        void Adicionar(Usuario usuario);
        void Alterar(Usuario usuario);
        void excluir(Guid id);
        Usuario BuscarPorEmail(string email);
        Usuario BuscarPorId(Guid id);

        ICollection<Usuario> Listar();
    }
}
