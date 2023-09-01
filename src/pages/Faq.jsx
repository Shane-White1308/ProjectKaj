import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import FaqContainer from "../components/faq/FaqContainer";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";

const Faq = () => {
    const [categorisedFaq, setCategorisedFaq] = useState([]);

    useEffect(() => {
        let temp = [
            {
                heading: "Product FAQ's",
                faqs: [
                    {
                        question: faker.string.alpha(10),
                        answer: faker.string.alpha(300),
                    },
                    {
                        question: faker.string.alpha(10),
                        answer: faker.string.alpha(300),
                    },
                    {
                        question: faker.string.alpha(10),
                        answer: faker.string.alpha(300),
                    },
                ],
            },

            {
                heading: "Shipping FAQ's",
                faqs: [
                    {
                        question: faker.string.alpha(10),
                        answer: faker.string.alpha(30),
                    },
                    {
                        question: faker.string.alpha(10),
                        answer: faker.string.alpha(30),
                    },
                    {
                        question: faker.string.alpha(10),
                        answer: faker.string.alpha(30),
                    },
                ],
            },
        ];

        setCategorisedFaq(temp);
    }, []);

    return (
        <>
            <Navbar />

            <section className="py-20">
                <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">
                    Frequently asked questions
                </h1>
                {categorisedFaq.map((category) => (
                    <FaqContainer
                        heading={category.heading}
                        faqs={category.faqs}
                    />
                ))}
            </section>

            <Footer />
        </>
    );
};

export default Faq;
