import {createContext} from 'react';

import {AppStateI} from './types';
const initialState: AppStateI = {
  user: null,
};
const AppContext = createContext<AppStateI>(initialState);
export default AppContext;
