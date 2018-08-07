const express = require('express');
const db = require('../db');
const enums = require('../../common/enums');
const wss = require('../services/websocket');

module.exports = (router) => {
    const dbInstance = db.instance();
    const Room = dbInstance.models.Room;

    router.get('/rooms', (req, res) => {
        const body = req.body;
        const page = body.page || 1;
        const size = body.size || 20;
        const order = body.order || 'created';

        Room.findAll({ limit: size, skip: (page - 1) * size })
            .then(result => res.json({ rooms: result }))
            .catch(err => res.status(500).json({ message: err.message }));
    });

    router.get('/rooms/:id', (req, res) => {
        const id = req.params.id;
        Room.findOne({ where: { id }})
            .then(result => res.json({ room: result }))
            .catch(err => res.status(500).json({ message: err.message }));
    });

    router.post('/rooms', async (req, res) => {
        const body = req.body;

        const dbEntity = {
            description: body.description,
            title: body.title,
            members: body.members,
        };

        if (body.id) {
            const roomModel = await Room.findById(body.id);
            if (!roomModel) { 
                return new Error("No room");
            }
            const result = await roomModel.updateAttributes(dbEntity);
            res.json({ message: 'Success', room: result, type: enums.crud.update, error: false });
        } else {
            const result = await Room.create(dbEntity);
            wss.broadcast({ room: result, type: enums.crud.create });
            res.json({ message: 'Success', error: false });
        }
    });

    router.delete('/rooms/:id', (req, res) => {
        const id = req.params.id;
        Room.destroy({ where: { id } })
            .then(result => {
                if (!result) return res.status(500).json({ error: "No room" });
                wss.broadcast({ id, type: enums.crud.remove });
                res.json({ error: false });
            })
            .catch(err => res.status(500).json({ message: err.message }));
    });

    router.post('/rooms/:id/join', (req, res) => {
       
    });

    router.post('/rooms/:id/leave', (req, res) => {
       
    });

    router.post('/rooms/:id/start', (req, res) => {
        
    });

    return router;
};