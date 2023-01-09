import express from "express";
import { getPeoducts, getProductById, saveProducts, updateProducts, deleteProduct } from "../controllers/productController.js";

const router = express.Router();

router.get('/', getPeoducts);
router.get('/:id', getProductById);

router.post('/', saveProducts);
router.patch('/:id', updateProducts);
router.delete('/:id', deleteProduct);

export default router;
