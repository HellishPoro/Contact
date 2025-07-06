import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./contactsApi";

export const store = configureStore(
  {
    reducer: {
      [contactsApi.reducerPath]: contactsApi.reducer,
    },
    devTools: true,
    middleware: (getDefaultMidleware) =>
      getDefaultMidleware().concat(contactsApi.middleware),
  }
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
