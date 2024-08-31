const product=require('../models/Product')

exports.getproductbyid = async (req, res) => {
    try {
        const { productid } = req.params;
     // Debugging log

        const products = await product.find({ _id:productid });
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
