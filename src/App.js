import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // var person="shakil";
  // var obj={
  //   name:"shakil",
  //   uni:"diu"
  // }
  // var style={
  //   color:'red',
  //   backgroundColor:'yellow'
    
  // }
  const nayoks=['anwar','jafor','alamgir','iqbal'];
  const products=[
    {name:'Photoshop', price:'$100'},
    {name:'Illustrator', price:'$75'},
    {name:'Pdf Reader', price:'$5'}
  ];
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done with shakil <code>src/App.js</code> and save to reload.
        </p>
      <p style={{backgroundColor:'green', color:'black'}}>my first react paragraph:{3+2}</p>
      <h2 style={style} > info: {obj.name+ " "+ obj.uni}</h2> */}

      <StateCount></StateCount> 
      <Users></Users>
      <p>I am a React person</p>

     <ul>
     { 
      
      nayoks.map(nayok=><li>{nayok}</li>)
     
     
     }
     {
       products.map(product=><li>{product.name}</li>)
     }
     </ul>

     {
       products.map(productList=><Products product={productList}></Products>)
     }

     
      <Person name={nayoks[2]} naika="rubana khan"></Person>
      <Person name="sakib khan" naika="sakila khan"></Person>
      <Person name="amir khan" naika="jinnath khan"></Person>
      </header>
    </div>
    
  );
}
function Products(props) {
  var productStyle={
    border:'1px solid gray',   
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'250px',
    width:'200px',
    float:'left'
    
  };
  const {name, price}=props.product;
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
  
}

function StateCount() {
  const [count, setCount]=useState(10);
  // const handleIncrease=()=>setCount(count+1); //its a function
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onMouseMove={()=>setCount(count+1)}>Click Me</button>
      <button onClick={()=>setCount(count-1)}>Kick Me</button>
    </div>
  )
  
}

function Person(props) {
  var personStyle={
    border: '2px solid red',
    margin:'10px'
  }
  return (
    <div style={{border:'2px solid gold',margin:'10px', width:'400px'}}>
      <h1>Name:{props.name} </h1>
      <h3>All time: {props.naika}</h3>
    </div>
  )
 
  
}

function Users() {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic User: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
  
}

export default App;
