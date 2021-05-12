const Joi = require('joi');
const moment = require('moment-timezone');

module.exports = {
  type: 'timezone',
  base: Joi.string(),
  messages: {
    timezone: '"{{#label}}" must be at least a valid timezone'
  },
  rules: {
    returnMoment: {
      convert: true,
      method() {
        return this.$_setFlag('returnMoment', true);
      }
    }
  },
  validate(value, helpers) {
    if (!moment.tz.zone(value)) {
      return { value, errors: helpers.error('timezone')};
    }

    // The value must be a string for validation, so we can't use coerce to convert as this runs before validation
    if (helpers.schema.$_getFlag('returnMoment') && helpers.prefs.convert) {
      return {value: moment.tz(value)};
    }

    return {value};
  }
};
