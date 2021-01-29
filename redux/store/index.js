/* eslint-disable no-underscore-dangle */
/* eslint-disable global-require */
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";

// BINDING MIDDLEWARE
const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

// COMBINING ALL REDUCERS
const combinedReducer = combineReducers({

});

const MakeStore = ({ isServer }) => {
  if (isServer) {
    // If it's on server side, create a store
    return createStore(combinedReducer, bindMiddleware([thunkMiddleware]));
  }
  // If it's on client side, create a store which will persist
  const { persistStore, persistReducer } = require("redux-persist");
  const storage = require("redux-persist/lib/storage").default;

  const persistConfig = {
    key: "Token",
    whitelist: [""], // only counter will be persisted, add other reducers if needed
    storage, // if needed, use a safer storage
  };

  // Create a new reducer with our existing reducer
  const persistedReducer = persistReducer(persistConfig, combinedReducer);

  // Creating the store again
  const store = createStore(
    persistedReducer,
    bindMiddleware([thunkMiddleware]),
  );

  // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature
  store.__persistor = persistStore(store);

  return store;
};

// const MakeStore = () => createStore(combinedReducer, bindMiddleware([thunkMiddleware]));

// export an assembled wrapper
export const wrapper = createWrapper(MakeStore);
