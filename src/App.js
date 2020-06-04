import React from 'react';
import {YellowBox} from 'react-native';

import ClickCout from './app/components/ClickCount';

YellowBox.ignoreWarnings(['Setting a timer']);

// "eslint": "^7.1.0",

const AppPatas = () => (
  <>
    <ClickCout />
  </>
);
export default AppPatas;
