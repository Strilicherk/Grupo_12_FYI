using FYI.Domain.Handlers.Autenticacao;
using FYI.Domain.Handlers.Usuarios;
using FYI.Domain.Repositorios;
using FYI.Infra.Data.Contexts;
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
            services.AddTransient<IUsuarioRepositorio, UsuarioRepository>();
            services.AddTransient<CriarContaHandle, CriarContaHandle>();
            services.AddTransient<LogarHandle, LogarHandle>();
            #endregion
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "FYI.Api v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseCors("CorsPolicy");

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
