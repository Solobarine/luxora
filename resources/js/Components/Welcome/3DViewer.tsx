import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

const Product3DViewer = () => (
    <Canvas>
        <ambientLight intensity={0.5} />
        <OrbitControls enableZoom={true} />
        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
        </mesh>
    </Canvas>
);

const ProductShowcaseSection = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex justify-center">
                <Product3DViewer />
            </div>
            <div className="flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-4">Explore in 3D</h2>
                <p className="text-gray-700 mb-6">
                    Rotate, zoom, and interact with our products like never
                    before.
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg"
                >
                    Shop Now
                </motion.button>
            </div>
        </div>
    </section>
);

export default ProductShowcaseSection;
