/* eslint-disable no-underscore-dangle */
/* eslint-disable global-require */
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import LoginReducer from "../reducer/LoginReducer";
import ProductReducer from "../reducer/ProductReducer";
import BuyReducer from "../reducer/BuyReducer";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const combinedReducer = combineReducers({
  Auth: LoginReducer,
  Product: ProductReducer,
  Cart: BuyReducer,
});

const MakeStore = ({ isServer }) => {
  if (isServer) {
    return createStore(combinedReducer, bindMiddleware([thunkMiddleware]));
  }

  const { persistStore, persistReducer } = require("redux-persist");
  const storage = require("redux-persist/lib/storage").default;

  const persistConfig = {
    key: "Data",
    whitelist: ["Auth", "Product", "Cart"],
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, combinedReducer);

  const store = createStore(
    persistedReducer,
    bindMiddleware([thunkMiddleware]),
  );

  store.__persistor = persistStore(store);

  return store;
};

export const wrapper = createWrapper(MakeStore);
