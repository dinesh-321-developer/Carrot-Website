import React from 'react';
import {
  Navbar, Form, FormControl, Button,
  Dropdown, ButtonGroup, DropdownButton,
  Carousel,
  Col,
  Row,
} from 'react-bootstrap';
import '../Components/Edit.css';
import Slider1 from "../Assets/Slider1.png"

const VariantsExample = () => (
  <>
    {['Home','Catagory','Product','','Pages','Blogs'].map(variant => (
      <DropdownButton
        as={ButtonGroup}
        key={variant}
        id={`dropdown-${variant}`}
        variant={variant.toLowerCase()}
        title={variant}
        className="ms-2"
      >
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item active>Active Item</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Separated link</Dropdown.Item>
      </DropdownButton>
    ))}
  </>
);

const Edit = () => (
  <div className="box">
    <div className="table">
      <Navbar bg="light" className="justify-content-between px-3">
        <Form>
          <img
            src="https://maraviyainfotech.com/projects/carrot-tailwind/assets/img/logo/logo.png"
            alt="Carrot Logo"
            height="40"
          />
        </Form>
        <Form className="d-flex">
          <FormControl type="text" placeholder="Search" className="me-2" />
          <Button type="submit">Submit</Button>
          <Dropdown className="ms-2">
            <Dropdown.Toggle variant="success">
              Dropdown Button
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Action</Dropdown.Item>
              <Dropdown.Item>Another action</Dropdown.Item>
              <Dropdown.Item>Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form>
      </Navbar>

      <VariantsExample />

      <Carousel className="mt-4">
        {[
          {
            src: Slider1,
                        label: 'Second slide label',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZdMQGL5CTDbnbFjRou3viW9wfbtGmHLaZIDzuU7ocBK0Qsl0f',
            label: 'Second slide label',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
          {
            src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTOV8TtIqcBNoqtXD87YzgAsWJE-xz4nTDGvqs6ixY6X8GIHlms',
            label: 'Third slide label',
            text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
          },
        ].map((item, idx) => (
          <Carousel.Item key={idx} style={{ height: 400 }}>
            <img
              className="d-block w-100"
              src={item.src}
              alt={`${idx} slide`}
              style={{ objectFit: 'cover', height: '400px' }}
            />
            <Carousel.Caption>
              <h3>{item.label}</h3>
              <p>{item.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Row>
 <Col xs={1} sm={2} md={3} lg={3}>
      <div className=" gap-2 mt-4">
        {[
           
          ['cake & milk',65],
          ['fresh meat',30],
          ['vegetables',25],
          ['Apple & Mango',45],
          ['Strawberry',68],
        ].map(([name, count], idx) => (
          <div className="box3" key={idx}>
            {name} <br />({count} items)
          </div>
        ))}
        <div className="box3">View More</div>
      </div>
       </Col>
        <Col xs={1} sm={2} md={3} lg={9} style={{backgroundColor:"red"}}>
        <Row>
           <Col  xs={1} sm={2} md={3} lg={3}></Col>
           <div className='design'>
            <img src="https://maraviyainfotech.com/projects/carrot-tailwind/assets/img/categories/3.jpg" alt="" />
            <img src="https://maraviyainfotech.com/projects/carrot-tailwind/assets/img/categories/4.jpg" alt="" />
           </div>
        </Row>
        </Col>
       </Row>
    </div>
  </div>
);

export default Edit;
