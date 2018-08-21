import Vue             from 'vue';
import VueI18n         from 'vue-i18n';
import VeeValidate     from 'vee-validate';
import { Store }       from 'vuex';
import { sync }        from 'vuex-router-sync';
import { store }       from './store';
import { IState }      from './state';
import App             from './app/App/App.vue';
import { HttpService } from './shared/services/HttpService';

Vue.use(VeeValidate, { inject: false });

export interface IApp {
  app: Vue;
  store: Store<IState>;
}

export const createApp = (): IApp => {

  HttpService.store = store;

  const app: Vue = new Vue(
    {
      store,
      render: (h) => h(App),
    },
  );

  return { app, store };
};
