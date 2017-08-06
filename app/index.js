import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import 'antd/dist/antd.min.css';

import App from './user';

ReactDOM.render(
  <LocaleProvider locale={enUS}><App /></LocaleProvider>,
  document.getElementById('root')
);
