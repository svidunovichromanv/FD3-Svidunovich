"use strict";

import {ClientStorage} from '../classes/clientStorage';

let clientsArr=[
    {id:101, fio:"Иванов И.И.", balance:-200},
    {id:105, fio:"Сидоров С.С.", balance:250},
    {id:110, fio:"Петров П.П.", balance:-180},
    {id:120, fio:"Григорьев Г.Г.", balance:220},
];

const clients = new ClientStorage(clientsArr);

test('проверка хронилища clientsArr', () => {

    clients.addClient();

    expect(clients._clients).toEqual(clients.clientsView);
    expect(clients._clients.length).toBe(5);

    clients.removeClient(101);

    expect(clients._clients).toEqual(clients.clientsView);
    expect(clients._clients.length).toBe(4);

    clients.editClient(120, {id:120, fio:"Г", balance:1});

    expect(clients._clients).toEqual(clients.clientsView);
    expect(clients._clients.length).toBe(4);
    expect(clients._clients[2].fio).toBe("Г");
    expect(clients._clients[2].balance).toBe(1);

    clients.filterClient("+");

    expect(clients._clients).not.toEqual(clients.clientsView);
    expect(clients.clientsView.length).toBe(2);
    expect(clients._clients.length).toBe(4);

    clients.addClient();

    expect(clients._clients).not.toEqual(clients.clientsView);
    expect(clients.clientsView.length).toBe(2);
    expect(clients._clients.length).toBe(5);

    clients.removeClient(110);

    expect(clients._clients).not.toEqual(clients.clientsView);
    expect(clients.clientsView.length).toBe(2);
    expect(clients._clients.length).toBe(4);
});