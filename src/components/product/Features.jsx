const Features = ({ features }) => {
    return features?.length ? (
        <>
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container p-6 lg:p-20 mx-auto flex flex-wrap">
                    {features.map((feature) => (
                        <div key={feature._id} className="p-4 w-full md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                                <h2 className="text-white text-lg mb-3 title-font font-medium">
                                    {feature.heading}
                                </h2>
                                <p className="leading-relaxed text-base">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    ) : (
        <></>
    );
};

export default Features;
