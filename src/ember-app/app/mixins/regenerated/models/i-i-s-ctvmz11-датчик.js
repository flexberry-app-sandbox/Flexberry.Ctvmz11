import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  id: DS.attr('number'),
  погрешность: DS.attr('decimal'),
  производ: DS.attr('string'),
  контроллер: DS.belongsTo('i-i-s-ctvmz11-контроллер', { inverse: 'датчик', async: false })
});

export let ValidationRules = {
  id: {
    descriptionKey: 'models.i-i-s-ctvmz11-датчик.validations.id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  погрешность: {
    descriptionKey: 'models.i-i-s-ctvmz11-датчик.validations.погрешность.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  производ: {
    descriptionKey: 'models.i-i-s-ctvmz11-датчик.validations.производ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  контроллер: {
    descriptionKey: 'models.i-i-s-ctvmz11-датчик.validations.контроллер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДатчикE', 'i-i-s-ctvmz11-датчик', {
    погрешность: attr('Погрешность', { index: 0 }),
    производ: attr('Производ', { index: 1 }),
    id: attr('Id', { index: 2 })
  });
};
