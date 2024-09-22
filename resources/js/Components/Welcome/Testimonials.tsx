import { motion } from "framer-motion";

const Testimonial = ({
    text,
    customer,
}: {
    text: string;
    customer: { name: string; image: string };
}) => (
    <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-6 rounded-lg shadow-md flex items-center"
    >
        <img
            src={customer.image}
            alt={customer.name}
            className="w-16 h-16 rounded-full mr-4"
        />
        <div>
            <p className="text-gray-700">{text}</p>
            <h4 className="font-bold text-lg mt-2">{customer.name}</h4>
        </div>
    </motion.div>
);

const TestimonialsSection = () => (
    <section className="py-20 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Testimonial
                text="Amazing quality and fast delivery!"
                customer={{ name: "John Doe", image: "/path/to/image.jpg" }}
            />
            <Testimonial
                text="The best shopping experience I've had online."
                customer={{ name: "Jane Smith", image: "/path/to/image.jpg" }}
            />
        </div>
    </section>
);

export default TestimonialsSection;
