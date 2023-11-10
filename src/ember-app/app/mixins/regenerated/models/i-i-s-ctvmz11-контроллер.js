import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  id: DS.attr('number'),
  состояние: DS.attr('boolean'),
  темпаУстан: DS.belongsTo('i-i-s-ctvmz11-темпа-устан', { inverse: null, async: false }),
  датчик: DS.hasMany('i-i-s-ctvmz11-датчик', { inverse: 'контроллер', async: false })
});

export let ValidationRules = {
  id: {
    descriptionKey: 'models.i-i-s-ctvmz11-контроллер.validations.id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  состояние: {
    descriptionKey: 'models.i-i-s-ctvmz11-контроллер.validations.состояние.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  темпаУстан: {
    descriptionKey: 'models.i-i-s-ctvmz11-контроллер.validations.темпаУстан.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  датчик: {
    descriptionKey: 'models.i-i-s-ctvmz11-контроллер.validations.датчик.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КонтроллерE', 'i-i-s-ctvmz11-контроллер', {
    id: attr('Id', { index: 0 }),
    состояние: attr('Состояние', { index: 1 }),
    датчик: hasMany('i-i-s-ctvmz11-датчик', 'Датчик', {
      погрешность: attr('Погрешность', { index: 0 }),
      производ: attr('Производ', { index: 1 }),
      id: attr('Id', { index: 2 })
    })
  });

  modelClass.defineProjection('КонтроллерL', 'i-i-s-ctvmz11-контроллер', {
    id: attr('Id', { index: 0 }),
    состояние: attr('Состояние', { index: 1 })
  });
};
