using Flunt.Notifications;
using Flunt.Validations;
using FYI.Shared.Entidades;
using FYI.Shared.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Domain.Entidades
{
    public class Usuarios : Base
    {
        public Usuarios(string email, string senha, EnTipoUsuario tipoUsuario)
        {
            AddNotifications(
            new Contract<Notification>()
                .Requires()
                .IsEmail(email, "Email", "Email não pode ser vazio")
                .IsGreaterOrEqualsThan(senha, 8, "Senha", "A senha deve ter pelo menos 8 caracteres")
            );

            if (IsValid)
            {
                Email = email;
                Senha = senha;
                TipoUsuario = tipoUsuario;
            }
        }

        public string Email { get; private set; }
        public string Senha { get; private set; }
        public EnTipoUsuario TipoUsuario { get; private set; }
    }
}
