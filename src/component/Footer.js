import React from 'react'

export default function Footer() {
  return (
    <>
     <footer id="footer1" className='bg-dark pb-2 d-flex justify-content-end align-items-end  border-bottom border-secondary' >
        <div className="container pt-5">
            <div className="row">
                <div className="col-lg-3 col-md-12 col-12 pt-5">
                    <a href="/"><img src="webLogo.png" alt="" width="100%"  class="d-inline-block align-text-top"/></a>
                   
                        <div className="icons text-sm">
                            <a href="/"><i className="fab fa-facebook mr-3"></i></a>
                        <a href="/"><i className="fab fa-twitter mr-3"></i></a>
                       <a href="/"> <i className="fab fa-linkedin mr-3"></i></a>
                       <a href="/"> <i className="fab fa-instagram mr-3"></i></a>
                        </div>
                </div>
                <div className="col-lg-3 col-md-4  col-sm-4 col-12 ">
                    <h5 className="text-right text-md-left mb-4 text-white text-exp-sm ">Quick Links</h5>
                    <div className="footer-link1 pb-4">
              
                        <a href="/" className=" text-white">Home</a><br/>
                        <a href="/" className=" text-white"> Quicklinks</a><br/>
                        <a href="/" className=" text-white">Courses</a><br/>
                        <a href="/" className=" text-white">Placements</a><br/>
                        <a href="/" className=" text-white">FAQs</a><br/>
                        <a href="/" className=" text-white">Contact Us</a><br/>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4  col-sm-4 col-12">
                    <h5 className="text-right text-md-left mb-4 text-white text-exp-sm">Resources</h5>
                    <div className="footer-link2">
              
                        <a href="/" className=" text-white">Support</a><br/>
                        <a href="/" className=" text-white"> Teachers and Trainers</a><br/>
                        <a href="/" className=" text-white">Branches and OffIces</a><br/>
                        <a href="/" className=" text-white">Terms and Conditions</a><br/>
                        <a href="/" className=" text-white">Safety and Security</a><br/>
                        </div>
                </div>
                <div className="col-lg-3 col-md-4  col-sm-4 col-12">
                    <h5 className="text-right text-md-left mb-4 text-white text-exp-sm">Categories</h5>
                    <div className="footer-link3">
              
                        <a href="/" className=" text-white">Internship Programme</a><br/>
                        <a href="/" className=" text-white"> Job Opprtunities</a><br/>
                        <a href="/" className=" text-white">Career</a><br/>
                        <a href="/" className=" text-white">About Webakruti</a><br/>
                        </div>
                </div>
            </div>
            
        </div>
    
    </footer>
    </>
  )
}
