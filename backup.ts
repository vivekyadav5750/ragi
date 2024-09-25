productId P002
relatedProductId RP005

product {
  productId: 'P002',
  productName: 'Dashmool Kaadha',
  category: 'Health Supplements',
  sku: 'DK001',
  price: 150,
  description: 'Dashmool Kadha is a traditional Ayurvedic formulation made from the roots of ten herbs. It is known for its rejuvenating and revitalizing properties, making it an excellent choice for boosting overall health and well-being.',
  stockStatus: 'In Stock',
  features: [ 'Ayurvedic formulation', 'Boosts immunity', 'Made from 10 herbs' ],
  weights: [ '250ml', '500ml' ],
  images: [
    '/images/dashmool_kadha.jpg',
    '/images/dashmool_kadha2.jpg',
    '/images/dashmool_kadha3.jpg'
  ],
  relatedProducts: [
    {
      productId: 'RP004',
      title: 'Dashmool Kaadha',
      img: '/images/ragi3.jpg',
      price: '₹110.00',
      description: 'Post pregnancy care lactation, pick and...'
    },
    {
      productId: 'RP005',
      title: 'Product 2',
      img: '/images/ragi_flour.jpg',
      price: '₹150.00',
      description: 'Product 2 description...'
    },
    {
      productId: 'RP006',
      title: 'Product 3',
      img: '/images/ragi1.jpg',
      price: '₹200.00',
      description: 'Product 3 description...'
    }
  ]
}
relatedProduct {
  productId: 'RP005',
  title: 'Product 2',
  img: '/images/ragi_flour.jpg',
  price: '₹150.00',
  description: 'Product 2 description...'
}