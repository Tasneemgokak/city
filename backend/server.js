const express = require('express');
const cors = require('cors');
require('./config/db');

const reportRoutes = require('./routes/reportRoute');
const feedbackRoutes = require('./routes/feedbackRoutes');
const complaintRoutes = require('./routes/complaintRoute');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));
app.use('/uploads', express.static('uploads'));

// Route Mounting
app.use('/api/reports', reportRoutes);      
app.use('/api/feedbacks', feedbackRoutes); 
app.use('/api/complaints', complaintRoutes); 
app.use('/api/admin', adminRoutes);

// Check if server is running
app.get('/', (req, res) => {
  res.send('Backend is running. Try POSTing to /api/reports');
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
