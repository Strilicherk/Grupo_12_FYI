using FYI.Domain.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Domain.Repositorios
{
    interface ITurmaRepositorio
    {
        void Adicionar(Turmas Turma);
        void Alterar(Turmas Turma);
        Turmas BuscarPorId(Guid id);
        void Excluir(Turmas Turma);

        ICollection<Turmas> Listar();
    }
}
