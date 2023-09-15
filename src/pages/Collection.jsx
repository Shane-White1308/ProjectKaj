import Navbar from "../components/navbar/Navbar";
import Hero from "../components/ProductCarousel";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    getAllCategory as getAllCategoryApi,
    getProductByCategory as getProductByCategoryApi,
    getCategoryByName as getCategoryByNameApi,
} from "../services/api";

const Collection = () => {
    const { name: collectionName } = useParams();

    const [carouselImages, setCarouselImages] = useState([]);
    const [categoryWiseProductList, setCategoryWiseProductList] = useState([]);

    useEffect(() => {
        const run = async () => {
            if (collectionName === "all") {
                const categoryResponse = await getAllCategoryApi();

                if (categoryResponse.status === "ok") {
                    const categories = categoryResponse.categories;

                    for (const category of categories) {
                        const productResponse = await getProductByCategoryApi(
                            category._id
                        );

                        if (productResponse.status === "ok") {
                            category.products = productResponse.products;
                        }
                    }

                    setCategoryWiseProductList(categories);
                }

                setCarouselImages(Array(5).fill("https://unsplash.it/640/425"));
            } else {
                const categoryResponse = await getCategoryByNameApi(
                    collectionName
                );

                if (categoryResponse.status === "ok") {
                    const productResponse = await getProductByCategoryApi(
                        categoryResponse.category._id
                    );

                    if (productResponse.status === "ok") {
                        categoryResponse.category.products =
                            productResponse.products;

                        setCategoryWiseProductList([categoryResponse.category]);
                    }
                }

                setCarouselImages(Array(5).fill("https://unsplash.it/640/425"));
            }
        };

        run();
    }, [collectionName]);

    return (
        <>
            <Navbar />

            <Hero images={carouselImages} />

            {categoryWiseProductList.map((category) => (
                <ProductList
                    key={category._id}
                    heading={category.name}
                    products={category.products}
                />
            ))}

            <Footer />
        </>
    );
};

export default Collection;
