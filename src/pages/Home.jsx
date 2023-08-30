import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import {useState, useEffect} from "react";
import productImage1 from "../assets/productimages/product1.jpg"
import productImage2 from "../assets/productimages/product2.jpg"
import productImage3 from "../assets/productimages/product3.jpg"
import modelImage1 from "../assets/productimages/model1.jpg"
import modelImage2 from "../assets/productimages/model2.jpg"
import modelImage3 from "../assets/productimages/model3.jpg"
import { faker } from '@faker-js/faker';


const Home = () => {
    const [carouselImages, setCarouselImages] = useState([]);
    const [bestSellers, setBestSellers] = useState([]);
    const [facewashes, setFacewashes] = useState([]);
    const [faceserum, setFaceSerum] = useState([]);

    useEffect(() => {
        // get carousel images
        setCarouselImages(Array(5).fill("https://unsplash.it/1920/1080"));
    }, []);

    useEffect(() => {
        let products = [];

        for (let i = 0; i < 10; i++){
            let price = faker.commerce.price({min: 500})

            let product =  {
                id: faker.database.mongodbObjectId(),
                name: faker.commerce.product(),
                originalPrice: price,
                offerPrice: faker.commerce.price({min: price - 100, max: +price}),
                image1: productImage1,
                image2: modelImage1
            };

            products.push(product);
        }

        setBestSellers(products);
    }, []);

    useEffect(() => {
        let products = [];

        for (let i = 0; i < 10; i++){
            let price = faker.commerce.price({min: 500})

            let product =  {
                id: faker.database.mongodbObjectId(),
                name: faker.commerce.product(),
                originalPrice: price,
                offerPrice: faker.commerce.price({min: price - 100, max: +price}),
                image1: productImage2,
                image2: modelImage2
            };

            products.push(product);
        }

        setFacewashes(products);
    }, []);

    useEffect(() => {
        let products = [];

        for (let i = 0; i < 10; i++){
            let price = faker.commerce.price({min: 500})

            let product =  {
                id: faker.database.mongodbObjectId(),
                name: faker.commerce.product(),
                originalPrice: price,
                offerPrice: faker.commerce.price({min: price - 100, max: +price}),
                image1: productImage3,
                image2: modelImage3
            };

            products.push(product);
        }

        setFaceSerum(products);
    }, []);

  return (
    <>
      <Navbar />
      <Hero images={carouselImages}/>
        <ProductList heading="Best Sellers" products={bestSellers}/>
        <ProductList heading="Facewashes" products={facewashes} columns={3}/>
        <ProductList heading="Face Serum" products={faceserum} columns={3}/>
      <Footer />
    </>
  );
};

export default Home;
