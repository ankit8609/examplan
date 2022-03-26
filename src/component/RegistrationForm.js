

import React , {useState} from 'react'
import { Link } from 'react-router-dom';

const RegistrationForm = () => {

  const [userRegister ,  setuserRegister] = useState({

      fname:  " " ,
      lname : "",
      emailId: "",
      inputPassword: "",
      Phnumber: ""
  });

  const [records , setRecords] = useState([]);

  const handleInput = (e) =>{

    const name = e.target.name;
    const value =e.target.value;

    console.log(name, value);

    setuserRegister({...userRegister, [name]: value})
  }

  const handleSubmit = (e) =>{
      e.preventDefault();

      const newRecords = { ...userRegister,  id: new Date().getTime().toString() }
      console.log(records);
      setRecords([...records , newRecords]);

      setuserRegister({fname:  " " , lname : "", emailId: "",  inputPassword: "", cPassword:"", Phnumber: ""})
  }
  return (
    <>
    <div className="container mt-3 mb-4 w-50 border border-dark py-4 bg-secondary shadow shadow-1 rounded px-auto" >
       <h2 className='text-white py-2 text-center'>Registration  Form</h2>

  <form action="" onSubmit={handleSubmit}>
  <div class="mb-3 row mx-auto">
   <label htmlFor="fname" class="col-sm-2 col-form-label text-white">First Name :</label>
   <div class="col-sm-10">
     <input type="text"  class="form-control w-100" id="fname" autoComplete='off'
     value={userRegister.fname}
     onChange={handleInput}
     name="fname" placeholder='Enter your first name'/>
   </div>
   </div>

   <div class="mb-3 row mx-auto">
   <label htmlFor="lname" class="col-sm-2 col-form-label text-white">Last Name :</label>
   <div class="col-sm-10">
     <input type="text"  class="form-control w-100" id="lname" autoComplete='off'
     value={userRegister.lname}
     onChange={handleInput}
     name="lname" placeholder='Enter your last name'/>
   </div>
   </div>

   <div class="mb-3 row mx-auto">
   <label htmlFor="emailId" class="col-sm-2 col-form-label text-white">Email Add :</label>
   <div class="col-sm-10">
     <input type="text"  class="form-control w-100" id="emailId" autoComplete='off'
     value={userRegister.emailId}
     onChange={handleInput}
     name="emailId" placeholder='Enter your Valid email ID'/>
   </div>
   </div>

 <div class="mb-3 row mx-auto">
   <label htmlFor="inputPassword" class="col-sm-2 col-form-label text-white">Password :</label>
   <div class="col-sm-10">
     <input type="password" class="form-control w-100 " id="inputPassword" autoComplete='off'
     value={userRegister.inputPassword}
     onChange={handleInput}
     name="inputPassword" placeholder='Password'/>
   </div>
 </div>

 <div class="mb-3 row mx-auto">
   <label htmlFor="cPassword" class="col-sm-2 col-form-label text-white"> Confirm Password :</label>
   <div class="col-sm-10">
     <input type="password" class="form-control w-100 " id="cPassword" autoComplete='off'
     value={userRegister.cPassword}
     onChange={handleInput}
     name="cPassword" placeholder='Password'/>
   </div>
 </div>

 <div class="mb-3 row mx-auto">
   <label htmlFor="Phnumber" class="col-sm-2 col-form-label text-white">Mobile Number:</label>
   <div class="col-sm-10">
     <input type="text" class="form-control w-100 " id="Phnumber" autoComplete='off'
     value={userRegister.Phnumber}
     onChange={handleInput}
     name="Phnumber" placeholder='mobile number'/>
   </div>
 </div>

   <div className='mb-3  d-block text-center'>
   <Link to="/examsub"><button type="submit" class="btn btn-sm btn-primary w-25 text-white">Register</button></Link>
   </div>
  </form>
   </div>

   <div className=' m-auto text-center text-white font-reg'>
          {
            records.map((currentElem)=>{
                  return(
                        <div className='container bg-dark shadow' >
                          <div className="row btm-border" >
                            <div className="col-lg-2">
                            <h5 className='mb- pb-1 pt-10'>{currentElem.fname}</h5>
                            </div>
                            <div className="col-lg-2">
                            <h5 className='mb-0 pb-1 pt-1'>{currentElem.lname}</h5>
                            </div>
                            <div className="col-lg-2">
                            <p className='mb-0 pb-1 pt-1'>{currentElem.emailId}</p>
                            </div>
                            <div className="col-lg-2">
                            <p className='mb-0 pb-1 pt-1'>{currentElem.inputPassword}</p>
                            </div>
                            <div className="col-lg-2">
                            <p className='mb-0 pb-1 pt-1'>{currentElem.cPassword}</p>
                            </div>
                            <div className="col-lg-2">
                            <p className='mb-0 pb-1 pt-1'>{currentElem.Phnumber}</p>
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

export default RegistrationForm
