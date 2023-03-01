import { Component } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Cart from './Layout/Cart';

import Main from './Layout/Main';
import Meallist from './Layout/Meallist';
import Home from './UI/home';
import Products from './UI/Products';
// const setitem=new Set()
class App extends Component{
  // state={
  //   cartitem:0,
  //   amountitem:0
  // }
   
  //  Addtocart=(id,amount)=>{
  //   console.log(id,amount);
  //   setitem.add(id)  
  //   this.setState({
  //     cartitem:setitem.size 
  //   })     
  // }
  
  render(){
    return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='/' element={<Main/>}/>
          {/* <Route path='/meals' element={<Meallist/>}/> */}
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/products' element={<Products/>}/>
        </Route>
      </Routes>
      </BrowserRouter>      
    )
  }  
}

export default App;
