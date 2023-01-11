import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";

const ApartmentEdit = ({ apartments, updateApartment, logged_in, current_user }) => {
  console.log(apartments)
  const navigate = useNavigate();
  const { id } = useParams();
  const currentApartment = apartments?.find((apartment) => apartment.id === +id)
  console.log(currentApartment)
  const [editApartment, setEditApartment] = useState({
    street: currentApartment.street,
    city: currentApartment.city,
    state: currentApartment.state,
    manager: currentApartment.manager,
    email: currentApartment.email,
    price: currentApartment.price,
    bedrooms: currentApartment.bedrooms,
    bathrooms: currentApartment.bathrooms,
    pets: currentApartment.pets,
    image: currentApartment.image,
    user_id: currentApartment.user_id
  });

  const handleChange = (e) => {
    setEditApartment({ ...editApartment, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    updateApartment(editApartment, id)
    navigate(`/apartmentshow/${id}`)
  }
  if (logged_in === true) {
    return (
      <Form className="updateForm">
        <h3>Update Apartment</h3> 
        <FormGroup>
          <Label for="street">Street</Label>
          <Input
            type="text"
            name="street"
            onChange={handleChange}
            value={editApartment.street} />
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input
            type="text"
            name="city"
            onChange={handleChange}
            value={editApartment.city}/>
        </FormGroup>
        <FormGroup>
          <Label for="state">State</Label>
          <Input
            type="text"
            name="state"
            onChange={handleChange}
            value={editApartment.state}/>        
        </FormGroup>
        <FormGroup>
          <Label for="manager">Manager</Label>
          <Input
            type="text"
            name="manager"
            onChange={handleChange}
            value={editApartment.manager}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="text"
            name="email"
            onChange={handleChange}
            value={editApartment.email}
          />
        </FormGroup>
        <FormGroup>
          <Label for="bedrooms">Bedrooms</Label>
          <Input
            type="number"
            name="bedrooms"
            onChange={handleChange}
            value={editApartment.bedrooms}
          />
        </FormGroup>
        <FormGroup>
          <Label for="bathrooms">Bathrooms</Label>
          <Input
            type="number"
            name="bathrooms"
            onChange={handleChange}
            value={editApartment.bathrooms}
          />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input
            type="text"
            name="price"
            onChange={handleChange}
            value={editApartment.price}
          />
        </FormGroup>
        <FormGroup>
          <Label for="pets">Pets</Label>
          <Input
            type="text"
            name="pets"
            onChange={handleChange}
            value={editApartment.pets}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image URL</Label>
          <Input
            type="url"
            name="image"
            onChange={handleChange}
            value={editApartment.image}
          />
        </FormGroup>
        <Button onClick={handleSubmit} name="update">
          Submit Updated Apartment
        </Button>
      </Form>
    )
  } else {
    return (<h1>Can't update apartments without signing in</h1>)
  }
}

export default ApartmentEdit
