const { MongoClient } = require('mongodb');

async function updateSimilarProducts() {
    const uri = 'mongodb+srv://pusha:pusha123@cluster.zit8svr.mongodb.net/';
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db('Recommerce');
        const productsCollection = db.collection('products');

        // Fetch all products
        const products = await productsCollection.find({}, { projection: { _id: 1, name: 1 } }).toArray();

        // Create a mapping of product IDs to similar product IDs
        const similarProductsMap = {};

        // For this example, let's assume you already have similar product IDs (for demonstration)
        products.forEach(product => {
            // Simulate similar products (this should be replaced with your actual logic)
            similarProductsMap[product._id.toString()] = []; // Populate with actual similar product IDs
        });

        // Update each product with similar_prods field
        for (const product of products) {
            await productsCollection.updateOne(
                { _id: product._id },
                { $set: { similar_prods: similarProductsMap[product._id.toString()] || [] } }
            );
        }

        console.log('Update completed');
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await client.close();
    }
}

updateSimilarProducts().catch(console.error);
