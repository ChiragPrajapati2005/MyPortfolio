

// import Card from './Component/Card';
import './App.css'
import { useState } from 'react';

function App() {
  const [val , setVal] = useState({name : "Chirag Prajapati" , isLoggedIn : false});

  return (
    <>
    <div className='flex justify-center items-center flex-col gap-5 mt-10'>
    <h1 className='font-semibold text-5xl'>Welcome , {val.name}</h1>
    <h1 className='font-bold text-lg'> isLoggedIn :  {val.isLoggedIn.toString()}</h1>
    <button className={`px-2 py-1 bg-blue-600 text-lg font-bold text-white rounded-full ${val.isLoggedIn ? 'bg-sky-600' : 'bg-red-600'}`} onClick={()=>setVal({...val, isLoggedIn: !val.isLoggedIn})}>Change</button>
    </div>
    </>
  )
}

export default App
