using Flunt.Notifications;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Shared.Entidades
{
        public abstract class Base : Notifiable<Notification>
        {
            public Base()
            {
                Id = Guid.NewGuid();
            }

            public Guid Id { get; set; }
        }
}
