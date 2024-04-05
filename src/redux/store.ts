import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
//import storage from 'redux-persist/lib/storage';
import storage from "./storage/storage";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
  } from "redux-persist";

// Combine seus redutores
const rootReducer = combineReducers({
    user: userReducer
    // outros redutores podem ser adicionados aqui
});

// Configuração da persistência
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'] // Especifica quais fatias do estado devem ser persistidas Ex: ['user', 'cart', ...] 
};

// Criando o persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configurando a store com o persisted reducer
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
          }})
});

// Criando o persistor
export const persistor = persistStore(store);

// Definindo o tipo RootState
export type RootState = ReturnType<typeof store.getState>;