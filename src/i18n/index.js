import I18n, { getLanguages } from 'react-native-i18n';
import en from 'i18n/locales/en';
import ptBR from 'i18n/locales/ptBR';

I18n.fallbacks = true;
I18n.defaultLocale = 'ptBR';
I18n.locale = 'ptBR';
I18n.currentLocale();

I18n.translations = {
  en,
  ptBR,
};

export default I18n;

