import {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL:'https://jsonplaceholder.typicode.com'
})

function App() {

  const [state,setState] = useState('');
  
  const asyncFunction = async () =>{
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json())
    .then(json => console.log(json))
  }
  useEffect(()=>{
    axiosInstance.get('/posts')
    .then(res => console.log('The data is', res.data))
    .catch(err => console.log('error in serve', err))
    asyncFunction()
  },[])

 
  return (
    <div >
        {state ? <div> {state} </div> : null}
    </div>
  );
}

export default App;
