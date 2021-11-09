﻿using Flunt.Notifications;
using Flunt.Validations;
using FYI.Shared.Queries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FYI.Domain.Queries.Turma
{
    class BuscarPorIdTurmaQuery : Notifiable<Notification>, IQuery
    {
        public Guid id { get; set; }



    public void Validar()
    {
        AddNotifications(
            new Contract<Notification>()
                .Requires()
                .IsNotEmpty(id, "id", "O id do curso buscado não pode ser vazio!")
            );
    }

}
}
