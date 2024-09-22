import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const BuyCryptoPage: React.FC = () => {
    const [selectedCrypto, setSelectedCrypto] = useState("BTC");
    const [fiatValue, setFiatValue] = useState("");
    const [cryptoAmount, setCryptoAmount] = useState("");
    const [currentPrice, setCurrentPrice] = useState(50000); // example price for BTC
    const [percentage, setPercentage] = useState(0);

    const handleCryptoChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setSelectedCrypto(event.target.value);
        // Fetch and update currentPrice based on selectedCrypto
    };

    const handleFiatInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFiatValue(event.target.value);
        setCryptoAmount(
            (parseFloat(event.target.value) / currentPrice).toFixed(6)
        );
    };

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPercentage(parseInt(event.target.value));
        setFiatValue(((percentage / 100) * 1000).toFixed(2)); // assuming $1000 balance
        setCryptoAmount(
            (((percentage / 100) * 1000) / currentPrice).toFixed(6)
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
                <h1 className="text-2xl font-semibold text-gray-800 text-center mb-4">
                    Buy Cryptocurrency
                </h1>

                <div className="mb-4">
                    <label className="block text-gray-600 mb-2">
                        Select Cryptocurrency
                    </label>
                    <select
                        value={selectedCrypto}
                        onChange={handleCryptoChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    >
                        <option value="BTC">Bitcoin (BTC)</option>
                        <option value="ETH">Ethereum (ETH)</option>
                        <option value="LTC">Litecoin (LTC)</option>
                        {/* Add more options */}
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-600 mb-2">
                        Amount in Fiat (USD)
                    </label>
                    <input
                        type="number"
                        value={fiatValue}
                        onChange={handleFiatInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter amount in USD"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-600 mb-2">
                        Or Amount in {selectedCrypto}
                    </label>
                    <input
                        type="number"
                        value={cryptoAmount}
                        readOnly
                        className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                        placeholder="Auto-calculated"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-600 mb-2">
                        Select Percentage of Balance
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={percentage}
                        onChange={handleSliderChange}
                        className="w-full"
                    />
                    <div className="flex justify-between text-gray-600 mt-2">
                        <span>0%</span>
                        <span>25%</span>
                        <span>50%</span>
                        <span>75%</span>
                        <span>100%</span>
                    </div>
                </div>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800">
                        Transaction Summary
                    </h3>
                    <p className="text-gray-600">
                        You will get approximately{" "}
                        <span className="font-bold">
                            {cryptoAmount} {selectedCrypto}
                        </span>
                    </p>
                    <p className="text-gray-600">
                        Current Price:{" "}
                        <span className="font-bold">
                            ${currentPrice} / {selectedCrypto}
                        </span>
                    </p>
                    <p className="text-gray-600">
                        Fees: <span className="font-bold">1%</span>
                    </p>
                </div>

                <button className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-200">
                    Buy {selectedCrypto}
                </button>
            </div>

            <div className="mt-8 text-gray-600 text-center">
                Need help?{" "}
                <a href="/support" className="text-blue-500 hover:underline">
                    Contact Support
                </a>
            </div>
        </div>
    );
};

export default BuyCryptoPage;
