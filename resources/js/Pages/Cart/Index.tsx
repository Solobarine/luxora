import Layout from "@/Layouts/Layout";
import { CartInterface, Product as ProductInterface } from "@/types";
import { Link, router } from "@inertiajs/react";
import axios from "axios";
import { useState } from "react";
import Product from "../Products/Components/Product";

const CartPage = ({ cart }: { cart: CartInterface }) => {
    const { items } = cart;
    const [cartItems, setCartItems] = useState(items);
    const [selectedProduct, setProduct] = useState<ProductInterface | null>(
        null
    );
    const [id, setId] = useState<number | null>(null);

    const updateQuantity = (id: number, quantity: number) => {
        console.log(id);
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.product_id === id ? { ...item, quantity: quantity } : item
            )
        );
    };

    const getProduct = async (id: number) => {
        return axios
            .get(route("product.get", id))
            .then((res) => setProduct(res.data));
    };

    const calculateTotal = () => {
        return cartItems.reduce(
            (total, { product, quantity }) => total + product.price * quantity,
            0
        );
    };

    return (
        <Layout>
            <div className="relative container mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg">
                <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Cart Items */}
                    <div className="col-span-2">
                        {cartItems.length > 0 ? (
                            cartItems.map(
                                (
                                    {
                                        id,
                                        product_id,
                                        product,
                                        picks,
                                        quantity,
                                    },
                                    index
                                ) => (
                                    <div
                                        key={index}
                                        className="flex justify-between items-center mb-4 border-b pb-4"
                                    >
                                        <img
                                            src={
                                                product?.images &&
                                                product.images[0].image_url
                                            }
                                            alt={product?.name}
                                            className="w-24 h-24 object-cover"
                                        />
                                        <div className="flex-1 ml-4">
                                            <h2 className="text-lg font-semibold">
                                                {product?.name}
                                            </h2>
                                            <p className="text-sm">
                                                Price: ${product?.price}
                                            </p>
                                            <div
                                                className="flex items-center gap-1 text-sm font-semibold bg-gray-200 dark:bg-gray-900 max-w-fit min-w-20 p-1 rounded-full hover:bg-gray-300 hover:dark:bg-gray-950 cursor-pointer"
                                                onClick={() => {
                                                    setId(id);
                                                    getProduct(product.id);
                                                }}
                                            >
                                                {picks.map(
                                                    ({ name, value }, index) =>
                                                        name.toLowerCase() ===
                                                        "colors" ? (
                                                            <span
                                                                key={index}
                                                                className="block w-4 aspect-square rounded-full"
                                                                style={{
                                                                    backgroundColor:
                                                                        value,
                                                                }}
                                                            />
                                                        ) : (
                                                            <span key={index}>
                                                                {value}
                                                            </span>
                                                        )
                                                )}
                                            </div>
                                            <div className="flex items-center mt-2">
                                                <button
                                                    className="px-2 py-1 text-sm bg-gray-300 dark:bg-gray-900 rounded-l"
                                                    onClick={() =>
                                                        updateQuantity(
                                                            product_id,
                                                            quantity - 1
                                                        )
                                                    }
                                                    disabled={quantity === 1}
                                                >
                                                    -
                                                </button>
                                                <input
                                                    type="number"
                                                    value={quantity}
                                                    onChange={(e) =>
                                                        updateQuantity(
                                                            product_id,
                                                            Number(
                                                                e.target.value
                                                            )
                                                        )
                                                    }
                                                    className="w-12 text-center border-gray-900 rounded-md bg-white dark:bg-gray-800"
                                                />
                                                <button
                                                    className="px-2 py-1 text-sm bg-gray-300 rounded-r dark:bg-gray-900"
                                                    onClick={() =>
                                                        updateQuantity(
                                                            product_id,
                                                            quantity + 1
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <p className="font-semibold">
                                                ${product.price * quantity}
                                            </p>
                                            <button
                                                className="ml-4 text-red-500"
                                                onClick={() =>
                                                    router.delete(
                                                        route(
                                                            "cart.remove_item",
                                                            id
                                                        ),
                                                        {
                                                            onSuccess: () =>
                                                                setCartItems(
                                                                    cartItems.filter(
                                                                        (
                                                                            item
                                                                        ) =>
                                                                            item.product_id !==
                                                                            product.id
                                                                    )
                                                                ),
                                                        }
                                                    )
                                                }
                                            >
                                                <i className="bx bx-trash" />
                                            </button>
                                        </div>
                                    </div>
                                )
                            )
                        ) : (
                            <p>Your cart is empty.</p>
                        )}
                        <Link
                            href="/marketplace"
                            className="mt-4 text-blue-500 hover:underline"
                        >
                            Continue Shopping
                        </Link>
                    </div>

                    {/* Order Summary */}
                    <div className="p-4 bg-gray-100 dark:bg-gray-900 rounded-lg">
                        <h2 className="text-xl font-bold mb-4">
                            Order Summary
                        </h2>
                        <div className="flex justify-between mb-2">
                            <p>Subtotal</p>
                            <p>${calculateTotal()}</p>
                        </div>
                        <div className="flex justify-between mb-2">
                            <p>Tax (10%)</p>
                            <p>${(calculateTotal() * 0.1).toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between font-bold text-lg">
                            <p>Total</p>
                            <p>${(calculateTotal() * 1.1).toFixed(2)}</p>
                        </div>
                        <button className="w-full bg-blue-500 text-white py-2 mt-4 rounded-lg">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
                {selectedProduct && (
                    <Product
                        itemId={id as number}
                        product={selectedProduct}
                        setProduct={setProduct}
                    />
                )}
            </div>
        </Layout>
    );
};

export default CartPage;
