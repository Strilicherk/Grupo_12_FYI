using Flunt.Notifications;
using Flunt.Validations;
using FYI.Shared.Commands;
using FYI.Shared.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Domain.Commands.Usuario
{
    public class CriarContaCommand : Notifiable<Notification>, ICommand
    {
        public CriarContaCommand()
        {

        }

        public CriarContaCommand(string email, string senha, EnTipoUsuario tipoUsuario)
        {
            Senha = senha;
            Email = email;
            TipoUsuario = tipoUsuario;
        }

        public string Email { get; set; }
        public string Senha { get; set; }
        public EnTipoUsuario TipoUsuario { get; set; }

        public void Validar()
        {
            AddNotifications(
            new Contract<Notification>()
                .Requires()
                .IsEmail(Email, "Email", "formato incorreto de email")
                .IsGreaterThan(Senha, 7, "Senha", "A senha deve ter 8 caracteres ou mais")
            );
        }
    }
}
