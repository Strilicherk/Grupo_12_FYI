using Flunt.Notifications;
using FYI.Domain.Entidades;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Infra.Data.Contexts
{
    public class ForYouContext : DbContext
    {
        public ForYouContext(DbContextOptions<ForYouContext> options) : base(options)
        {

        }

        // Criando as tabelas
        public DbSet<Usuario> Usuarios { get; set; }
        
        // Modelando as tabelas
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Ignorar que o Flunt gere o banco de dados
            modelBuilder.Ignore<Notification>();

            #region mapeamento tabela de Usuarios
            // Determinar chaves
            modelBuilder.Entity<Usuario>().Property(x => x.Id);

            // Email
            modelBuilder.Entity<Usuario>().Property(x => x.Email).HasMaxLength(60);
            modelBuilder.Entity<Usuario>().Property(x => x.Email).HasColumnType("varchar(60)");
            modelBuilder.Entity<Usuario>().Property(x => x.Email).IsRequired();
            modelBuilder.Entity<Usuario>().HasIndex(x => x.Email).IsUnique();


            // Senha
            modelBuilder.Entity<Usuario>().Property(x => x.Email).HasMaxLength(200);
            modelBuilder.Entity<Usuario>().Property(x => x.Email).HasColumnType("varchar(200)");
            modelBuilder.Entity<Usuario>().Property(x => x.Email).IsRequired();

            // Tipo Usuário
            modelBuilder.Entity<Usuario>().Property(x => x.TipoUsuario).IsRequired();

            #endregion
            base.OnModelCreating(modelBuilder);
        }
    }
}
