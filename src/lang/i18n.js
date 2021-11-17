import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './en_US.json';
import zh from './zh_TW.json';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: localStorage.getItem('semsLang') || process.env.VUE_APP_I18N_LOCALE,
  messages: { en, zh },
  fallbackLocale: process.env.VUE_APP_I18N_LOCALE,
  silentFallbackWarn: true,
});

export default i18n;
