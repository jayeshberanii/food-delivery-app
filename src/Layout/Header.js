import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { useSelector } from "react-redux";


const Header=(props)=>{    
    const cartdata=useSelector((state)=>{
        return state.users;
      })

   const navigate=useNavigate() 
    
        return (
            <div className="header w-100">
                <div>
                    <h2 className="text-white">ReactMeals</h2>
                </div>
                <div className="d-flex">
                    <div className="">
                        <Link to="/" className="nav-link text-white">
                            Home
                        </Link>
                    </div>
                    <div>
                        <Link to="/meals" className="nav-link text-white">
                            Meals
                        </Link>
                    </div>
                    <div>
                        <Link to="/products" className="nav-link text-white">
                            Products
                        </Link>
                    </div>
                </div>
                <div>
                    <button
                        onClick={()=>navigate('/cart')}
                        className="text-white cart-btn border-0 rounded-pill"
                    >
                        <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                        &nbsp;&nbsp;&nbsp;Your Cart&nbsp;&nbsp;&nbsp;
                        <span className="cart-span text-white border-0 px-3 py-2 rounded-pill">
                            {/* {cartdata.length>0? cartdata.length : "0"} */}
                        </span>
                    </button>
                </div>
            </div>
        );
    }


export default Header;
