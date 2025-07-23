import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap';
// import image from "https://maraviyainfotech.com/projects/carrot-tailwind/assets/img/logo/logo.png"

const New = () => {
  return (
    <div>
       <div>
    <div className="table">
      {/* <img
        src={image}
        alt="Carrot Logo"
      /> */}
      <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
    </div>
    </div>
    </div>
  )
}

export default New
