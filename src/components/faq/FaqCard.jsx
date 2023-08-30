const FaqCard = ({question, answer, isOpen, setOpen, i}) => {
    let possibleClassName = ["py-0", "py-8", "max-h-full", "max-h-0"]
    return (
        <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
            <button className=" w-full p-8" onClick={()=>setOpen(i)}>
                <h3 className="font-semibold text-left text-gray-700 dark:text-white">{question}</h3>

                {/*<span className="text-gray-400 bg-gray-200 rounded-full">*/}
                {/*        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
                {/*            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />*/}
                {/*        </svg>*/}
                {/*    </span>*/}
            </button>

            <hr className="border-gray-200 dark:border-gray-700" />

                <p className={`px-8 py-${isOpen?8:0} max-h-${isOpen?"full":0} text-sm overflow-y-hidden text-gray-500 dark:text-gray-300 transition-all duration-300 `}>
                    {answer}
                </p>
        </div>

);
};

export default FaqCard