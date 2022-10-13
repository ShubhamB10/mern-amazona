import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Shubham",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Sasuke",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],

  products: [
    {
      //_id: "1",
      name: "Nike Slim Shirt",
      slug: "nikeslim-shirt",
      category: "Shirts",
      image: "/images/1.png",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "hight quality shirt",
    },
    {
      //_id: "2",
      name: "Addida Slim Shirt",
      slug: "addidas-shirt",
      category: "Shirts",
      image: "/images/2.png",
      price: 120,
      countInStock: 0,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "hight quality shirt",
    },
    {
      //_id: "3",
      name: "Puma Slim Shirt",
      slug: "puma-shirt",
      category: "Shirts",
      image: "/images/3.png",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "hight quality shirt",
    },
    {
      //_id: "4",
      name: "Yoga Slim Shirt",
      slug: "yoga-shirt",
      category: "Shirts",
      image: "/images/4.png",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "hight quality shirt",
    },
  ],
};
export default data;
