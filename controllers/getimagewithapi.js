const axios = require('axios');

// Replace with your Unsplash Access Key
const UNSPLASH_ACCESS_KEY = '3cjCutGEj4C9t3omJO5afkG7LG9bld6JbWpYVHflswY';

exports.searchUnsplashPhotos=async(req, res) =>{
    const { query } = req.params;

    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required' });
    }

    try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: query,
                per_page: 10,
            },
            headers: {
                Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
            },
        });

        res.json({ results: response.data.results }); // Return the array of photo objects
    } catch (error) {
        console.error('Error fetching photos from Unsplash:', error.message);
        res.status(500).json({ error: 'Failed to fetch photos from Unsplash' });
    }
}


