﻿// <auto-generated />
using System;
using FYI.Infra.Data.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace FYI.Infra.Data.Migrations
{
    [DbContext(typeof(ForYouContext))]
    [Migration("20211111181353_Criando Tabelas")]
    partial class CriandoTabelas
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.11")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("FYI.Domain.Entidades.Alunos", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("CPF")
                        .IsRequired()
                        .HasMaxLength(11)
                        .HasColumnType("VARCHAR(11)");

                    b.Property<DateTime>("DataNascimento")
                        .HasColumnType("DATE");

                    b.Property<Guid>("IdTurma")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("IdUsuario")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasMaxLength(60)
                        .HasColumnType("varchar(60)");

                    b.Property<string>("Sobrenome")
                        .IsRequired()
                        .HasMaxLength(60)
                        .HasColumnType("varchar(60)");

                    b.Property<string>("Telefone")
                        .IsRequired()
                        .HasColumnType("VARCHAR(15)");

                    b.Property<Guid?>("TurmaId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid?>("UsuarioId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("TurmaId");

                    b.HasIndex("UsuarioId");

                    b.ToTable("Alunos");
                });

            modelBuilder.Entity("FYI.Domain.Entidades.Cursos", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("NomeCurso")
                        .IsRequired()
                        .HasMaxLength(60)
                        .HasColumnType("varchar(60)");

                    b.HasKey("Id");

                    b.ToTable("Cursos");
                });

            modelBuilder.Entity("FYI.Domain.Entidades.Faqs", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Pergunta")
                        .IsRequired()
                        .HasMaxLength(60)
                        .HasColumnType("varchar(60)");

                    b.Property<string>("Resposta")
                        .IsRequired()
                        .HasMaxLength(60)
                        .HasColumnType("varchar(60)");

                    b.HasKey("Id");

                    b.ToTable("Faq");
                });

            modelBuilder.Entity("FYI.Domain.Entidades.Professores", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("IdUsuario")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("NomeProfessor")
                        .IsRequired()
                        .HasMaxLength(60)
                        .HasColumnType("varchar(60)");

                    b.Property<string>("Sobrenome")
                        .IsRequired()
                        .HasMaxLength(60)
                        .HasColumnType("varchar(60)");

                    b.Property<int>("Telefone")
                        .HasColumnType("INT");

                    b.Property<Guid?>("UsuarioId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("UsuarioId");

                    b.ToTable("Professores");
                });

            modelBuilder.Entity("FYI.Domain.Entidades.Turmas", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid?>("CursoId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("DataFim")
                        .HasColumnType("DATE");

                    b.Property<DateTime>("DataInicio")
                        .HasColumnType("DATE");

                    b.Property<string>("Descricao")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("varchar(200)");

                    b.Property<Guid>("IdCurso")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("IdProfessor")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("NomeTurma")
                        .IsRequired()
                        .HasMaxLength(60)
                        .HasColumnType("varchar(60)");

                    b.Property<string>("PreRequisito")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("varchar(200)");

                    b.Property<Guid?>("ProfessorId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("PublicoAlvo")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("varchar(200)");

                    b.Property<int>("QtdMax")
                        .HasMaxLength(3)
                        .HasColumnType("INT");

                    b.Property<int>("QuantidadeAluno")
                        .HasMaxLength(3)
                        .HasColumnType("INT");

                    b.HasKey("Id");

                    b.HasIndex("CursoId");

                    b.HasIndex("ProfessorId");

                    b.ToTable("Turmas");
                });

            modelBuilder.Entity("FYI.Domain.Entidades.Usuario", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("varchar(200)");

                    b.Property<string>("Senha")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("TipoUsuario")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.ToTable("Usuarios");
                });

            modelBuilder.Entity("FYI.Domain.Entidades.Alunos", b =>
                {
                    b.HasOne("FYI.Domain.Entidades.Turmas", "Turma")
                        .WithMany("Alunos")
                        .HasForeignKey("TurmaId");

                    b.HasOne("FYI.Domain.Entidades.Usuario", "Usuario")
                        .WithMany("Alunos")
                        .HasForeignKey("UsuarioId");

                    b.Navigation("Turma");

                    b.Navigation("Usuario");
                });

            modelBuilder.Entity("FYI.Domain.Entidades.Professores", b =>
                {
                    b.HasOne("FYI.Domain.Entidades.Usuario", "Usuario")
                        .WithMany("Professor")
                        .HasForeignKey("UsuarioId");

                    b.Navigation("Usuario");
                });

            modelBuilder.Entity("FYI.Domain.Entidades.Turmas", b =>
                {
                    b.HasOne("FYI.Domain.Entidades.Cursos", "Curso")
                        .WithMany("Turmas")
                        .HasForeignKey("CursoId");

                    b.HasOne("FYI.Domain.Entidades.Professores", "Professor")
                        .WithMany("Turmas")
                        .HasForeignKey("ProfessorId");

                    b.Navigation("Curso");

                    b.Navigation("Professor");
                });

            modelBuilder.Entity("FYI.Domain.Entidades.Cursos", b =>
                {
                    b.Navigation("Turmas");
                });

            modelBuilder.Entity("FYI.Domain.Entidades.Professores", b =>
                {
                    b.Navigation("Turmas");
                });

            modelBuilder.Entity("FYI.Domain.Entidades.Turmas", b =>
                {
                    b.Navigation("Alunos");
                });

            modelBuilder.Entity("FYI.Domain.Entidades.Usuario", b =>
                {
                    b.Navigation("Alunos");

                    b.Navigation("Professor");
                });
#pragma warning restore 612, 618
        }
    }
}
