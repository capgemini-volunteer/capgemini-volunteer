const router = require('express').Router()
const {Organization} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const organizations = await Organization.findAll({
      id: req.id
    })
    res.json(organizations)
  } catch (err) {
    next(err)
  }
})