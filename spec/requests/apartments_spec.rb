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
end