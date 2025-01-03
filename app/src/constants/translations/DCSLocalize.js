import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';
import en from '../translations/en';
import ar from '../translations/ar';
import bn from '../translations/bn';
import gu from '../translations/gu';
import hi from '../translations/hi';
import kn from '../translations/kn';
import ml from '../translations/ml';
import mr from '../translations/mr';

import or from '../translations/or';
import pb from '../translations/pb';
import ta from '../translations/ta';
import te from '../translations/te';

const LANGUAGES = {
  en,
  ar,
  bn,
  gu,
  hi,
  kn,
  ml,
  mr,
  or,
  pb,
  ta,
  te
};
const LANG_CODES = Object.keys(LANGUAGES);
const LANGUAGE_DETECTOR = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    AsyncStorage.getItem('user-language', (err, language) => {
      if (err || !language) {
        if (err) {
          console.log('Error fetching Languages from asyncstorage ', err);
        } else {
          console.log('No language is set, choosing English as fallback');
        }
        const findBestAvailableLanguage =
          // RNLocalize.findBestAvailableLanguage(LANG_CODES);
        callback(findBestAvailableLanguage?.languageTag || 'en');
        return;
      }
      callback(language);
    });
  },
  init: () => {},
  cacheUserLanguage: language => {
    AsyncStorage.setItem('user-language', language);
  },
};
i18n
  .use(LANGUAGE_DETECTOR)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources: LANGUAGES,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });
