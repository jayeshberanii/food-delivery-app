import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loaddata } from "../Store/Slices/mealSlice";
import { removeFromCart } from "../Store/Slices/UserSlice";

function Cart() {

    const dispatch=useDispatch()

  useEffect(
    () => {
      fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=indian')
        .then(res => res.json())
        .then(result => dispatch(loaddata(result.meals)))
        
    }, [])

  const cartdata=useSelector((state)=>{
    return state.users;
  })
  console.log(cartdata);
  const alldata=useSelector((state)=>{
    return state.mealdata
  })
  const filterdata=[]
if(alldata.length>0){
  cartdata.forEach(item=>{
    alldata[0].map(e=>{      
     if(e.idMeal===item.id){
      
      filterdata.push({...e,item:item.item})
     }
    })  
})
console.log(filterdata);
}

const deleteitem=(id)=>{
  dispatch(removeFromCart(id))
}

  return (
    <div>
      <section className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-lg-7">
                      <h5 className="mb-3">
                        <a href="#!" className="text-body">
                          <i className="fas fa-long-arrow-alt-left me-2"></i>
                          Continue Ordering
                        </a>
                      </h5>
                      <hr />

                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Your Orders</p>
                          <p className="mb-0">You have {filterdata.length>0?filterdata.length:'0'} items in your cart</p>
                        </div>
                        <div>
                          <p className="mb-0">
                            <span className="text-muted">Sort by:</span>{" "}
                            <a href="#!" className="text-body">
                              price <i className="fas fa-angle-down mt-1"></i>
                            </a>
                          </p>
                        </div>
                      </div>                     
                      
                        {
                          filterdata.length>0?filterdata.map((item,pos)=>{
                            return(
                              <div className="card mb-3 mb-lg-0" >
                              <div className="card-body">
                                <div className="d-flex justify-content-between" >
                                  <div className="d-flex flex-row align-items-center" key={pos}>                                    
                                    <div className="ms-3" >
                                      <h5>{item.strMeal}</h5>
                                      <p className="small mb-0"></p>
                                    </div>
                                  </div>
                                  <div className="d-flex flex-row align-items-center">
                                    <div >
                                      <h5 className="fw-normal me-5 mb-0">{item.item}</h5>
                                    </div>
                                    <div >
                                      <h5 className="mb-0">{item.idMeal}</h5>
                                    </div>
                                    <button className="border-0 ms-3" onClick={()=>deleteitem(pos)}>
                                      <i className="fas fa-trash-alt text-primary"></i>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            )
                          })  :""                     
                        }
                      
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;
