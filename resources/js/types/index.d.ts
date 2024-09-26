export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User | null;
    };
};

interface Category {
    name: string;
    image_url: string;
}

interface Product {
    id: number;
    name: string;
    category?: Category;
    images?: Image[];
    attributes?: Attribute[];
    category_id: number;
    brand: string;
    description: string;
    stock_quantity: number;
    price: number;
    wishlisted?: boolean;
}

interface Products {
    current_page: number;
    data: Product[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Link[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

interface Link {
    url: string | null;
    label: string;
    active: boolean;
}

interface Attribute {
    id: number;
    product_id: number;
    name: string;
    value: string;
}

interface Image {
    id: number;
    product_id: number;
    image_url: string;
}

interface CartInterface {
    id: number;
    user_id: number;
    items: CartItemInterface[];
}

interface CartItemInterface {
    id: number;
    cart_id: number;
    product_id: number;
    picks: Attribute[];
    product: Product;
    attributes: { id: number }[];
    quantity: number;
}

interface WishlistInterface {
    id: number;
    user_id: number;
    items: WishlistItemInterface[] | [];
}

interface WishlistItemInterface {
    id: number;
    wishlist_id: number;
    product_id: number;
    product?: Product;
}

interface ReviewInterface {
    id: number;
    user_id: number;
    user?: User;
    product_id: number;
    rating: number;
    comment: string;
}

interface ReviewsPageInterface {
    current_page: number;
    data: ReviewInterface[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Link[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}
