require "rails_helper"

RSpec.describe Apartment, type: :model do
    it "should validate all necessary attributes to ensure the user submits a street, city, state, manager, email, price, bedrooms, bathrooms, pets, image, and user id." do
      apartment = Apartment.create
      expect(apartment.errors[:street]).to_not be_empty
      expect(apartment.errors[:city]).to_not be_empty
      expect(apartment.errors[:state]).to_not be_empty
      expect(apartment.errors[:manager]).to_not be_empty
      expect(apartment.errors[:email]).to_not be_empty
      expect(apartment.errors[:price]).to_not be_empty
      expect(apartment.errors[:bedrooms]).to_not be_empty
      expect(apartment.errors[:bathrooms]).to_not be_empty
      expect(apartment.errors[:pets]).to_not be_empty
      expect(apartment.errors[:image]).to_not be_empty
      expect(apartment.errors[:user_id]).to_not be_empty
    end
    

end
