import { AppDefaultState, IAppState }         from './app/state';

export interface IState {
  [key: string]: any;

  app?: IAppState;
}

export const DefaultState: IState = {
  app:     {
    ...AppDefaultState(),
  },
};
