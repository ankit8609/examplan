import React , {useState}from 'react'
import { Link } from 'react-router-dom';

const Form = () => {

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);
   const submitForm =(e)=>{
        e.preventDefault();
        const newEntry ={email: email, password:password};

        setAllEntry ([...allEntry, newEntry]);
   }

  return (
    <>
    
    <div className="container mt-3 mb-4 w-50 border border-dark py-4 bg-secondary shadow shadow-1 rounded px-auto" >
         <h2 className='text-white py-2 text-center'>Login Form</h2>
    <form action="" onSubmit={submitForm}>
    <div className="mb-3 row mx-auto">
     <label htmlFor="username" className="col-sm-2 col-form-label text-white">Username :</label>
     <div className="col-sm-10">
       <input type="text"  className="form-control w-100" id="username" name="username"
       value={email}
       onChange={(e)  =>  setEmail(e.target.value)}
       placeholder='Username' autoComplete='off'/>
     </div>
   </div>
   <div className="mb-3 row mx-auto"> 
     <label htmlFor="inputPassword" className="col-sm-2 col-form-label text-white">Password :</label>
     <div className="col-sm-10">
       <input type="password" className="form-control w-100 " id="inputPassword" name="username" 
       value={password}
       onChange={(e)  =>  setPassword(e.target.value)}
       placeholder='Password' autoComplete='off'/>
     </div>
   </div>
     <div className='mb-3  btn-block  text-center'>
  <Link to="/examsub">  <button type="submit" className="btn btn-sm btn-primary w-25 text-white">Log In</button></Link>
     </div>
    </form>
     </div>

      
        <div className='w-50 m-auto text-center text-white font'>
          {
            allEntry.map((currentElem)=>{
                  return(
                        <div className='container bg-dark shadow'>
                          <div className="row btm-border" >
                            <div className="col-lg-6">
                            <p  className='mb-0 pb-1 pt-1'>{currentElem.email}</p>
                            </div>
                            <div className="col-lg-6">
                            <p  className='mb-0 pb-1 pt-1'>{currentElem.password}</p>
                            </div>
                          </div>

                        </div>
                  )
            })
          }
        </div>
     
    </>
  )
}

export default Form


                          