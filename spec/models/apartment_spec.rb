require "rails_helper"

RSpec.describe Apartment, type: :model do
    it "should validate user submitted a street" do
      apartment = Apartment.create
      expect(apartment.errors[:street]).to_not be_empty
    end
    it "should validate user submitted a city" do
        apartment = Apartment.create
        expect(apartment.errors[:city]).to_not be_empty
    end
    it "should validate user submitted a state" do
        apartment = Apartment.create
        expect(apartment.errors[:state]).to_not be_empty
    end 
    it "should validate user submitted a manager" do
        apartment = Apartment.create
        expect(apartment.errors[:manager]).to_not be_empty
    end
    it "should validate user submitted a email" do
        apartment = Apartment.create
        expect(apartment.errors[:email]).to_not be_empty
    end    
    it "should validate user submitted a price" do
        apartment = Apartment.create
        expect(apartment.errors[:price]).to_not be_empty
    end    
    it "should validate user submitted a bedrooms" do
        apartment = Apartment.create
        expect(apartment.errors[:bedrooms]).to_not be_empty
    end    
    it "should validate user submitted a bathrooms" do
        apartment = Apartment.create
        expect(apartment.errors[:bathrooms]).to_not be_empty
    end   
    it "should validate user submitted a pets" do
        apartment = Apartment.create
        expect(apartment.errors[:pets]).to_not be_empty
    end    
    it "should validate user submitted a image" do
        apartment = Apartment.create
        expect(apartment.errors[:image]).to_not be_empty
    end    
    it "should validate user submitted a user id" do
        apartment = Apartment.create
        expect(apartment.errors[:user_id]).to_not be_empty
    end    
end
