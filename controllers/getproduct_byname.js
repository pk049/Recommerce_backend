const product =require('../models/Product')



exports.getproduct_byname = async (req, res) => {
    try {
        const { productname } = req.params;
     // Debugging log

        const products = await product.find({ name:productname});
        console.log('Found products:', products); // Debugging log

       
        res.status(200).json({
            status: 'success',
            data: products
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};
