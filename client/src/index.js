import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux"
import {store,persistor} from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';
const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(
    <Provider store={store}>
        <PersistGate loading ={null} persistor={persistor}>
             <App />
        </PersistGate> 
    </Provider>
);