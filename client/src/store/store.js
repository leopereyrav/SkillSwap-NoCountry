import { combineReducers, configureStore } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage'
import persistStore from 'redux-persist/es/persistStore';
//slices to use
import authSlice from './slices/authSlice';
import skillsSlice from "./slices/skillsSlice"
//aqui se añade los slices que se necesiten en el proyecto.
export const rootReducer = combineReducers({
  //reducer
  user: authSlice,
  skills: skillsSlice,

});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);
