const express = require('express');
const router = express.Router();
const Home = require("../models/home");
const Properties = require('../models/properties');

// Endpoint to track visits to the home page
router.get('/track-home-visit', async (req, res) => {
  try {
    let home = await Home.findOne();
    if (!home) {
      home = new Home();
    }
    home.visits++;
    await home.save();
    res.status(200).send(`Home visit tracked. Total visits: ${home.visits}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Endpoint to track visits to the properties page
router.get('/track-properties-visit', async (req, res) => {
  try {
    let properties = await Properties.findOne();
    if (!properties) {
      properties = new Properties();
    }
    properties.visits++;
    await properties.save();
    res.status(200).send(`Properties visit tracked. Total visits: ${properties.visits}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});


module.exports = router;
