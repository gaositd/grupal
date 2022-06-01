import React from 'react'

const CartItem = () => {

  let dataCart = JSON.parse(localStorage.getItem("cartProduct"));

  
  const removeOneFromCart = (id) => {
    let dataCart = JSON.parse(localStorage.getItem("cartProduct"));
    let dataCart2 = dataCart.filter(item => item.id !== id);
    localStorage.setItem("cartProduct", JSON.stringify(dataCart2)); 
  }

  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10">
    <div className="px-4 py-2">
      <h1 className="text-gray-900 font-bold text-1xl uppercase">
        {
        dataCart && dataCart.map(product => {
          return (
            <div key={product.id}>
              <h1 className="text-gray-900 font-bold text-3xl uppercase">{product.name}</h1>
              <p className="text-gray-600 text-sm mt-1">${product.price} USD</p>
              <button onClick={()=> removeOneFromCart(product.id)}>Clear Item</button>
            </div>
          )
        })}
      </h1>
      </div>
      </div>
  )
}

export default CartItem