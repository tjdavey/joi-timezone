const BaseJoi = require('joi');
const {assert} = require('chai');
const JoiTimezone = require('../lib');

const Joi = BaseJoi.extend(JoiTimezone);

describe('string', () => {
  describe('timezone()', () => {
    it('return error for invalid timezone', () => {
      const testValue = Joi.timezone().validate('Blah');
      assert.isOk(testValue.error, 'should produce an error');
      assert.isOk(testValue.error.name, 'should produce a ValidationError');
    });

    it('return error if timzone is not a string', () => {
      const testValue = Joi.timezone().validate(2);
      assert.isOk(testValue.error, 'should produce an error');
      assert.equal(testValue.error.details[0].message, '"value" must be a string', 'should produce a string error');
    });

    it('validates strings with a valid timezone', () => {
      const testZone = 'Australia/Melbourne';
      const testValue = Joi.timezone().validate(testZone);
      assert.isNotOk(testValue.error, 'should not produce an error');
      assert.equal(testValue.value, testZone);
    });

    it('validates and returns a moment object when returnMoment is set', () => {
      const testZone = 'Australia/Brisbane';
      const testValue = Joi.timezone().returnMoment().validate(testZone);
      assert.isNotOk(testValue.error, 'should not produce an error');
      assert.isOk(testValue.value._isAMomentObject, 'should produce a moment object');
    });

    it('validates and returns a moment object when returnMoment is set but convert is disabled', () => {
      const testZone = 'Australia/Brisbane';
      const testValue = Joi.timezone().returnMoment().validate(testZone, {convert: false});
      assert.isNotOk(testValue.error, 'should not produce an error');
      assert.equal(testValue.value, testZone);
    });
  });
});
