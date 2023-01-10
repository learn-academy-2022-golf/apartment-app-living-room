import React from "react";
import { Card, CardTitle, CardBody, CardText, CardLink, ListGroup, ListGroupItem } from "reactstrap";
import { NavLink } from "react-router-dom"



const ProtectedIndex = ({apartments, current_user}) => {
      console.log(current_user) 
      const current_user_apts = apartments?.filter(apartment => {
        return apartment.user_id === current_user.id 
    
      }) 
  return (

    <>
      <h3>CurrentApartmentIndex</h3>
        {current_user_apts?.map((apartment, index) => {
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
            {apartment.street}
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

export default ProtectedIndex;