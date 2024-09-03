import express from 'express';

const app = express();


app.get('/api/products', (req,res) => {
    const products = [
        {
            id: 1,
            name: 'table wooden',
            price: 200,
            image: 'https://images.pexels.com/photos/27547456/pexels-photo-27547456/free-photo-of-clouds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }, { 
            id: 2,
            name: 'table glass',
            price: 200,
            image: 'https://images.pexels.com/photos/27547456/pexels-photo-27547456/free-photo-of-clouds.jpeg?    auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }, { 
            id: 3,
            name: 'table plastic',
            price: 200,
            image: 'https://images.pexels.com/photos/27547456/pexels-photo-27547456/free-photo-of-clouds.jpeg?    auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },  { 
            id: 4,
            name: 'table paper',
            price: 200,
            image: 'https://images.pexels.com/photos/27547456/pexels-photo-27547456/free-photo-of-clouds.jpeg?    auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
    ]

    http://localhost:9000/api/products?search=wooden

    if(req.query.search) {
        const filterProducts = products.filter(products => products.name.includes(req.query.search))
        res.send(filterProducts);
        return;

    }
    
    setTimeout(() => {
        res.send(products);

    }, 3000);
})



const port = process.env.PORT || 9000;

app.listen(port, () => {
 console.log(`Server running on port ${port}`);
});