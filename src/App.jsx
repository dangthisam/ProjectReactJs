import React from "react";
import PropTypes from "prop-types";
import Header from "./component/Header/index.jsx";
import Footer from "./component/Footer/index.jsx"
import NavigationMenu from "./component/NavigationMenu/index.jsx";
import MainContent from "./component/MainContent/index.jsx";
import Content from "./component/Content/index.jsx";
import Menu from "./component/Menu/index.jsx";
import ProductItem from "./component/ProductsLIst/index.jsx";
import Country from "./component/Country/index.jsx";
function App(){ 
 
  return (
    // cú pháp flagmetn <></>
    <>

     {/* // <ProductItem /> */}
     <Country />

    </>
  )
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     //Chỉ định một state
//     this.state = { index: 1 };
//   }
//   render() {
//     return (
//       <div>
//         <p>Giá trị {this.state.index}</p>
//         <button
//           onClick={() => {
//             this.setState({
//               index: this.state.index + 1
//             })
//           }}
//         >
//           Tăng
//         </button>
//         <button
//           onClick={() => {
//             this.setState({
//               index: this.state.index -1
//             })
//           }}
//         >
//           Giảm
//         </button>
//       </div>
//     );
//   }
// }
// export default App;

// class App extends React.Component {
//   render() {
     
//     return (
//       <div>
//         <h1>{this.props.name}</h1>
//         <ul>
//           <li>{this.props.type}</li>
//           <li>{this.props.public_year}</li>
//           <li>{this.props.storage}</li>
//         </ul>
//       </div>
//     );
//   }
// }
// App.defaultProps = {
//   name: 'iPhone Xs Max',
//   type: 'samsung',
//   public_year: 2018,
//   storage: '64 GB'
// }

// App.propTypes = {
//   name: PropTypes.string,
//   type: PropTypes.oneOf(["iPhone", "iPad", "Mac", "SmartWatch"]),
//   public_year: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number,
//   ])
// }
export default App;