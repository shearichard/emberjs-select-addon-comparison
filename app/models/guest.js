import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  name: [
    validator('presence', true),
  ],
  nationality: [
    validator('presence', true),
  ],
});

export default DS.Model.extend( Validations, {
  name: DS.attr('string'),
  nationality: DS.attr('string')
});
