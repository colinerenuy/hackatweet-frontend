import '../styles/globals.css';
import Head from 'next/head';

//redux functions
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';


//reducers//
import user from '../reducers/user';
import tweets from '../reducers/tweets';
import hashtags from '../reducers/hashtags';
const reducers = combineReducers({ user, tweets, hashtags });

//création du store persistant
const persistConfig = { key: 'hackatweets', storage };

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
 });
 const persistor = persistStore(store);



//app function
function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
       <PersistGate persistor={persistor}>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default App;
