import React  from 'react'
import { Link } from 'react-router-dom'

export default function ExamSub() {

  return (
    <>
    
    <div className="examSub">
        <nav className="navbar nav navbar-expand-lg navbar-primary bg-primary marquee">
          <div className="container-fluid">
            
            <button className="navbar-toggler bg-warning py-xs-2 my-sm-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContents" aria-controls="navbarSupportedContents" aria-expanded="false" aria-label="Toggle navigation">
              <span className=" text-white"> Subjects</span>
            </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContents">
          <div className="container-fluid">
              <div className="row">
                <div className="col-lg-1 col-md-1">
                  <Link to="/htmltestpage"><button className="btn btn-warning text-white d-block w-100">HTML</button></Link>
                </div>
                <div className="col-lg-1 col-md-1">
                  <button className="btn btn-warning text-white d-block w-100" >CSS</button>
                </div>
                <div className="col-lg-1  col-md-1">
                  <button className="btn btn-warning text-white d-block w-100">PS/CS6</button>
                </div>
                <div className="col-lg-1  col-md-1">
                  <button className="btn btn-warning text-white d-block w-100">BOOTSTRAP</button>
                </div>
                <div className="col-lg-1  col-md-1">
                  <button className="btn btn-warning text-white d-block w-100">RWD</button>
                </div>
                <div className="col-lg-1  col-md-1">
                  <button className="btn btn-warning text-white d-block w-100">PHP</button>
                </div>
                <div className="col-lg-1  col-md-1">
                  <button className="btn btn-warning text-white d-block w-100">MYSQL</button>
                </div>
                <div className="col-lg-1  col-md-1">
                  <button className="btn btn-warning text-white d-block w-100">JAVASCRIPT</button>
                </div>
                <div className="col-lg-1  col-md-1">
                  <button className="btn btn-warning text-white d-block w-100">PYTHON</button>
                </div>
                <div className="col-lg-1  col-md-1">
                  <button className="btn btn-warning text-white d-block w-100">PROJECT1</button>
                </div>
                <div className="col-lg-1  col-md-1">
                  <button className="btn btn-warning text-white d-block w-100">PROJECT2</button>
                </div>
                <div className="col-lg-1  col-md-1">
                  <button className="btn btn-warning text-white d-block w-100">PROJECT3</button>
                </div>
              </div>

             
      </div>
    </div>
  </div>
</nav>
              <div className="container pb-3">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <h2 className='text-secondary text-center my-0 py-3'> Please select the subject of Your assessment </h2>
                  </div>
                </div>
              </div>
            <div className="container-fluid bg-warning ">
              <marquee behavior="alternate" direction="alternate" className="marquee text-success line-height">All The Best For Your Exam</marquee>
            </div>
            
      </div>
  </>
  )
}
