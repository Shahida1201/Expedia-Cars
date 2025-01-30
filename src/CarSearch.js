import React, { useState } from "react";
import CarList from "./CarList";

// Hardcoded data for locations, cars, and dates
const locations = ["New York", "Los Angeles", "Miami", "Chicago"];
const cars = [
  { id: 1, name: "Toyota Camry", price: 50, location: "New York" },
  { id: 2, name: "Honda Civic", price: 40, location: "Los Angeles" },
  { id: 3, name: "Ford Mustang", price: 80, location: "Miami" },
];

const CarSearch = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [filteredCars, setFilteredCars] = useState(cars);

  const handleSearch = () => {
    const filtered = cars.filter((car) =>
      selectedLocation ? car.location === selectedLocation : true
    );
    setFilteredCars(filtered);
  };

  return (
    <div className="car-search">
      <label htmlFor="location">Location:</label>
      <select
        id="location"
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
      >
        <option value="">Select a location</option>
        {locations.map((location, index) => (
          <option key={index} value={location}>
            {location}
          </option>
        ))}
      </select>

      <label htmlFor="date"> Pick-up Date: </label>
      <input
        type="date"
        id="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />

      <button onClick={handleSearch} style={{ marginTop: "10px" }}>
        Search Cars
      </button>

      <div style={{ marginTop: "20px" }}>
        <CarList cars={filteredCars} />
      </div>
    </div>
  );
};

export default CarSearch;
