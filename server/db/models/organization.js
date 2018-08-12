const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Organization = db.define('organization', {
  street: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  zipcode: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Organization