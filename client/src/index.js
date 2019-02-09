import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import * as serviceWorker from './serviceWorker';

// import './vendor/bootstrap/css/bootstrap.min.css';
// import './fonts/font-awesome-4.7.0/css/font-awesome.min.css';
// import './fonts/themify/themify-icons.css';
// import './fonts/Linearicons-Free-v1.0.0/icon-font.min.css';
// import './fonts/elegant-font/html-css/style.css';
// import './vendor/animate/animate.css';
// import './vendor/css-hamburgers/hamburgers.min.css';
// import './vendor/animsition/css/animsition.min.css';
// import './vendor/select2/select2.min.css';
// import './vendor/slick/slick.css';
// import './vendor/noui/nouislider.min.css';
// import './css/util.css';
// import './css/main.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
