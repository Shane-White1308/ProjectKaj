const FaqCard = ({question, answer, isOpen, setOpen, i}) => {
    let possibleClassName = ["py-0", "py-8", "max-h-full", "max-h-0", "overflow-y-hidden", "overflow-y-auto"]

    return (
        <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
            <button className=" w-full p-8" onClick={()=>setOpen(i)}>
                <h3 className="font-semibold text-left text-gray-700 dark:text-white">{question}</h3>
            </button>

            <hr className="border-gray-200 dark:border-gray-700" />

            <p className={`px-8 py-${isOpen?8:0} max-h-${isOpen?"auto":0} text-sm overflow-y-hidden break-words text-gray-500 dark:text-gray-300 transition-all duration-300 `}>
                {answer}
            </p>
        </div>

);
};

export default FaqCard