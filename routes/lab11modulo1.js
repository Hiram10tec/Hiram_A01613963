const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');


router.get('/ruta1', (req, res) => {
  res.sendFile(path.join(__dirname, '../lab1-2-3.html'));
});

router.get('/ruta2', (req, res) => {
  res.sendFile(path.join(__dirname, '../lab4.html'));
});

router.get('/ruta3', (req, res) => {
  res.redirect('https://youtu.be/xvFZjo5PgG0?si=7O2oqwoGm6D9gAXM');
});

router.get('/ruta6', (req, res) => {
  res.render('crear', {});
});


module.exports = router;