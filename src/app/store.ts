import Vue                      from 'vue';
import Vuex, { Store }          from 'vuex';
import { DefaultState, IState } from './state';
import { AppModule }            from './app/module';
import { CounterModule }        from './counter/module';

Vue.use(Vuex);

const state: IState = DefaultState;

/* istanbul ignore next */
const beforePersistLocalStorage = (localState: IState): IState => {
  delete localState.counter.incrementPending;
  delete localState.counter.decrementPending;

  return localState;
};

/* istanbul ignore next */
const beforePersistCookieStorage = (localState: IState): IState => {
  delete localState.app.config;
  delete localState.app.defaultMessages;
  delete localState.app.redirectTo;

  return localState;
};

export const store: Store<IState> = new Vuex.Store(
  {
    state,
    plugins: [
    ],
  },
);

store.registerModule(['app'], AppModule, { preserveState: true });
store.registerModule(['counter'], CounterModule, { preserveState: true });
