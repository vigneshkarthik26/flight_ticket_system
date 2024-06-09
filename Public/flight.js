document.addEventListener('DOMContentLoaded', () => {
    loadFlights();
  });
  
  const loadFlights = () => {
    axios.get('http://localhost:5001/api/flights')
      .then(response => {
        const flightsDiv = document.getElementById('flights');
        flightsDiv.innerHTML = '';
        response.data.forEach(flight => {
          const flightElement = document.createElement('div');
          flightElement.className = 'flight';
          flightElement.innerHTML = `
            <p>Flight Number: ${flight.flight_number}</p>
            <p>Airline: ${flight.airline}</p>
            <p>Origin: ${flight.origin.city}</p>
            <p>Destination: ${flight.destination.city}</p>
            <p>Departure Time: ${new Date(flight.departure_time).toLocaleString()}</p>
            <p>Arrival Time: ${new Date(flight.arrival_time).toLocaleString()}</p>
            <p>Duration: ${flight.duration} minutes</p>
            <p>Price: $${flight.price}</p>
            <p>Seats Available: ${flight.seats_available}</p>
            <button onclick="deleteFlight('${flight._id}')">Delete</button>
          `;
          flightsDiv.appendChild(flightElement);
        });
      })
      .catch(error => {
        console.error('There was an error fetching the flights!', error);
      });
  };
  
  const addFlight = (event) => {
    event.preventDefault();
    const flightData = {
      flight_number: document.getElementById('flightNumber').value,
      airline: document.getElementById('airline').value,
      origin: { city: document.getElementById('origin').value },
      destination: { city: document.getElementById('destination').value },
      departure_time: new Date(document.getElementById('departureTime').value).toISOString(),
      arrival_time: new Date(document.getElementById('arrivalTime').value).toISOString(),
      duration: parseInt(document.getElementById('duration').value),
      price: parseFloat(document.getElementById('price').value),
      seats_available: parseInt(document.getElementById('seatsAvailable').value)
    };
  
    axios.post('http://localhost:5001/api/flights', flightData)
      .then(response => {
        loadFlights();
        document.getElementById('add-flight-form').reset();
      })
      .catch(error => {
        console.error('There was an error adding the flight!', error);
      });
  };
  
  const deleteFlight = (id) => {
    axios.delete(`http://localhost:5001/api/flights/${id}`)
      .then(response => {
        loadFlights();
      })
      .catch(error => {
        console.error('There was an error deleting the flight!', error);
      });
  };
  