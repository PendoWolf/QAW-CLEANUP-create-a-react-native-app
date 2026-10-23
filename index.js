/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { NavigationLibraryType, PendoSDK } from 'rn-pendo-sdk';
import App from './App';
import { name as appName } from './app.json';

// The app has no navigation library, so Pendo runs in track-events mode.
PendoSDK.setup(
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhY2VudGVyIjoidXMiLCJrZXkiOiI4N2Y1YmI0ZjAwZTVhODdiN2I0ZDY2NDUyYTM0OTZiZjg5NmY4NWY5NWRkYWQ2ZjRiMzc4NjkxYmIxNjE3Nzk4MDg5MWRkMzU5NjczZmM5ZWJmNTJhMjNkNTQwOGMyMmU0ODdiNjA2Mjk5M2U0OTJlNjUzMWViNTIxODVmNzJjNDYxY2FmMGE1OWNmMGMyNjUyNzhlZmZlN2IxMTI2NTBhMDZkZDEwYTUwMmEwYzFlYWVmOGZkM2M5NGI4OTEyZGMuM2VkZTI4YjFjZDg0ZjEzMDVmOWM4Y2Y5YjE2ZmM1ZGIuYTNjMjI5ZmY1NGVmNjc0YjVhZjY2MzdkZjRmODJiMDBlNGRhMTliMzhlNjcwY2IzMmQ2YTM2Nzk1MTAyOGY0YSJ9.KRmH20ALa4_3jnXAk8hFY7zS2vpJnNp4iWxhqj91qYugHwyY1y1mJZC-cLHDtkGVJf00VEGd0Hklxoim4UHBBOC3c-sVNQrxDptLsyCL-ox6bTCAS3FVy58qeiaVEU88Ly7XExx2zqyZ83EAaQ48-sAicSr3xqx_H-OTn3p_M6g',
  { library: NavigationLibraryType.Other },
);

// QAW Counter has no sign-in or user model, so there is no user ID to identify
// visitors with. An empty visitor ID starts an anonymous session, and Pendo
// assigns each device its own anonymous visitor ID. Accounts are not used (B2C).
PendoSDK.startSession('', '', {}, {});

AppRegistry.registerComponent(appName, () => App);
