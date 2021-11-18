using FYI.Domain.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Domain.Repositorios
{
    public interface ICursoRepositorio
    {
        void Adicionar(Cursos Curso);
        void Alterar(Cursos Curso);
        Cursos BuscarPorId(Guid id);
        void Excluir(Cursos Curso);

        ICollection<Cursos> Listar();
    }
}
