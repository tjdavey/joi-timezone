const BaseJoi = require('joi')
const JoiTimezone = require('../lib')

const Joi = BaseJoi.extend(JoiTimezone)

describe('string', () => {
  describe('timezone()', () => {
    test('return error for invalid timezone', () => {
      const testValue = Joi.timezone().validate('Blah')
      expect(testValue.error).toBeTruthy()
      expect(testValue.error.name).toBe('ValidationError')
    })

    it('return error if timzone is not a string', () => {
      const testValue = Joi.timezone().validate(2)
      expect(testValue.error).toBeTruthy()
      expect(testValue.error.details[0].message).toBe('"value" must be a string')
    })

    it('validates strings with a valid timezone', () => {
      const testZone = 'Australia/Melbourne'
      const testValue = Joi.timezone().validate(testZone)
      expect(testValue.error).toBeFalsy()
      expect(testValue.value).toEqual(testZone)
    })
  })
})
