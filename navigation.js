import React from 'react';
import { createAppContainer, createSwitchNavigator, } from 'react-navigation';

import country from './country';
import detail from './detail';
const MySwitchNavigator = createSwitchNavigator(
  {
    country: country,
    detail:detail
    
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  },

);

export default createAppContainer(MySwitchNavigator);