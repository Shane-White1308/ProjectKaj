import Navbar from "../components/navbar/Navbar";
import Hero from "../components/ProductCarousel";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { faker } from "@faker-js/faker";
import productImage2 from "../assets/productimages/product2.jpg";
import modelImage2 from "../assets/productimages/model2.jpg";
import {getAllCategory as getAllCategoryApi, getProductByCategory as getProductByCategoryApi} from "../services/api";

const Collection = () => {
    const { name: collectionName } = useParams();

    const [carouselImages, setCarouselImages] = useState([]);
    const [categoryWiseProductList, setCategoryWiseProductList] = useState([]);

    useEffect(() => {
        const run = async () => {
            if (collectionName === "all") {
                // get all products

                let collections = [];

                let categories = await getAllCategoryApi();
                if (categories.status === "ok") {
                    await categories.categories.forEach(async category => {
                        console.log("hfgfghsdafadg");
                        let pro = await getProductByCategoryApi(category._id);
                        if (pro.status === "ok") {
                            const collection = {
                                heading: category.name,
                                products:pro.products,
                            };
                            console.log(collection);
                            collections.push(collection);

                        }
                    })
                    console.log("asdad");
                    console.log(collections);
                    setCategoryWiseProductList(collections);
                }


                // get carousel images
                setCarouselImages(Array(5).fill("https://unsplash.it/640/425"));
            } else {
                // get that particular collection

                let products = [];

                for (let i = 0; i < 10; i++) {
                    let price = faker.commerce.price({ min: 500 });

                    let product = {
                        id: faker.database.mongodbObjectId(),
                        name: faker.commerce.product(),
                        originalPrice: price,
                        offerPrice: faker.commerce.price({
                            min: price - 100,
                            max: +price,
                        }),
                        image1: productImage2,
                        image2: modelImage2,
                    };

                    products.push(product);
                }

                const collection = [
                    {
                        heading: collectionName,
                        products,
                    },
                ];

                // get carousel images
                setCarouselImages(Array(5).fill("https://unsplash.it/640/425"));

                setCategoryWiseProductList(collection);
            }

        }

        run();
    }, [collectionName]);

    return (
        <>
            <Navbar />

            <Hero images={carouselImages} />

            {categoryWiseProductList.map((category, i) => (
                <ProductList
                    key={i}
                    heading={category.heading}
                    products={category.products}
                />
            ))}

            <Footer />
        </>
    );
};

export default Collection;
