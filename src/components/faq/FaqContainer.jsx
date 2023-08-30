import FaqCard from "./FaqCard";
import {useState} from "react";

const FaqContainer = ({heading, faqs}) => {
    const [open, setOpen] = useState(0)
    return (
            <div className="container max-w-4xl px-6 py-10 mx-auto">
                <h2 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">{heading}</h2>

                <div className="mt-12 space-y-8">
                    {faqs.map((faq, i)=> <FaqCard question={faq.question} answer={faq.answer} isOpen={i === open} setOpen={setOpen} i={i}/>)}
                </div>
            </div>
    );
};

export default FaqContainer