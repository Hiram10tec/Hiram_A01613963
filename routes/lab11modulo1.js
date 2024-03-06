const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/ruta1', (req, res) => {
  res.sendFile(path.join(__dirname, '../lab1-2-3.html'));
});

router.get('/ruta2', (req, res) => {
  res.sendFile(path.join(__dirname, '../lab4.html'));
});

module.exports = router;