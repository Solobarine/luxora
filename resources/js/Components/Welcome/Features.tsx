import { motion } from "framer-motion";

const FeatureHighlight = ({
    icon,
    title,
    description,
}: {
    icon: string;
    title: string;
    description: string;
}) => (
    <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-indigo-100 p-6 rounded-lg shadow-md flex items-center"
    >
        <div className="mr-4">
            <i className={`fas fa-${icon} text-3xl text-indigo-600`}></i>
        </div>
        <div>
            <h4 className="font-bold text-xl">{title}</h4>
            <p className="text-gray-700">{description}</p>
        </div>
    </motion.div>
);

const FeatureSection = () => (
    <section className="py-20 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureHighlight
                icon="truck"
                title="Free Shipping"
                description="On all orders over $50"
            />
            <FeatureHighlight
                icon="headset"
                title="24/7 Support"
                description="We're here to help anytime"
            />
            <FeatureHighlight
                icon="sync"
                title="Easy Returns"
                description="30-day hassle-free returns"
            />
        </div>
    </section>
);

export default FeatureSection;
