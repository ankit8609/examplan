import React from 'react'

export default function banner() {
  return (
    <>
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src="webg-pngs/TDC.png" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="webg-pngs/bnr2.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="webg-pngs/bnr3.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="webg-pngs/bnr4.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="webg-pngs/bnr5.jpg" className="d-block w-100" alt="..."/>
          </div>
        </div>
      </div>
    </>
  )
}
