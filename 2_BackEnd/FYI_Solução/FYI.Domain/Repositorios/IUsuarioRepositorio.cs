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
        void Adicionar(Usuarios usuario);
        void Alterar(Usuarios usuario);
        Usuarios BuscarPorEmail(string email);
        Usuarios BuscarPorId(Guid id);

        ICollection<Usuarios> Listar();
    }
}
