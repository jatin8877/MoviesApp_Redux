import 'react-native-gesture-handler';
import React from 'react';

import {View, StyleSheet, Text} from 'react-native';
import DrawerContainer from './src/navigations/drawer/Drawer';
import rootReducer from './src/Redux/reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Movie from './src/screens/Movie/Movie';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <DrawerContainer />
      {/* <Movie /> */}
    </Provider>
  );
};

export default App;
