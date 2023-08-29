import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

const Collection = () => {
    const {name: collectionName} = useParams();

    const [carouselImages, setCarouselImages] = useState([]);
    const [categoryWiseProductList, setCategoryWiseProductList] = useState([]);

    useEffect(() => {
        if (collectionName === "all"){
            // get all products
            const collection = Array(5).fill({
                heading: "Facewash 💀",
                products: Array(10).fill({
                    id: 1,
                    name: 'BRIGHTENING SERUM - ALPHA ARBUTIN',
                    originalPrice: 970,
                    offerPrice: 921,
                    image1: "https://unsplash.it/640/425",
                    image2: "https://unsplash.it/720/720"
                })
            });

            setCategoryWiseProductList(collection);
            // get carousel images
            setCarouselImages(Array(5).fill("https://unsplash.it/640/425"));
        } else {
            // get that particular collection
            const collection = [{
                heading: "Facewash 💀",
                products: Array(10).fill({
                    id: 1,
                    name: 'BRIGHTENING SERUM - ALPHA ARBUTIN',
                    originalPrice: 970,
                    offerPrice: 921,
                    image1: "https://unsplash.it/640/425",
                    image2: "https://unsplash.it/720/720"
                })
            }];

            // get carousel images
            setCarouselImages(Array(5).fill("https://unsplash.it/640/425"));

            setCategoryWiseProductList(collection);
        }

    }, [collectionName]);

    return (
        <>
            <Navbar />

            <Hero images={carouselImages}/>

            {categoryWiseProductList.map((category, i) =>
                <ProductList key={i} heading={category.heading} products={category.products}/>
            )}

            <Footer />
        </>
    );
};

export default Collection;
