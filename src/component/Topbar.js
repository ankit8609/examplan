import React from 'react'

export default function topbar() {
  return (
   <>
   <section className="topbar">
          <div className="container">
              <div className="row ">
                <div className="col-lg-8 col-md-6 col-sm-12">
                  <span className="text-white">
                      <i className="fa-solid fa-phone"></i> <a href="/" className="text-white">+91 7058669996 </a>
                       <span>| </span>
                        <a href="/" className="text-white">+91-7387990061 </a> 
                        <span>| </span>
                         <i className="fa-regular fa-envelope"></i> 
                         <a href="/" className="text-white">    edu.webgurukul.co.in</a> </span>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="social-data text-end">
                    <a href="/" className="text-white mx-2"><i className="fa-brands fa-facebook"></i></a>
                   <a href="/" className="text-white mx-2"><i className="fa-brands fa-twitter"></i></a>
                    <a href="/" className="text-white mx-2"><i className="fa-brands fa-youtube"></i></a>
                     <a href="/" className="text-white mx-2"><i className="fa-brands fa-pinterest"></i></a>
                     <a href="/" className="text-white mx-2"><i className="fa-brands fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
              </div>
      </section>
   </>
  )
}
