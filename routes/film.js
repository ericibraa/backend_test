const express = require('express');
const router = express.Router();
const { Film } = require('../models');
const { body, validationResult } = require('express-validator');
const validator = require('validator');

router.post('/', [
    body('title')
        .notEmpty().withMessage('Title is required')
        .custom((value) => {
            if (!validator.isLength(value, { min: 1, max: 255 })) {
                throw new Error('Title must be between 1 and 255 characters');
            }
            return true;
        }),
    body('genre')
        .optional()
        .isString().withMessage('Genre must be a string')
        .custom((value) => {
            if (value && !validator.isLength(value, { max: 255 })) {
                throw new Error('Genre must be a maximum of 255 characters');
            }
            return true;
        }),
    body('release_date')
        .optional()
        .custom((value) => {
            if (value && !validator.isISO8601(value)) {
                throw new Error('Release date must be a valid ISO8601 date');
            }
            return true;
        }),
    body('duration')
        .optional()
        .isInt({ gt: 0 }).withMessage('Duration must be a positive integer'),
    body('studio_id')
        .notEmpty().withMessage('Studio ID is required')
        .isInt().withMessage('Studio ID must be an integer'),

], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { title, genre, release_date, duration } = req.body;
        console.log('Data yang akan dimasukkan:', { title, genre, release_date, duration });
        const film = await Film.create({
            title,
            genre,
            release_date,
            duration
        });
        console.log('Film berhasil dibuat:', film);
        return res.status(201).json(film);
    } catch (error) {
        return res.status(500).json({ message: 'Error creating film', error: error.message });
    }
});

router.put('/:id', [
    body('title')
        .optional()
        .notEmpty().withMessage('Title cannot be empty')
        .custom((value) => {
            if (!validator.isLength(value, { min: 1, max: 255 })) {
                throw new Error('Title must be between 1 and 255 characters');
            }
            return true;
        }),
    body('genre')
        .optional()
        .isString().withMessage('Genre must be a string')
        .custom((value) => {
            if (!validator.isLength(value, { max: 255 })) {
                throw new Error('Genre must be a maximum of 255 characters');
            }
            return true;
        }),
    body('release_date')
        .optional()
        .custom((value) => {
            if (!validator.isISO8601(value)) {
                throw new Error('Release date must be a valid ISO8601 date');
            }
            return true;
        }),
    body('studio_id')
        .optional()
        .isInt().withMessage('Studio ID must be an integer'),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { id } = req.params;
        const { title, genre, release_date, duration, studio_id } = req.body;

        const film = await Film.findByPk(id);
        if (!film) {
            return res.status(404).json({ message: 'Film not found' });
        }

        await film.update({
            title: title || film.title,
            genre: genre || film.genre,
            release_date: release_date || film.release_date,
            duration: duration || film.duration,
            studio_id: studio_id || film.studio_id
        });

        return res.status(200).json(film);
    } catch (error) {
        return res.status(500).json({ message: 'Error updating film', error: error.message });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const film = await Film.findByPk(id);
        if (!film) {
            return res.status(404).json({ message: 'Film not found' });
        }

        await film.destroy();

        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ message: 'Error deleting film', error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const film = await Film.findAll();
        return res.status(200).json(film);
    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router;
