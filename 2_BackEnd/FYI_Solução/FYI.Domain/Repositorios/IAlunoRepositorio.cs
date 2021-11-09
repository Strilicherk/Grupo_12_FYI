using FYI.Domain.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Domain.Repositorios
{
   public interface IAlunoRepositorio
    {
        void Adicionar(Alunos Aluno);
        void Alterar(Alunos Aluno);
        Alunos BuscarPorId(Guid id);
        void Excluir(Alunos Aluno);

        ICollection<Alunos> Listar();
    }
}
