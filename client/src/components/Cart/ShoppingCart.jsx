import React from 'react'
import CartItem from './CartItem.jsx'


const ShoppingCart = () => {
  

  const clearCart = () => {
    localStorage.removeItem("cartProduct");
  }

  return (
    <div className="grid grid-cols-2 justify-items-center">
      <div >
        <button className="btn btn-primary btn-xs rounded-md p-1 s-1 bg-slate-400" onClick={clearCart}>Clear Cart</button>
          <div>
          <CartItem />
          </div>
      </div>
          <div>
            <p>Datos para envio</p>
          </div>
    </div>
  )
}

export default ShoppingCart