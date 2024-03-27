const Joi = require('joi')
const { IANAZone } = require('luxon')

module.exports = {
  type: 'timezone',
  base: Joi.string(),
  messages: {
    timezone: '"{{#label}}" must be at least a valid timezone'
  },
  rules: {
  },
  validate (value, helpers) {
    if (!IANAZone.isValidZone(value)) {
      return { value, errors: helpers.error('timezone') }
    }

    return { value }
  }
}
