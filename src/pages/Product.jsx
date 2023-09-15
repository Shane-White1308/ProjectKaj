import Hero from "../components/product/Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import Features from "../components/product/Features";
import ProductList from "../components/ProductList";
import Reviews from "../components/product/Reviews";
import {
    getProductById as getProductByIdApi,
    getProductImages as getProductImagesApi,
    getProductFeatures as getProductFeaturesApi,
    getProductReviews as getProductReviewsApi,
    getProductReviewSummary as getProductReviewSummaryApi,
    getProductByCategory as getProductByCategoryApi,
    getTopProduct as getTopProductApi,
} from "../services/api";

const Product = () => {
    const { id: productId } = useParams();

    const [product, setProduct] = useState({});
    const [images, setImages] = useState([]);
    const [features, setFeatures] = useState([]);

    const [reviewSummary, setReviewSummary] = useState({});
    const [reviews, setReviews] = useState([]);

    const [recommended, setRecommended] = useState([]);

    useEffect(() => {
        const run = async () => {
            const response = await getProductByIdApi(productId);

            if (response.status === "ok") {
                setProduct(response.product);
            }
        };

        run();
    }, [productId]);

    useEffect(() => {
        const run = async () => {
            const response = await getProductImagesApi(productId);

            if (response.status === "ok") {
                setImages(response.images);
            }
        };

        run();
    }, [productId]);

    useEffect(() => {
        const run = async () => {
            const response = await getProductFeaturesApi(productId);

            if (response.status === "ok") {
                setFeatures(response.features);
            }
        };

        run();
    }, [productId]);

    useEffect(() => {
        const run = async () => {
            const response = await getProductReviewSummaryApi(productId);

            if (response.status === "ok") {
                setReviewSummary(response.summary);
            }
        };

        run();
    }, [productId]);

    useEffect(() => {
        const run = async () => {
            const response = await getProductReviewsApi(productId);

            if (response.status === "ok") {
                setReviews(response.reviews);
            }
        };

        run();
    }, [productId]);

    useEffect(() => {
        const run = async () => {
            if (product.category) {
                const response = await getProductByCategoryApi(
                    product.category
                );

                if (response.status === "ok") {
                    setRecommended(response.products);
                }
            } else {
                const response = await getTopProductApi();

                if (response.status === "ok") {
                    setRecommended(response.products);
                }
            }
        };

        if (product) {
            run();
        }
    }, [product]);

    return (
        <>
            <Navbar />

            <Hero
                product={product}
                images={images}
                reviewSummary={reviewSummary}
            />
            <Features features={features} />
            <Reviews summary={reviewSummary} reviews={reviews} />

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
