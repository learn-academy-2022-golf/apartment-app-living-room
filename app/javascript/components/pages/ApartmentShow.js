import React from "react";
import { useParams, NavLink } from "react-router-dom";
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  CardLink,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";
import apartments from "../mockApartments";


const ApartmentShow = ({ }) => {
  const { id } = useParams();
    // console.log(currentApartment);
    // console.log(apartments);
  const currentApartment = apartments[id - 1]

    

  return (
    <>
      <h3>ApartmentShow</h3>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Card" src={currentApartment.image} />
        <CardBody>
          <CardTitle tag="h5">
            {currentApartment.street}, {currentApartment.city},
            {currentApartment.state}
          </CardTitle>
          <CardText>
            The manager is {currentApartment.manager}, and can be reached via
            email at {currentApartment.email}.
          </CardText>
        </CardBody>
        <ListGroup flush>
          <ListGroupItem>
            Current Listed Price ${currentApartment.price}
          </ListGroupItem>
          <ListGroupItem>
            Bedrooms: {currentApartment.bedrooms}, Bathrooms:{" "}
            {currentApartment.bathrooms}
          </ListGroupItem>
          <ListGroupItem>Pets allowed: {currentApartment.pets}</ListGroupItem>
        </ListGroup>
        <CardBody>
          <NavLink to="/apartmentindex" className="nav-link">
            Back to Apartments
          </NavLink>
        </CardBody>
      </Card>
    </>
  );
};

export default ApartmentShow;
