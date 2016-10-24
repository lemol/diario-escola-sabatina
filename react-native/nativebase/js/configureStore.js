
import { AsyncStorage } from 'react-native';
import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import Reactotron from 'reactotron-react-native'
import createReactotronEnhancer from 'reactotron-redux'
import reducer from './reducers';
import promise from './promise';

const reactotronEnhancer = createReactotronEnhancer(Reactotron);

export default function configureStore(onCompletion:()=>void):any {
  const enhancer = compose(
    reactotronEnhancer,
    applyMiddleware(thunk, promise),
    devTools({
      name: 'nativestarterproseed', realtime: true,
    }),
  );

  const store = createStore(reducer, enhancer);
  persistStore(store, { storage: AsyncStorage }, onCompletion);

  return store;
}
