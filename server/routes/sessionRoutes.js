const express = require('express');
const Session = require('../models/Session');
const router = express.Router();

router.post('/', async (req, res) => {
  const { tutor, student, skill, dateTime } = req.body;
  try {
    const newSession = new Session({ tutor, student, skill, dateTime });
    await newSession.save();
    res.status(201).json(newSession);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const sessions = await Session.find().populate('tutor').populate('student');
  res.json(sessions);
});

module.exports = router;