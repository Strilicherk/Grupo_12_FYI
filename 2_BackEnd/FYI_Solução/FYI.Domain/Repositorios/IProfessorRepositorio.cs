using FYI.Domain.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Domain.Repositorios
{
    interface IProfessorRepositorio
    {
        void Adicionar(Professores Professor);
        void Alterar(Professores Professor);
        Professores BuscarPorId(Guid id);
        void Excluir(Professores Professor);

        ICollection<Professores> Listar();
    }
}
