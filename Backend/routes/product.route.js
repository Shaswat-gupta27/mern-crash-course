import express from 'express';
import { postProduct, deleteProduct, getProductById, getAllProducts, updateProduct } from '../controllers/product.controllers.js';

const router = express.Router();

router.post('/', postProduct);

router.delete('/:id', deleteProduct);

router.get('/:id', getProductById);

router.get('/', getAllProducts);

router.put('/:id', updateProduct);

export default router;
