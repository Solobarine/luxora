import React, { FormEventHandler, useRef } from "react";
import Form from "./Partials/Form";
import Layout from "@/Layouts/Layout";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

const Create = () => {
    const imageRef = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        errors,
        post,
        processing,
        reset,
        recentlySuccessful,
    } = useForm({ name: "", image: null });

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("category.create"), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <Layout>
            <form
                onSubmit={handleSubmit}
                className="grid gap-3 max-w-5xl mx-auto"
            >
                <h1 className="text-3xl font-semibold text-center">
                    Create a new Category
                </h1>
                <Transition
                    show={recentlySuccessful}
                    enter="transition ease-in-out"
                    enterFrom="opacity-0"
                    leave="transition ease-in-out"
                    leaveTo="opacity-0"
                >
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Category Saved Successfully
                    </p>
                </Transition>
                <div>
                    <InputLabel
                        htmlFor="image"
                        value="Select a Category Image"
                    />
                    <input type="file" name="image" id="image" ref={imageRef} />
                </div>
                <div className="grid gap-1">
                    <InputLabel htmlFor="name" value="Enter a Category Name" />
                    <TextInput
                        id="name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    <InputError id="name" message={errors.name} />
                </div>
                <PrimaryButton disabled={processing} className="ml-auto block">
                    {processing ? "Please Wait..." : "Create Category"}
                </PrimaryButton>
            </form>
        </Layout>
    );
};

export default Create;
