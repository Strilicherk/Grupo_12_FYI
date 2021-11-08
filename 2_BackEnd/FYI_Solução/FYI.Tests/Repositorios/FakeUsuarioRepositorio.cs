using FYI.Domain.Entidades;
using FYI.Domain.Repositorios;
using System;
using System.Collections.Generic;

namespace FYI.Tests.Repositorios
{
    public class FakeUsuarioRepositorio : IUsuarioRepositorio
    {
        public void Adicionar(Usuario usuario)
        {
            
        }

        public void Alterar(Usuario usuario)
        {
            
        }

        public void AlterarSenha(Usuario usuario)
        {
            
        }

        public Usuario BuscarPorEmail(string email)
        {
            return null;
        }

        public Usuario BuscarPorId(Guid id)
        {
            return new Usuario("teste@teste.com", "teste123", FYI.Shared.Enums.EnTipoUsuario.Admin);
        }

        public ICollection<Usuario> Listar()
        {
            return new List<Usuario>()
            {
                new Usuario("teste@teste.com", "teste123", FYI.Shared.Enums.EnTipoUsuario.Admin),
                new Usuario("strilicherk@hotmail.com", "strilicherk", FYI.Shared.Enums.EnTipoUsuario.Admin)
            };
        }
    }
}
