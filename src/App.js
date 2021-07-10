

import Data from '../src/Data/Data.json';
import '../src/App.css';
import React , {useState , useEffect} from 'react';
import  Employee from  '../src/Employee/Employee';
import Cart from './Cart/Cart';


function App() { 

  const [employee , setEmployee]=useState([])
  const [cart , setCart ] = useState([])
 

  useEffect(()=>{

    setEmployee(Data)


  },[])

  const Addemployee=(pd)=>{

    const newCart =[...cart,pd]
    setCart(newCart)
  }

const StyleText ={

    textAlign:'center',
    color: 'green',
    marginLeft: '38px'
    }

  return (


    <div className="Employee-info">
      <div className="Employee-container">
     
     <h1 style={StyleText}>Welcome To Employee DataBase</h1>

      

{

  employee.map(pd=> <Employee pd={pd} Addemployee={Addemployee}></Employee>)
}
</div>
        <div className="cart-container">
        
          <Cart cart={cart}></Cart>
          
          
        </div>
    </div>
  );
}

export default App;
