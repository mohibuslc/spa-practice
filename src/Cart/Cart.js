import React from 'react';

const Cart = (props) => {

    const cart =props.cart;
    

    // Total salary Equaction or you can say its formula ....

    let Total=0;
        for (let i=0; i<cart.length; i++){

          const info = cart[i];
          const price = parseInt(info.salary);
          Total+=price;

        }
   
  
    return (
        <div>
          <h3>Selected Employee Information :</h3>  
          <hr></hr>
          <p>Selected Employee Number:{cart.length}</p>
          <p>Total Salary : {Total}</p>
        </div>
    );
};

export default Cart;