// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Sample user data for login
const users = [
  { id: 1, email: 'user@example.com' },
  // Add more user data as needed
];

// Authentication endpoint
app.post('/api/login', (req, res) => {
  const { email } = req.body;

  // Simple authentication logic (you should use a proper authentication method in a real app)
  const user = users.find((u) => u.email === email);

  if (user) {
    res.json({ success: true, user });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Sample data for alerts and notifications
let alerts = [
  { id: 1, title: 'Alert 1' },
  // Add more alert data as needed
];

let notifications = [
  { id: 1, message: 'Notification 1' },
  // Add more notification data as needed
];

// Get all alerts
app.get('/api/alerts', (req, res) => {
  res.json(alerts);
});

// Get all notifications
app.get('/api/notifications', (req, res) => {
  res.json(notifications);
});

// Delete an alert
app.delete('/api/alerts/:id', (req, res) => {
  const alertId = parseInt(req.params.id);
  alerts = alerts.filter((alert) => alert.id !== alertId);
  res.json({ success: true, message: 'Alert deleted successfully' });
});

// Logout endpoint
app.delete('/api/logout', (req, res) => {
  // Perform logout logic here
  res.json({ success: true, message: 'Logout successful' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
