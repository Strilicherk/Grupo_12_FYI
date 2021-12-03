using FYI.Domain.Handlers.Aluno;
using FYI.Domain.Handlers.Autenticacao;
using FYI.Domain.Handlers.Curso;
using FYI.Domain.Handlers.Faq;
using FYI.Domain.Handlers.Professor;
using FYI.Domain.Handlers.Turma;
using FYI.Domain.Handlers.Usuarios;
using FYI.Domain.Repositorios;
using FYI.Infra.Data.Contexts;
using FYI.Infra.Data.Repositories.Aluno;
using FYI.Infra.Data.Repositories.Curso;
using FYI.Infra.Data.Repositories.Faq;
using FYI.Infra.Data.Repositories.Professor;
using FYI.Infra.Data.Repositories.Turma;
using FYI.Infra.Data.Repositories.Usuario;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();

            services.AddDbContext<ForYouContext>(z => z.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "FYI.Api", Version = "v1" });
            });

            // JWT
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        ValidIssuer = "FYI",
                        ValidAudience = "FYI",
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("ChaveSecretaMuitoSecreta"))
                    };
                });

                // CORS
                services.AddCors(options =>
                {
                    options.AddPolicy("CorsPolicy",
                        builder => builder.AllowAnyOrigin()
                                            .AllowAnyMethod()
                                            .AllowAnyHeader());

                });

            // Injeções de dependencia
            #region Usuarios
            services.AddTransient<IUsuarioRepositorio, UsuarioRepositorio>();
            services.AddTransient<CriarContaHandle, CriarContaHandle>();
            services.AddTransient<LogarHandle, LogarHandle>();
            #endregion            
            #region Alunos
            services.AddTransient<IAlunoRepositorio, AlunoRepositorio>();
            services.AddTransient<AlterarAlunoHandler, AlterarAlunoHandler>();
            services.AddTransient<BuscarPorIdAlunoHandle, BuscarPorIdAlunoHandle>();
            services.AddTransient<CadastrarAlunoHandler, CadastrarAlunoHandler>();
            services.AddTransient<ExcluirAlunoHandler, ExcluirAlunoHandler>();
            services.AddTransient<ListarAlunoHandler, ListarAlunoHandler>();
            #endregion
            #region Cursos
            services.AddTransient<ICursoRepositorio, CursoRepositorio>();
            services.AddTransient<AlterarCursoHandler, AlterarCursoHandler>();
            services.AddTransient<BuscarPorIdCursoHandle, BuscarPorIdCursoHandle>();
            services.AddTransient<CadastrarCursoHandler, CadastrarCursoHandler>();
            services.AddTransient<ExcluirCursoHandler, ExcluirCursoHandler>();
            services.AddTransient<ListarCursoHandler, ListarCursoHandler>();
            #endregion
            #region Faq
            services.AddTransient<IFaqRepositorio, FaqRepositorio>();
            services.AddTransient<AlterarFaqHandler, AlterarFaqHandler>();
            services.AddTransient<BuscarPorIdFaqHandle, BuscarPorIdFaqHandle>();
            services.AddTransient<CadastrarFaqHandler, CadastrarFaqHandler>();
            services.AddTransient<ExcluirFaqHandler, ExcluirFaqHandler>();
            services.AddTransient<ListarFaqHandler, ListarFaqHandler>();
            #endregion
            #region Professor
            services.AddTransient<IProfessorRepositorio, ProfessorRepositorio>();
            services.AddTransient<AlterarProfessorHandler, AlterarProfessorHandler>();
            services.AddTransient<BuscarPorIdProfessorHandle, BuscarPorIdProfessorHandle>();
            services.AddTransient<CadastrarProfessorHandler, CadastrarProfessorHandler>();
            services.AddTransient<ExcluirProfessorHandler, ExcluirProfessorHandler>();
            services.AddTransient<ListarProfessorHandler, ListarProfessorHandler>();
            #endregion
            #region Turma
            services.AddTransient<ITurmaRepositorio, TurmaRepositorio>();
            services.AddTransient<AlterarTurmaHandler, AlterarTurmaHandler>();
            services.AddTransient<BuscarPorIdTurmaHandle, BuscarPorIdTurmaHandle>();
            services.AddTransient<CadastrarTurmaHandler, CadastrarTurmaHandler>();
            services.AddTransient<ExcluirTurmaHandler, ExcluirTurmaHandler>();
            services.AddTransient<ListarTurmaHandler, ListarTurmaHandler>();
            #endregion
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                
            }


            app.UseSwaggerUI(c => {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
               c.RoutePrefix = string.Empty;
            });
            app.UseSwagger();
            // app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseCors("CorsPolicy");

            app.UseStaticFiles();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
