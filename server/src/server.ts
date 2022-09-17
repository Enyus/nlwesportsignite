// const express = require('express');

import express, { response } from 'express';
import { PrismaClient } from '@prisma/client'

const app = express();
const prisma = new PrismaClient({
    log: ['query']
});

// HTTP Methods / API RESTful / HTTP Codes
// GET, POST, PUT, DELETE, PATCH
/* Tipos de Parâmentros:
    Query: /ads?page=2&sort=title
        -> URL
        -> Persistir estado (filtros, orgenação, paginação, nãosensíveis)
        -> nomeados
        -> request.query
    Route: /ads/5
        -> identificação de um recurso
        -> :id -> Informação dinâmica
        -> request.params
    Body:
        -> formulários
        -> enviar várias informações ao mesmo tempo
        -> request.body
*/

// Listagem de games com contagem de anúncios:
app.get('/games', async (request, response) => {
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true,
                }
            }
        }
    });

    return response.json(games);
})

// Criar anúnico de um game:
app.post('/ads', (request, response) => {
    return response.status(201).json([]);
})

// www.minhaapi.com/ads

// Listagem de Anúnicos por Game 
app.get ('/games/:id/ads', (request, response)=> {
    // const gameId = request.params.id;

    return response.json([
        {id:1, name:'Anúncio 1'},
        {id:2, name:'Anúncio 2'},
        {id:3, name:'Anúncio 3'},
        {id:4, name:'Anúncio 4'}
    ])
});

// Buscar discord pelo id do anúncio:
app.get ('/ads/:id/discord', (request, response)=> {
    // const adId = request.params.id;

    return response.json([])
});

app.listen(3333);