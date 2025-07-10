import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js'; // Assuming you have a product route defined in routes/product.route.js
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve(); // Get the current directory name

app.use(express.json()); // Middleware to parse JSON request bodies

app.use("/api/products", productRoutes);

if(process.env.NODE_ENV === 'production') {
  // Serve static files from the React app
  app.use(express.static(path.join(__dirname, 'Frontend', 'dist')));

  app.get('/{*any}', (req, res) => {
    res.sendFile(path.join(__dirname, 'Frontend', 'dist', 'index.html'));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log('Connected to MongoDB');
  console.log('Server is running on port', PORT);
});

//rUbJvsrh8ZLpBLLb

//mongodb+srv://shaswatgupta27:<db_password>@cluster0.ghfdb0o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0