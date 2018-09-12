import React from 'react';
import ReactDom from 'react-dom';
import App from '~/src/App';
import 'bootstrap/dist/css/bootstrap.css';

ReactDom.render(
    <App/>,
    document.getElementById("root")
);

if (module.hot) {
    module.hot.accept('~/src/App', () => {
      const NextApp = require('./src/App').default;
      ReactDOM.render(
        <AppContainer>
          <NextApp/>
        </AppContainer>,
        rootEl
      );
    });
}
  