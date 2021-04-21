import React from "react";
import ReactDOM from "react-dom";
import './css/index.css'
import App from "./components/App"



ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);



// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
//
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// React.createElement(typ, [props], [...children])

// let link = React.createElement(
//   "a",
//   {
//     href: 'google.com',
//     target: '_blank'
//   },
//   "Google Link");



//
// let image = React.createElement(
//   'img',
//   {
//     src: 'https://i.pinimg.com/564x/2e/b9/b9/2eb9b97463cba8676f51e879f2dd8775.jpg',
//     alt: 'Image',
//     width: 400
//   }
// )
//
// let title = React.createElement(
//   'h2',
//   {
//
//   },
//   'Kebab'
// )
//
// let price = React.createElement(
//   'p',
//   {},
//   'Price 10$'
// )
//
// let btn = React.createElement(
//   'button',
//   {type: 'button'},
//   'Add to card'
// )
//
// // let product = React.createElement(
// //   'div',
// //   {},
// //   image,
// //   title,
// //   price,
// //   btn,
// // )
//
// let product = React.createElement(
//   'div',
//   {
//     children: [image, title, price, btn]
//   },
// )
