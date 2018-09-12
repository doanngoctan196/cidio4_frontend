import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';

//import template
import './styles/template/icons-style/materialdesignicons.css';
import './styles/template/vendor.bundle.addons.css';
import './styles/template/vendor.bundle.base.css';
import './styles/template/style.css';
import './assets/styles/app.css';

var { Provider } = require('react-redux');
var store = require('./store');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
