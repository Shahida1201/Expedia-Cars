import React from 'react';

const CarList = ({ cars }) => {
  return (
    <div className="car-list">
      {cars.length > 0 ? (
        cars.map((car) => (
          <div key={car.id} className="car-item">
            <h3>{car.name}</h3>
            <p>Price per day: ${car.price}</p>
            <p>Location: {car.location}</p>
          </div>
        ))
      ) : (
        <p>No cars available for your selection.</p>
      )}
    </div>
  );
};

export default CarList;
