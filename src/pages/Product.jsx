import Hero from "../components/product/Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import modelImage1 from "../assets/productimages/model1.jpg";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import productImage1 from "../assets/productimages/product1.jpg";
import productImage2 from "../assets/productimages/product2.jpg";
import productImage3 from "../assets/productimages/product3.jpg";
import Features from "../components/product/Features";
import ProductList from "../components/ProductList";
import modelImage3 from "../assets/productimages/model3.jpg";
import Reviews from "../components/product/Reviews";

const Product = () => {
    const { id: productId } = useParams();

    const [product, setProduct] = useState({});
    const [review, setReview] = useState({});
    const [recommended, setRecommended] = useState([]);

    useEffect(() => {
        let price = faker.commerce.price({ min: 500 });

        const temp = {
            id: faker.database.mongodbObjectId(),
            name: faker.commerce.product(),
            originalPrice: price,
            offerPrice: faker.commerce.price({ min: price - 100, max: +price }),
            image1: productImage1,
            image2: modelImage1,
            quantity: faker.commerce.price({ min: 100, max: 990 }) + "ml",
            shortDescription: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            rating: faker.number.int({ min: 1, max: 5 }),
            reviewCount: faker.number.int({ min: 1, max: 10000 }),
            maxQuantity: faker.number.int({ min: 1, max: 100 }),
            images: [productImage1, productImage2, productImage3],
            features: [
                {
                    heading: faker.lorem.words({ min: 1, max: 4 }),
                    description: faker.lorem.paragraph({ min: 1, max: 3 }),
                },
                {
                    heading: faker.lorem.words({ min: 1, max: 4 }),
                    description: faker.lorem.paragraph({ min: 1, max: 3 }),
                },
                {
                    heading: faker.lorem.words({ min: 1, max: 4 }),
                    description: faker.lorem.paragraph({ min: 1, max: 3 }),
                },
            ],
        };

        setProduct(temp);
    }, [productId]);

    useEffect(() => {
        let star1_count = faker.number.int({ min: 0, max: 1000 });
        let star2_count = faker.number.int({ min: 0, max: 1000 });
        let star3_count = faker.number.int({ min: 0, max: 1000 });
        let star4_count = faker.number.int({ min: 0, max: 1000 });
        let star5_count = faker.number.int({ min: 0, max: 1000 });

        let totalReviews =
            star1_count + star2_count + star3_count + star4_count + star5_count;

        const temp = {
            rating: parseInt(
                (star1_count +
                    2 * star2_count +
                    3 * star3_count +
                    4 * star4_count +
                    5 * star5_count) /
                    totalReviews
            ),
            reviewCount: totalReviews,
            star1_count: star1_count,
            star2_count: star2_count,
            star3_count: star3_count,
            star4_count: star4_count,
            star5_count: star5_count,
            reviews: [
                {
                    userName: faker.internet.displayName(),
                    rating: faker.number.int({ min: 1, max: 5 }),
                    heading: faker.lorem.words({ min: 4, max: 10 }),
                    description: faker.lorem.paragraph({ min: 4, max: 10 }),
                },
                {
                    userName: faker.internet.displayName(),
                    rating: faker.number.int({ min: 1, max: 5 }),
                    heading: faker.lorem.words({ min: 4, max: 10 }),
                    description: faker.lorem.paragraph({ min: 4, max: 10 }),
                },
                {
                    userName: faker.internet.displayName(),
                    rating: faker.number.int({ min: 1, max: 5 }),
                    heading: faker.lorem.words({ min: 4, max: 10 }),
                    description: faker.lorem.paragraph({ min: 4, max: 10 }),
                },
                {
                    userName: faker.internet.displayName(),
                    rating: faker.number.int({ min: 1, max: 5 }),
                    heading: faker.lorem.words({ min: 4, max: 10 }),
                    description: faker.lorem.paragraph({ min: 4, max: 10 }),
                },
                {
                    userName: faker.internet.displayName(),
                    rating: faker.number.int({ min: 1, max: 5 }),
                    heading: faker.lorem.words({ min: 4, max: 10 }),
                    description: faker.lorem.paragraph({ min: 4, max: 10 }),
                },
            ],
        };

        setReview(temp);
    }, [productId]);

    useEffect(() => {
        let products = [];

        for (let i = 0; i < 5; i++) {
            let price = faker.commerce.price({ min: 500 });

            let product = {
                id: faker.database.mongodbObjectId(),
                name: faker.commerce.product(),
                originalPrice: price,
                offerPrice: faker.commerce.price({
                    min: price - 100,
                    max: +price,
                }),
                image1: productImage3,
                image2: modelImage3,
            };

            products.push(product);
        }

        setRecommended(products);
    }, [productId]);

    return (
        <>
            <Navbar />

            <Hero product={product} />
            <Features features={product.features} />
            <Reviews review={review} />

            <ProductList
                heading="Recommendations"
                products={recommended}
                columns={5}
            />

            <Footer />
        </>
    );
};

export default Product;
