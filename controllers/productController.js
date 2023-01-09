import Product from "../models/Product.js";

// Menampilkan Semua Data Banner
export const getPeoducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
}

// Menampilkan Spesifik Data
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(404).json({ message: error.message});
  }
}

// Menyimpan Data
export const saveProducts = async (req, res) => {
  const product = new Product(req.body);
  try {
    const saveProduct = await product.save();
    res.status(201).json(saveProduct);
  } catch (error) {
    res.status(400).json({ message: error.message});
  }
}

// Mengubah Data
export const updateProducts = async (req, res) => {
  try {
    const updateProduct = await Product.updateOne({_id: req.params.id}, {$set: req.body});
    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(400).json({ message: error.message});
  }
}

// Menghapus Data 
export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.deleteOne({_id: req.params.id});
    res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message});
  }
}



