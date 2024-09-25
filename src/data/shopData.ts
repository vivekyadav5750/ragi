interface Product {
  productId: string;
  productName: string;
  category: string;
  sku: string;
  price: number;
  description: string;
  stockStatus: string;
  features: string[];
  weights: string[];
  images: string[];
  relatedProducts: RelatedProduct[];
}

interface RelatedProduct {
  productId: string;
  title: string;
  img: string[];
  price: string;
  description: string;
}

const shopData: Product[] = [
  // Product 1
  {
    productId: "P001",
    productName: "Ragi Cookies",
    category: "Snacks",
    sku: "C001",
    price: 110,
    description:
      "Ragi cookies are a healthy and tasty snack option made from ragi flour. They are rich in fiber, protein, and other essential nutrients, making them a great choice for those looking for a nutritious snack.",
    stockStatus: "In Stock",
    features: [
      "Rich in fiber",
      "High in protein",
      "No artificial ingredients",
      "Homemade quality"
    ],
    weights: ["250g", "500g"],
    images: [
      "/images/ragi_cookies.jpg"
      // "/images/ragi_flour.jpg",
      // "/images/ragi3.jpg"
    ],
    relatedProducts: [
      {
        productId: "RP001",
        title: "Dashmool Kaadha",
        img: [
          "/images/ragi_cookies.jpg",
          "/images/ragi_cookies.jpg",
          "/images/ragi_cookies.jpg"
        ],
        price: "₹110.00",
        description: "Post pregnancy care lactation, pick and..."
      },
      {
        productId: "RP002",
        title: "Product 2",
        img: [
          "/images/ragi_flour.jpg",
          "/images/ragi_flour.jpg",
          "/images/ragi_flour.jpg"
        ],
        price: "₹150.00",
        description: "Product 2 description..."
      },
      {
        productId: "RP003",
        title: "Product 3",
        img: ["/images/ragi1.jpg", "/images/ragi1.jpg", "/images/ragi1.jpg"],
        price: "₹200.00",
        description: "Product 3 description..."
      }
    ]
  },

  // Product 2 Flour
  {
    productId: "P002",
    productName: "Ragi Flour",
    category: "Health Supplements",
    sku: "DK001",
    price: 150,
    description:
      "Ragi flour is a gluten-free flour that is rich in fiber and protein. It is a great alternative to wheat flour for those who are gluten intolerant or have celiac disease.",
    stockStatus: "In Stock",
    features: [
      "Ayurvedic formulation",
      "Boosts immunity",
      "Made from 10 herbs"
    ],
    weights: ["250ml", "500ml"],
    images: [
      "/images/ragi_flour.jpg"
      // "/images/dashmool_kadha2.jpg",
      // "/images/dashmool_kadha3.jpg"
    ],
    relatedProducts: [
      {
        productId: "RP004",
        title: "Dashmool Kaadha",
        img: ["/images/ragi3.jpg", "/images/ragi3.jpg", "/images/ragi3.jpg"],
        price: "₹110.00",
        description: "Post pregnancy care lactation, pick and..."
      },
      {
        productId: "RP005",
        title: "Product 2",
        img: [
          "/images/ragi_flour.jpg",
          "/images/ragi_flour.jpg",
          "/images/ragi_flour.jpg"
        ],
        price: "₹150.00",
        description: "Product 2 description..."
      },
      {
        productId: "RP006",
        title: "Product 3",
        img: ["/images/ragi1.jpg", "/images/ragi1.jpg", "/images/ragi1.jpg"],
        price: "₹200.00",
        description: "Product 3 description..."
      }
    ]
  },

  // Product 3 - Example of another format Ladoo
  {
    productId: "P003",
    productName: "Ragi Ladoo",
    category: "Sweets",
    sku: "GL101",
    price: 1400,
    description:
      "Ragi Ladoo is a healthy and delicious breakfast option made from ragi flour. It is rich in fiber, protein, and other essential nutrients, making it a nutritious choice for breakfast or as a snack.",
    // "Gond laddoos are a popular post-pregnancy treat in India, known for their numerous health benefits. Made with gond (edible gum) and a blend of nourishing ingredients, these laddoos can help reduce back pain and joint pain.",
    stockStatus: "In Stock",
    features: [
      "Made with premium ingredients",
      "Finest Indian Sweet",
      "Pure Desi Ghee",
      "Indian Mithai",
      "Home Made Special"
    ],
    weights: ["500g", "1 Kg"],
    images: [
      "/images/ragi_laddu_3.jpg"
      // "/images/gond_laddoo2.jpg",
      // "/images/gond_laddoo3.jpg"
    ],
    relatedProducts: [
      {
        productId: "RP007",
        title: "Product 1",
        img: ["/images/ragi2.jpg", "/images/ragi3.jpg", "/images/ragi1.jpg"],
        price: "₹110.00",
        description: "Post pregnancy care lactation, pick and..."
      },
      {
        productId: "RP008",
        title: "Product 2",
        img: ["/images/ragi2.jpg", "/images/ragi3.jpg", "/images/ragi1.jpg"],
        price: "₹150.00",
        description: "Product 2 description..."
      },
      {
        productId: "RP009",
        title: "Product 3",
        img: ["/images/ragi2.jpg", "/images/ragi2.jpg", "/images/ragi2.jpg"],
        price: "₹200.00",
        description: "Product 3 description..."
      }
    ]
  },
  // Product 4 - Cake
  {
    productId: "P004",
    productName: "Ragi Cake",
    category: "Sweets",
    sku: "GL101",
    price: 1400,
    description:
      "Ragi idli is a healthy and delicious breakfast option made from ragi flour. It is rich in fiber, protein, and other essential nutrients, making it a nutritious choice for breakfast or as a snack.",
    stockStatus: "In Stock",
    features: [
      "Made with premium ingredients",
      "Finest Indian Sweet",
      "Pure Desi Ghee",
      "Indian Mithai",
      "Home Made Special"
    ],
    weights: ["500g", "1 Kg"],
    images: [
      "/images/ragi_cake.jpg",
      "/images/gond_laddoo2.jpg",
      "/images/gond_laddoo3.jpg"
    ],
    relatedProducts: [
      {
        productId: "RP010",
        title: "Product 1",
        img: ["/images/ragi2.jpg", "/images/ragi3.jpg", "/images/ragi1.jpg"],
        price: "₹110.00",
        description: "Post pregnancy care lactation, pick and..."
      },
      {
        productId: "RP011",
        title: "Product 2",
        img: ["/images/ragi2.jpg", "/images/ragi3.jpg", "/images/ragi1.jpg"],
        price: "₹150.00",
        description: "Product 2 description..."
      },
      {
        productId: "RP012",
        title: "Product 3",
        img: ["/images/ragi2.jpg", "/images/ragi2.jpg", "/images/ragi2.jpg"],
        price: "₹200.00",
        description: "Product 3 description..."
      }
    ]
  },
  // Product 5  - Namkeen
  {
    productId: "P005",
    productName: "Ragi Namkeen",
    category: "Snacks",
    sku: "GL101",
    price: 1400,
    description:
      "ragi namkeen is a healthy and delicious breakfast option made from ragi flour. It is rich in fiber, protein, and other essential nutrients, making it a nutritious choice for breakfast or as a snack.",
    // "Gond laddoos are a popular post-pregnancy treat in India, known for their numerous health benefits. Made with gond (edible gum) and a blend of nourishing ingredients, these laddoos can help reduce back pain and joint pain.",
    stockStatus: "In Stock",
    features: [
      "Made with premium ingredients",
      "Finest Indian Sweet",
      "Pure Desi Ghee",
      "Indian Mithai",
      "Home Made Special"
    ],
    weights: ["500g", "1 Kg"],
    images: [
      "/images/ragi3.jpg",
      "/images/gond_laddoo2.jpg",
      "/images/gond_laddoo3.jpg"
    ],
    relatedProducts: [
      {
        productId: "RP013",
        title: "Product 1",
        img: ["/images/ragi2.jpg", "/images/ragi3.jpg", "/images/ragi1.jpg"],
        price: "₹110.00",
        description: "Post pregnancy care lactation, pick and..."
      },
      {
        productId: "RP014",
        title: "Product 2",
        img: ["/images/ragi2.jpg", "/images/ragi3.jpg", "/images/ragi1.jpg"],
        price: "₹150.00",
        description: "Product 2 description..."
      },
      {
        productId: "RP015",
        title: "Product 3",
        img: ["/images/ragi2.jpg", "/images/ragi2.jpg", "/images/ragi2.jpg"],
        price: "₹200.00",
        description: "Product 3 description..."
      }
    ]
  }
];

export default shopData;
