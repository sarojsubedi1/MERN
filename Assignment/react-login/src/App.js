import './App.css';
import {useRef, useState} from 'react';

function Form (){
  const [msg, setMsg] = useState("Please Login");
  const nameRef = useRef();
  const passRef = useRef();
  const handleClick=(event)=>{
      event.preventDefault()
      if (nameRef.current.value === "admin" && passRef.current.value === "admin") {
        setMsg("login sucessfully")
      } 
      else {
          setMsg("login failed!")
      }
    }

  return(
    <>
    <form>
    <h2>LogIn System</h2>
    <label htmlFor='userName'>
      User Name:<input
      ref={nameRef} 
      type="text" 
      id='userName'
      placeholder='Enter your name' />
    </label>
    <label htmlFor='password'>
      Password:<input 
      ref={passRef}
      type="text" 
      id='password'
      placeholder='Enter your password' />
    </label>
    <button onClick={handleClick}>Log In</button>
    <div className='message'>
      <p>{msg}</p>
    </div>
    </form>
    </>
  );
}


export default Form;
