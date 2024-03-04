import './App.css';
import {useState , useEffect} from "react";

const App = () => {

  const [form, setForm] = useState({})


  const submitData  = (e) => {
    e.preventDefault()
     fetch("http://localhost:8080/students/add", {
      method:"POST",
      headers:{
        "Accept" : "application/json",
        "Content-Type" : "application/json"
      },
      body:JSON.stringify(form)
     }).then((data) => data.json())
     .then((response)  => alert(JSON.stringify(response)))
    
  }
  return (
    <div className="container">
       <div className='simple_signup'>
        <form method= "GET"  onSubmit = {submitData} >
          <input  name = "email"  type = "email" placeholder="Email Address"
           onChange={(e) => setForm({...form, email:e.target.value})}
          required />
          <input name = "password"  type = "password" placeholder="Password" 
          onChange={(e) => setForm({...form, password:e.target.value})}
          required />


          <button type='submit'>Submit</button>
        </form>
       </div>
    </div>
  );
}

export default App;
