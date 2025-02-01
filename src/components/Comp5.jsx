import React from 'react'

export default function Comp5() {
  return (
    <div>
        <section className='page-section'>
            <div className='container'>
                <h2 className='page-section-heading text-center text-uppercase portfolio-color mb-0'>Contact Me</h2>
            </div>
            <div className='divider-custom'>
  <div className='divider-custom-line'></div>
  <div className='divider-custom-icon'><svg class="svg-inline--fa fa-star" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></div>
  <div className='divider-custom-line'></div>
  </div>
  <div className='row justify-content-center'>
    <div className='col-lg-8 col-xl-7'>
        <form id='contactform'  action="">
            <div className='form-floating mb-3'>
                <input  className='form-control' id='name' placeholder='Enter YourName' type="text" />
                <label for="name" > Full Name </label>
            </div>
            <div className='form-floating mb-3'>
                <input  className='form-control' id='email' placeholder='Enter Your Email' type="text" />
                <label for="email" > Email Address  </label>
            </div>
            <div className='form-floating mb-3'>
                <input  className='form-control' id='phoneNumber' placeholder='Enter Your Phone Number ' type="number" />
                <label for="phoneNumber" > Phone Number </label>
            </div>
            <div className='form-floating mb-3'>
                <input  className='form-control' id='message' placeholder='Enter Your Message' type="text" />
                <label for="message" > Message </label>
            </div>
            <button className='btn btn-success btn-xl disabled' type='submit'> Send</button>
        </form>
    </div>
    
  </div>
        </section>
    </div>
  )
}
