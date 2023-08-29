import ProductCard from "./ProductCard";

const ProductList = ({heading, products, columns=4}) => {
    const possibleColumnsStructure = [
        "grid-cols-1", "grid-cols-2", "grid-cols-3", "grid-cols-4", "grid-cols-5",
        "sm:grid-cols-1", "sm:grid-cols-2", "sm:grid-cols-3", "sm:grid-cols-4", "sm:grid-cols-5",
        "md:grid-cols-1", "md:grid-cols-2", "md:grid-cols-3", "md:grid-cols-4", "md:grid-cols-5",
        "lg:grid-cols-1", "lg:grid-cols-2", "lg:grid-cols-3", "lg:grid-cols-4", "lg:grid-cols-5",
    ];

    return products.length > 0 ? <>
        <div className="mx-auto px-4 py-8 sm:px-6 sm:py-24 lg:px-8">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">{heading}</h2>

            <div className={`mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-${columns} xl:gap-x-8`}>
                {products.map((product) => <ProductCard key={product.id} product={product}/>)}
            </div>
        </div>
    </> : <></>
}

export default ProductList;