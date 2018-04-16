const express = require('express');
const db = require('../db');

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

    router.post('/rooms', (req, res) => {
        const body = req.body;

        const dbEntity = {
            description: body.description,
            title: body.title,
        };

        if (body.id) {
            Room.findById(body.id)
                .then(roomModel => {
                    if (!roomModel) throw new Error("No room");
                    return roomModel.updateAttributes(dbEntity);
                })
                .then(result => {
                    res.json({ message: 'Success', room: result, type: 'update', error: false })
                })
                .catch(err => res.status(500).json({ message: err.message }));
        } else {
            Room.create(dbEntity)
                .then(result => {
                    res.json({ message: 'Success', room: result, type: 'new', error: false })
                })
                .catch(err => res.status(500).json({ message: err.message }));
        }
    });

    router.delete('/rooms/:id', (req, res) => {
        const id = req.params.id;
        Room.destroy(id)
            .then(result => {
                if (!result) return res.status(500).json({ error: "No room" });
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