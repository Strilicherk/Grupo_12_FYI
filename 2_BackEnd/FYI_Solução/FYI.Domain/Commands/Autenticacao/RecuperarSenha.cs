using Flunt.Notifications;
using Flunt.Validations;
using FYI.Shared.Commands;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Domain.Commands.Autenticacao
{
    class RecuperarSenha
    {
        public class ResetarSenhaCommand : Notifiable<Notification>, ICommand
        {
            public ResetarSenhaCommand(string email)
            {
                Email = email;
            }

            public string Email { get; set; }

            public void Validar()
            {
                AddNotifications(
                new Contract<Notification>()
                    .Requires()
                    .IsEmail(Email, "Email", "formato incorreto de email")
                );
            }
        }
    }
}
