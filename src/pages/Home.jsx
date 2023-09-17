import Navbar from "../components/navbar/Navbar";
import Hero from "../components/ProductCarousel";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import { useState, useEffect } from "react";
import {
    getTopProduct as getTopProductApi,
    getCategoryByName as getCategoryByNameApi,
    getProductByCategory as getProductByCategoryApi,
} from "../services/api";

const Home = () => {
    const [carouselImages, setCarouselImages] = useState([]);
    const [bestSellers, setBestSellers] = useState([]);
    const [facewashes, setFacewashes] = useState([]);
    const [faceserum, setFaceSerum] = useState([]);

    useEffect(() => {
        setCarouselImages(Array(5).fill("https://unsplash.it/1920/1080"));
    }, []);

    useEffect(() => {
        const run = async () => {
            const response = await getTopProductApi();

            if (response.status === "ok") {
                setBestSellers(response.products);
            }
        };

        run();
    }, []);

    useEffect(() => {
        const run = async () => {
            const categoryResponse = await getCategoryByNameApi("facewash");

            if (categoryResponse.status === "ok") {
                const productResponse = await getProductByCategoryApi(
                    categoryResponse.category._id
                );

                if (productResponse.status === "ok") {
                    setFacewashes(productResponse.products);
                }
            }
        };

        run();
    }, []);

    useEffect(() => {
        const run = async () => {
            const categoryResponse = await getCategoryByNameApi("faceserum");

            if (categoryResponse.status === "ok") {
                const productResponse = await getProductByCategoryApi(
                    categoryResponse.category._id
                );

                if (productResponse.status === "ok") {
                    setFaceSerum(productResponse.products);
                }
            }
        };

        run();
    }, []);

    return (
        <>
            <Navbar />
            <Hero images={carouselImages} />
            <ProductList heading="Best Sellers" products={bestSellers} />
            <ProductList
                heading="Facewashes"
                products={facewashes}
                columns={3}
            />
            <ProductList
                heading="Face Serum"
                products={faceserum}
                columns={3}
            />
            <Footer />
        </>
    );
};

export default Home;
