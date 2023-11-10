import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISCtvmz11КонтроллерLForm from './forms/i-i-s-ctvmz11-контроллер-l';
import IISCtvmz11ТемпаУстанLForm from './forms/i-i-s-ctvmz11-темпа-устан-l';
import IISCtvmz11КонтроллерEForm from './forms/i-i-s-ctvmz11-контроллер-e';
import IISCtvmz11ТемпаУстанEForm from './forms/i-i-s-ctvmz11-темпа-устан-e';
import IISCtvmz11ДатчикModel from './models/i-i-s-ctvmz11-датчик';
import IISCtvmz11КонтроллерModel from './models/i-i-s-ctvmz11-контроллер';
import IISCtvmz11ТемпаУстанModel from './models/i-i-s-ctvmz11-темпа-устан';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-ctvmz11-датчик': IISCtvmz11ДатчикModel,
    'i-i-s-ctvmz11-контроллер': IISCtvmz11КонтроллерModel,
    'i-i-s-ctvmz11-темпа-устан': IISCtvmz11ТемпаУстанModel
  },

  'application-name': 'Ctvmz11',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Ctvmz11',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Ctvmz11',
          title: 'Ctvmz11'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        ctvmz11: {
          caption: 'Ctvmz11',
          title: 'Ctvmz11',
          'i-i-s-ctvmz11-контроллер-l': {
            caption: 'Контроллер',
            title: ''
          },
          'i-i-s-ctvmz11-темпа-устан-l': {
            caption: 'Темпа устан',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-ctvmz11-контроллер-l': IISCtvmz11КонтроллерLForm,
    'i-i-s-ctvmz11-темпа-устан-l': IISCtvmz11ТемпаУстанLForm,
    'i-i-s-ctvmz11-контроллер-e': IISCtvmz11КонтроллерEForm,
    'i-i-s-ctvmz11-темпа-устан-e': IISCtvmz11ТемпаУстанEForm
  },

});

export default translations;
