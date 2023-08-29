import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import {useState, useEffect} from "react";

const Home = () => {
    const [carouselImages, setCarouselImages] = useState([]);
    const [bestSellers, setBestSellers] = useState([]);
    const [facewashes, setFacewashes] = useState([]);
    const [faceserum, setFaceSerum] = useState([]);

    useEffect(() => {
        // get carousel images
        setCarouselImages(Array(5).fill("https://unsplash.it/640/425"));
    }, []);

    useEffect(() => {
        const products =  Array(10).fill({
            id: 1,
            name: 'BRIGHTENING SERUM - ALPHA ARBUTIN',
            originalPrice: 970,
            offerPrice: 921,
            image1: "https://unsplash.it/640/425",
            image2: "https://unsplash.it/720/720"
        });

        setBestSellers(products);
    }, []);

    useEffect(() => {
        const products =  Array(10).fill({
            id: 1,
            name: 'BRIGHTENING SERUM - ALPHA ARBUTIN',
            originalPrice: 970,
            offerPrice: 921,
            image1: "https://unsplash.it/640/425",
            image2: "https://unsplash.it/720/720"
        });

        setFacewashes(products);
    }, []);

    useEffect(() => {
        const products =  Array(10).fill({
            id: 1,
            name: 'BRIGHTENING SERUM - ALPHA ARBUTIN',
            originalPrice: 970,
            offerPrice: 921,
            image1: "https://unsplash.it/640/425",
            image2: "https://unsplash.it/720/720"
        });

        setFaceSerum(products);
    }, []);

  return (
    <>
      <Navbar />
      <Hero images={carouselImages}/>
        <ProductList heading="Best Sellers" products={bestSellers}/>
        <ProductList heading="Facewashes 💀" products={facewashes} columns={3}/>
        <ProductList heading="Face Serum" products={faceserum} columns={3}/>

      <Footer />
    </>
  );
};

export default Home;
