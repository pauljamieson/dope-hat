import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducers from "../reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["user", "isLogged"],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store =
  process.env.NODE_ENV === "development"
    ? createStore(
        persistedReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    : createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };
