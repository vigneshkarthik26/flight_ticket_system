/*const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Replace with your MongoDB connection string
const uri = 'your_mongodb_connection_string';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let flightsCollection;

client.connect(err => {
  if (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }

  const db = client.db('flightReservationDB');
  flightsCollection = db.collection('flights');
  console.log('Connected to MongoDB');
});

// Define a route to search flights
app.post('/search-flights', async (req, res) => {
  try {
    const { from, to, departureDate, returnDate, passengers, class: travelClass } = req.body;

    const query = {
      from,
      to,
      departureDate: new Date(departureDate),
      returnDate: new Date(returnDate),
      passengers: parseInt(passengers),
      class: travelClass
    };

    const flights = await flightsCollection.find(query).toArray();
    res.json(flights);
  } catch (error) {
    console.error('Error searching flights', error);
    res.status(500).send('Internal Server Error');
  }
});

// Route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Searchflights.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
*/
/*const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/flight-reservation-system', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
const userRoutes = require('./Routes/userRoutes');
const flightRoutes = require('./Routes/flightRoutes');
const reservationRoutes = require('./Routes/reservationRoutes');
const paymentRoutes = require('./Routes/paymentRoutes');

app.use('/api/users', userRoutes);
app.use('/api/flights', flightRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/payments', paymentRoutes);

// Serve HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
*/
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/flight-reservation-system')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
const userRoutes = require('./Routes/userRoutes');
const flightRoutes = require('./Routes/flightRoutes');
const reservationRoutes = require('./Routes/reservationRoutes');
const paymentRoutes = require('./Routes/paymentRoutes');

app.use('/api/users', userRoutes);
app.use('/api/flights', flightRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/payments', paymentRoutes);

// Serve HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5001;  // Changed port number
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
