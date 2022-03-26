import React  from 'react'
    var Testheading = "HTML TEST"
export default function Htmltestpage() {
  return (
    <>
        
    <div class="container w-75 bg-light py-4 shadow-sm my-3">
        <h2 className='text-center'> {Testheading} </h2>
        <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Test Number</th>
                <th scope="col">Total Questions</th>
                <th scope="col">Links</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Test 1</td>
                <td>50</td>
                <td><a href="#" className='nav-link text-primary a'>Proceed for Test</a></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td >Test 2</td>
                <td>50</td>
                <td><a href="#" className='nav-link text-primary a'>Proceed for Test</a></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Test 3</td>
                <td>50</td>
                <td><a href="#" className='nav-link text-primary a'>Proceed for Test</a></td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Test 4</td>
                <td>50</td>
                <td><a href="#" className='nav-link text-primary a'>Proceed for Test</a></td>
              </tr>
            </tbody>
          </table>
    </div>
    </>
  )
}
