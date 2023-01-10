import React from "react";
import { Card, CardTitle, CardBody, CardText, CardLink, ListGroup, ListGroupItem } from "reactstrap";
import { NavLink } from "react-router-dom"
import apartments from '../mockApartments'



const ApartmentIndex = () => {
  return (
  
    <>
      <h3>ApartmentIndex</h3>
        {apartments?.map((apartment, index) => {
          return (
          <Card
        key={index}
        style={{
          width: "18rem",
        }}
      >
        <img alt="Card" src={apartment.image} />
        <CardBody>
          <CardTitle tag="h5">
            {apartment.street}, {apartment.city}, {apartment.state}
          </CardTitle>
          <CardText>The manager is {apartment.manager}, and can be reached via email at {apartment.email}.</CardText>
        </CardBody>
        <ListGroup flush>
          <ListGroupItem>Current Listed Price ${apartment.price}</ListGroupItem>
          <ListGroupItem>Bedrooms: {apartment.bedrooms}, Bathrooms: {apartment.bathrooms}</ListGroupItem>
          <ListGroupItem>{apartment.pets}</ListGroupItem>
        </ListGroup>
        <CardBody>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Card Link</CardLink>
        </CardBody>
      </Card>
        )})}
    </>
  );
};

export default ApartmentIndex;
