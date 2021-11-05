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
        public DbSet<Usuarios> Usuarios { get; set; }
        public DbSet<Alunos> Alunos { get; set; }
        public DbSet<Professores> Professores { get; set; }
        public DbSet<Turmas> Turmas { get; set; }
        public DbSet<Faqs> Faq { get; set; }
        public DbSet<Cursos> Cursos { get; set; }

        // Modelando as tabelas
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Ignorar que o Flunt gere o banco de dados
            modelBuilder.Ignore<Notification>();

            #region mapeamento tabela de Usuarios
            // Determinar chaves
            modelBuilder.Entity<Usuarios>().Property(x => x.Id);

            // Email
            modelBuilder.Entity<Usuarios>().Property(x => x.Email).HasMaxLength(60);
            modelBuilder.Entity<Usuarios>().Property(x => x.Email).HasColumnType("varchar(60)");
            modelBuilder.Entity<Usuarios>().Property(x => x.Email).IsRequired();
            modelBuilder.Entity<Usuarios>().HasIndex(x => x.Email).IsUnique();

            // Senha
            modelBuilder.Entity<Usuarios>().Property(x => x.Email).HasMaxLength(200);
            modelBuilder.Entity<Usuarios>().Property(x => x.Email).HasColumnType("varchar(200)");
            modelBuilder.Entity<Usuarios>().Property(x => x.Email).IsRequired();

            // Tipo Usuário
            modelBuilder.Entity<Usuarios>().Property(x => x.TipoUsuario).IsRequired();

            #endregion

            #region mapeamento tabela de Cursos
            // ID PK
            modelBuilder.Entity<Cursos>().Property(x => x.Id);

            // Pergunta
            modelBuilder.Entity<Cursos>().Property(x => x.NomeCurso).HasMaxLength(60);
            modelBuilder.Entity<Cursos>().Property(x => x.NomeCurso).HasColumnType("varchar(60)");
            modelBuilder.Entity<Cursos>().Property(x => x.NomeCurso).IsRequired();

            #endregion

            #region mapeamento tabela de Faq
                        // ID PK
                        modelBuilder.Entity<Faqs>().Property(x => x.Id);

                        // Pergunta
                        modelBuilder.Entity<Faqs>().Property(x => x.Pergunta).HasMaxLength(60);
                        modelBuilder.Entity<Faqs>().Property(x => x.Pergunta).HasColumnType("varchar(60)");
                        modelBuilder.Entity<Faqs>().Property(x => x.Pergunta).IsRequired();

                        // Resposta
                        modelBuilder.Entity<Faqs>().Property(x => x.Resposta).HasMaxLength(60);
                        modelBuilder.Entity<Faqs>().Property(x => x.Resposta).HasColumnType("varchar(60)");
                        modelBuilder.Entity<Faqs>().Property(x => x.Resposta).IsRequired();

                        #endregion

            #region mapeamento tabela de Professores
                        // ID PK
                        modelBuilder.Entity<Professores>().Property(x => x.Id);

                        //// Id FK Usuario
                        //modelBuilder.Entity<Professores>()
                        //            .HasOne<Usuarios>(x => x.Usuario)
                        //            .WithMany(x => x.Professor)
                        //            .HasForeignKey(x => x.IdUsuario);

                        // Nome
                        modelBuilder.Entity<Professores>().Property(x => x.NomeProfessor).HasMaxLength(60);
                        modelBuilder.Entity<Professores>().Property(x => x.NomeProfessor).HasColumnType("varchar(60)");
                        modelBuilder.Entity<Professores>().Property(x => x.NomeProfessor).IsRequired();


                        // Sobrenome
                        modelBuilder.Entity<Professores>().Property(x => x.Sobrenome).HasMaxLength(60);
                        modelBuilder.Entity<Professores>().Property(x => x.Sobrenome).HasColumnType("varchar(60)");
                        modelBuilder.Entity<Professores>().Property(x => x.Sobrenome).IsRequired();

                        // Telefone
                        modelBuilder.Entity<Professores>().Property(x => x.Telefone).HasColumnType("INT");
                        modelBuilder.Entity<Professores>().Property(x => x.Telefone).IsRequired();

                        #endregion

            #region mapeamento tabela de Turmas
                        // ID PK
                        modelBuilder.Entity<Turmas>().Property(x => x.Id);

                        // Id FK Professor
                        //modelBuilder.Entity<Turmas>()
                        //            .HasOne<Professores>(x => x.Professor)
                        //            .WithMany(x => x.Turmas)
                        //            .HasForeignKey(x => x.IdProfessor);

                        //// Id FK Curso
                        //modelBuilder.Entity<Turmas>()
                        //            .HasOne<Cursos>(x => x.Curso)
                        //            .WithMany(x => x.Turmas)
                        //            .HasForeignKey(x => x.IdCurso);

                        // Nome
                        modelBuilder.Entity<Turmas>().Property(x => x.NomeTurma).HasMaxLength(60);
                        modelBuilder.Entity<Turmas>().Property(x => x.NomeTurma).HasColumnType("varchar(60)");
                        modelBuilder.Entity<Turmas>().Property(x => x.NomeTurma).IsRequired();

                        // DataInicio
                        modelBuilder.Entity<Turmas>().Property(x => x.DataInicio).HasColumnType("DATE");
                        modelBuilder.Entity<Turmas>().Property(x => x.DataInicio).IsRequired();

                        // DataFim
                        modelBuilder.Entity<Turmas>().Property(x => x.DataFim).HasColumnType("DATE");
                        modelBuilder.Entity<Turmas>().Property(x => x.DataFim).IsRequired();

                        // Publico Alvo
                        modelBuilder.Entity<Turmas>().Property(x => x.PublicoAlvo).HasMaxLength(200);
                        modelBuilder.Entity<Turmas>().Property(x => x.PublicoAlvo).HasColumnType("varchar(200)");
                        modelBuilder.Entity<Turmas>().Property(x => x.PublicoAlvo).IsRequired();

                        // Descrição
                        modelBuilder.Entity<Turmas>().Property(x => x.Descricao).HasMaxLength(200);
                        modelBuilder.Entity<Turmas>().Property(x => x.Descricao).HasColumnType("varchar(200)");
                        modelBuilder.Entity<Turmas>().Property(x => x.Descricao).IsRequired();

                        // PréPreRequisito
                        modelBuilder.Entity<Turmas>().Property(x => x.PreRequisito).HasMaxLength(200);
                       modelBuilder.Entity<Turmas>().Property(x => x.PreRequisito).HasColumnType("varchar(200)");
                       modelBuilder.Entity<Turmas>().Property(x => x.PreRequisito).IsRequired();

                        // QtdAlunos
                        modelBuilder.Entity<Turmas>().Property(x => x.QuantidadeAluno).HasMaxLength(3);
                        modelBuilder.Entity<Turmas>().Property(x => x.QuantidadeAluno).HasColumnType("INT");
                        modelBuilder.Entity<Turmas>().Property(x => x.QuantidadeAluno);

                        // QtdMax
                        modelBuilder.Entity<Turmas>().Property(x => x.QtdMax).HasMaxLength(3);
                        modelBuilder.Entity<Turmas>().Property(x => x.QtdMax).HasColumnType("INT");
                        modelBuilder.Entity<Turmas>().Property(x => x.QtdMax).IsRequired();

                        #endregion

            #region mapeamento tabela de Alunos
            // ID PK
            modelBuilder.Entity<Alunos>().Property(x => x.Id);

            // Id FK Turma
            //modelBuilder.Entity<Alunos>()
            //            .HasOne<Turmas>(x => x.Turma)
            //            .WithMany(x => x.Alunos)
            //            .HasForeignKey(x => x.IdTurma);

            // Id FK Usuario
            //modelBuilder.Entity<Alunos>()
            //            .HasOne<Usuarios>(x => x.Usuario)
            //            .WithMany(x => x.Alunos)
            //            .HasForeignKey(x => x.IdUsuario);

            // Nome
            modelBuilder.Entity<Alunos>().Property(x => x.Nome).HasMaxLength(60);
            modelBuilder.Entity<Alunos>().Property(x => x.Nome).HasColumnType("varchar(60)");
            modelBuilder.Entity<Alunos>().Property(x => x.Nome).IsRequired();


            // Sobrenome
            modelBuilder.Entity<Alunos>().Property(x => x.Sobrenome).HasMaxLength(60);
            modelBuilder.Entity<Alunos>().Property(x => x.Sobrenome).HasColumnType("varchar(60)");
            modelBuilder.Entity<Alunos>().Property(x => x.Sobrenome).IsRequired();

            // CPF
            modelBuilder.Entity<Alunos>().Property(x => x.CPF).HasMaxLength(11);
            modelBuilder.Entity<Alunos>().Property(x => x.CPF).HasColumnType("VARCHAR(11)");
            modelBuilder.Entity<Alunos>().Property(x => x.CPF).IsRequired();

            // DataNascimento
            modelBuilder.Entity<Alunos>().Property(x => x.DataNascimento).HasColumnType("DATE");
            modelBuilder.Entity<Alunos>().Property(x => x.DataNascimento).IsRequired();

            // Telefone
            modelBuilder.Entity<Alunos>().Property(x => x.Telefone).HasColumnType("VARCHAR(15)");
            modelBuilder.Entity<Alunos>().Property(x => x.Telefone).IsRequired();

            #endregion

            

            

            


            base.OnModelCreating(modelBuilder);
        }
    }
}
