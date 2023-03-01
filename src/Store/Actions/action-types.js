

export const ActionTypes={
    ADD_TO_CART:'ADD_TO_CART',
    REMOVE_FROM_CART:'REMOVE_FROM_CART',
    CLEAR_ALL:"CLEAR_ALL"
}
export const addproduct=()=>async(dispatch,getstate)=>{
    const response=await fetch('https://fakestoreapi.com/products')    
    dispatch({type:ActionTypes.ADD_TO_CART,payload:response.data})
}