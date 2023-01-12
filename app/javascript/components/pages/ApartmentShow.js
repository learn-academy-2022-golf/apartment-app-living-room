import React from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
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

const ApartmentShow = ({ apartments, deleteApartment, current_user }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(apartments);

  const currentApartment = apartments?.find(
    (apartment) => apartment.id === +id
  );
  console.log(currentApartment);
  const handleSubmit = () => {
    deleteApartment(currentApartment.id);
    navigate(`/apartmentindex`);
  };

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
            <Button>Back to Apartments</Button>
          </NavLink>

          {currentApartment.user_id === current_user.id && (
            <>
              <NavLink
                to={`/apartmentedit/${currentApartment.id}`}
                className="nav-link"
              >
                <Button>Update Apartment</Button>
              </NavLink>
              <Button onClick={handleSubmit}>Delete Apartment</Button>
            </>
          )}
        </CardBody>
      </Card>
    </>
  );
};

export default ApartmentShow;
