using FYI.Domain.Entidades;
using FYI.Domain.Repositorios;
using System;
using System.Collections.Generic;

namespace FYI.Tests.Repositorios
{
    public class FakeUsuarioRepositorio : IUsuarioRepositorio
    {
        public void Adicionar(Usuarios usuario)
        {
            
        }

        public void Alterar(Usuarios usuario)
        {
            
        }

        public void AlterarSenha(Usuarios usuario)
        {
            
        }

        public Usuarios BuscarPorEmail(string email)
        {
            return null;
        }

        public Usuarios BuscarPorId(Guid id)
        {
            return new Usuarios("teste@teste.com", "teste123", FYI.Shared.Enums.EnTipoUsuario.Admin);
        }

        public ICollection<Usuarios> Listar()
        {
            return new List<Usuarios>()
            {
                new Usuarios("teste@teste.com", "teste123", FYI.Shared.Enums.EnTipoUsuario.Admin),
                new Usuarios("strilicherk@hotmail.com", "strilicherk", FYI.Shared.Enums.EnTipoUsuario.Admin)
            };
        }
    }
}
