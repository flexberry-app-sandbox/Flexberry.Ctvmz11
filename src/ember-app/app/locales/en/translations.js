import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Ctvmz11',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Ctvmz11',
          title: 'Ctvmz11'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-ctvmz11-контроллер-l': IISCtvmz11КонтроллерLForm,
    'i-i-s-ctvmz11-темпа-устан-l': IISCtvmz11ТемпаУстанLForm,
    'i-i-s-ctvmz11-контроллер-e': IISCtvmz11КонтроллерEForm,
    'i-i-s-ctvmz11-темпа-устан-e': IISCtvmz11ТемпаУстанEForm
  },

});

export default translations;
