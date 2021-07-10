import React from 'react';
import  {useState} from 'react';



const Employee = (props) => {
const handle=props.Addemployee;



    const {name , img, job, salary}=props.pd;

   const imgstyle={

    height:'80px'
   }




        const empStyle ={

            border: '2px solid Black',
            padding: '20px',
            margin:'10px',
            width:'70%',
            marginLeft:'40px'



        }
       
        const [info ,setInfo]=useState('')
    const salinfo = ()=>setInfo(salary);

    return (
        <div style={empStyle}>
        < img  style={imgstyle} src={img} class="img-thumbnail" alt=""/>
          
          
            <p>Employee Name : {name}</p>
            <p>Employee Job : {job}</p>
            <p>Employee Salary :{info}</p>
           
            <button  onClick={salinfo} type="button" class="btn btn-primary">Show_Salary</button>
            <br></br>
            <br></br>
            <button  onClick={()=> handle(props.pd)}type="button" class="btn btn-danger">Add_Employee</button>
            </div>
        
    );
};

export default Employee;