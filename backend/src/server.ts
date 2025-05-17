import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createConnection } from 'mysql2/promise';
import initializeContactRoutes from './routes/contact';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'portfolio_db',
};

// Initialize database connection
const initializeDatabase = async () => {
  try {
    const connection = await createConnection(dbConfig);
    console.log('Database connected successfully');

    // Initialize routes
    app.use('/api/contact', initializeContactRoutes(connection));

    return connection;
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  initializeDatabase();
}); 