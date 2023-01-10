require 'rails_helper'
RSpec.describe "Apartments", type: :request do
  describe "GET /index" do
    it "gets a list of apartments " do
    
      user = User.where(email: 'test@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')
      user.apartments.create(
        street: "123 Main St",
        city:"San Diego",
        state:"CA",
        manager:"Mr. Magoo",
        email:"magoo@example.com", 
        price:"2k", 
        bedrooms:2, 
        bathrooms:2, 
        pets:"cats only",
        image:"exampleimage.com", 
        user_id:1
      )
      # Make a request
      get '/apartments'
      apartments = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(apartments.length).to eq 1
    end
  end

  describe 'POST /create' do
    it "create an apartment" do
      user = User.where(email: 'test@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')
      apartment_params = {
        apartment: {
        street: "123 Main St",
        city:"San Diego",
        state:"CA",
        manager:"Mr. Magoo",
        email:"magoo@example.com", 
        price:"2k", 
        bedrooms:2, 
        bathrooms:2, 
        pets:"cats only",
        image:"exampleimage.com", 
        user_id: user.id
        }}
        post '/apartments', params: apartment_params
        expect(response).to have_http_status(200)
        apartment = Apartment.first
        expect(apartment.street).to eq "123 Main St"
      end
    

    it "doesn't create a apartment without a street, city, state, manager, email, price, bedrooms, bathrooms, pets, image, user id" do
      user = User.where(email: 'test@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')
      apartment_params = {
        apartment: {
        
        user_id: user.id
      }}
      post '/apartments', params: apartment_params
      expect(response.status).to eq(422)
      json = JSON.parse(response.body)
      expect(json['street']).to include "can't be blank"
    end
  end
end


  