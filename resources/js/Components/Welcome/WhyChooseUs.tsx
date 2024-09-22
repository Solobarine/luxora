import Reason from "./Reason";

const WhyChooseUs = () => {
    return (
        <div className="grid gap-4 py-10">
            <div className="flex items-center justify-between flex-wrap gap-2">
                <h2 className="text-2xl font-semibold">
                    We Provide best <br />
                    Customer Experiences
                </h2>
                <span className="text-black/50 dark:text-white">
                    Lorem ipsum dolor sit amet, consectetur
                </span>
            </div>
            <div className="flex items-center justify-between flex-wrap mt-4">
                {[1, 2, 3, 4].map((_, index) => (
                    <Reason key={index} />
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;
