
import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux';
import { fetchusers } from '../Store/STORE1';


function Products() {

const dispatch=useDispatch()
dispatch(fetchusers())
useEffect(()=>{
   
},[])

  return (
    <div>

    </div>
  )
}

export default Products