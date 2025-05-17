import express from 'express';
import { Connection } from 'mysql2/promise';

const router = express.Router();

interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const initializeContactRoutes = (connection: Connection) => {
  // Create contact messages table if it doesn't exist
  const createTable = async () => {
    try {
      await connection.execute(`
        CREATE TABLE IF NOT EXISTS contact_messages (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          subject VARCHAR(255) NOT NULL,
          message TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);
      console.log('Contact messages table created or already exists');
    } catch (error) {
      console.error('Error creating contact messages table:', error);
    }
  };

  createTable();

  // Handle contact form submissions
  router.post('/', async (req, res) => {
    try {
      const { name, email, subject, message }: ContactMessage = req.body;

      // Validate input
      if (!name || !email || !subject || !message) {
        return res.status(400).json({
          error: 'All fields are required',
        });
      }

      // Store message in database
      await connection.execute(
        'INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)',
        [name, email, subject, message]
      );

      // In a real application, you might want to:
      // 1. Send an email notification
      // 2. Add rate limiting
      // 3. Add spam protection
      // 4. Add email validation

      res.status(201).json({
        message: 'Message sent successfully',
      });
    } catch (error) {
      console.error('Error saving contact message:', error);
      res.status(500).json({
        error: 'Failed to send message',
      });
    }
  });

  return router;
};

export default initializeContactRoutes; 