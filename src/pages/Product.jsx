import Hero from "../components/product/Hero";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {faker} from "@faker-js/faker";
import productImage1 from "../assets/productimages/product1.jpg";
import modelImage1 from "../assets/productimages/model1.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Product = () => {
    const {id: productId} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        let price = faker.commerce.price({min: 500})

        const temp = {
            id: faker.database.mongodbObjectId(),
            name: faker.commerce.product(),
            originalPrice: price,
            offerPrice: faker.commerce.price({min: price - 100, max: +price}),
            image1: productImage1,
            image2: modelImage1,
            quantity: faker.commerce.price({min: 100, max: 990}) + "ml",
            shortDescription: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            rating: faker.number.int({min: 1, max: 5}),
            reviewCount: faker.number.int({min: 1, max:10000}),
            maxQuantity: faker.number.int({min:1, max:100})
        }

        setProduct(temp);
    }, [productId]);

    return <>
        <Navbar/>

        <Hero product={product}/>

        <Footer/>
    </>
}

export default Product;