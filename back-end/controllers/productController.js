const Product = require('../model/productModel');

exports.getAllProducts = async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  
  exports.getProductById = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.json(product);
    } catch (error) {
      res.status(404).json({ error: 'Product not found' });
    }
  };


  exports.createProduct = async (req,res)=>{
   try {
    const {name,description, price } = req.body;
    const newProduct = new Product({name,description,price})
    await newProduct.save()
    res.status(201).json(newProduct)
    
   } catch (error) {
    res.status(500).json({error:error.message})
   }
  };


  exports.updateProduct = async (req, res) => {
    try {
      const { name, description, price } = req.body;
      await Product.findByIdAndUpdate(req.params.id, { name, description, price });
      res.json({ message: 'Product updated successfully' });
    } catch (error) {
      res.status(404).json({ error: 'Product not found' });
    }
  };

  
  exports.deleteProduct = async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(404).json({ error: 'Product not found' });
    }
  };