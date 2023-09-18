import { useState, useEffect } from "react";
import closeIcon from "../../assets/icons/close.png";
import { searchProduct as searchProductApi } from "../../services/api";
import SearchItem from "./SearchItem";

const Search = ({ setOpen }) => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const [show, setShow] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();

        if (query) {
            const response = await searchProductApi(query);

            if (response.status === "ok") {
                setResults(response.products);
            }
        }
    };

    useEffect(() => {
        setShow(true);
    }, []);

    const _ = ["-translate-x-full", "translate-x-0", "hidden", "block"];

    return (
        <div className="z-[1002]">
            <div
                className={`fixed top-0 left-0 ${
                    show ? "block" : "hidden"
                } bg-black bg-opacity-60 w-full h-screen z-[1002]`}
            />

            <div
                className={`fixed inset-y-0 left-0 ${
                    show ? "translate-x-0" : "-translate-x-full"
                } w-full overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-transform duration-300 z-[1002]`}
            >
                <div className="sticky top-0 bg-white p-6 border-b-2 border-gray-200">
                    <div className="flex items-start justify-between">
                        <h2 className="text-lg font-medium text-gray-900">
                            Search
                        </h2>

                        <div className="ml-3 flex h-7 items-center">
                            <button
                                type="button"
                                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                onClick={() => setOpen(false)}
                            >
                                <img
                                    src={closeIcon}
                                    alt="Close panel"
                                    className="h-6 w-6"
                                />
                            </button>
                        </div>
                    </div>

                    <form
                        onSubmit={handleSearch}
                        className="mt-4 flex items-stretch gap-2"
                    >
                        <input
                            className="p-2 flex-1 border border-gray-500 rounded-md"
                            type="text"
                            placeholder="Search..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />

                        <button
                            type="submit"
                            className="py-2 px-4 rounded-md bg-blue-600 text-white font-bold"
                        >
                            Go
                        </button>
                    </form>
                </div>

                <div className="px-6">
                    {results.length > 0 ? (
                        <div className="flow-root">
                            <ul className="divide-y divide-gray-200">
                                {results.map((product) => (
                                    <SearchItem product={product} />
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Search;
