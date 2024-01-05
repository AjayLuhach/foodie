const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://foodie:foodie@localhost:27017/foodie', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {console.log('Connected to MongoDB');});

const bookingSchema = new mongoose.Schema({
    full_name: String,
    email_address: String,
    total_person: String,
    booking_date: Date,
    message: String,
  });
  
const Booking = mongoose.model('Booking', bookingSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/', (req, res) => {
    const data = { message: 'Hello from the server!' };
    res.json(data);
  });

// API endpoint to handle form submissions
app.post('/api/book-table', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: 'Booking successful!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

//Reserve a sit
app.post('/api/register', async (req, res) => {
  try {
    // Your MongoDB logic for user registration here
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Example endpoint to get all users
app.get('/api/users', async (req, res) => {
  try {
    // Your MongoDB logic to fetch users here
    res.status(200).json({ users: [] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
