import './ReactotronConfig'

import { AppRegistry, StatusBar } from 'react-native';
import setup from './js/setup';

StatusBar.setBarStyle('default');
AppRegistry.registerComponent('NativeStarterKit', setup);
