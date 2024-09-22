import React, { useState } from "react";
//import "boxicons/css/boxicons.min.css";

interface PostFormState {
    caption: string;
    location: string;
    privacy: string;
}

const PostCreationPage: React.FC = () => {
    const [formState, setFormState] = useState<PostFormState>({
        caption: "",
        location: "",
        privacy: "Public",
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    const handlePrivacyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormState({ ...formState, privacy: e.target.value });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-4 mt-10">
                {/* Header */}
                <div className="flex justify-between items-center border-b pb-2 mb-4">
                    <h1 className="text-lg font-semibold">Create a Post</h1>
                    <button className="text-blue-500 font-semibold">
                        Next
                    </button>
                </div>

                {/* Image/Video Upload */}
                <div className="mb-4">
                    <label className="block text-center border-2 border-dashed border-gray-300 p-10 rounded-lg cursor-pointer hover:bg-gray-50">
                        <i className="bx bx-upload text-6xl text-gray-400 mb-3"></i>
                        <span className="text-gray-500">
                            Drag and drop your image/video
                        </span>
                        <input type="file" className="hidden" />
                    </label>
                </div>

                {/* Caption Input */}
                <div className="mb-4">
                    <textarea
                        name="caption"
                        placeholder="Write a caption..."
                        className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                        value={formState.caption}
                        onChange={handleInputChange}
                    ></textarea>
                </div>

                {/* Location and Tagging */}
                <div className="flex gap-2 mb-4">
                    <div className="relative w-full">
                        <i className="bx bx-map-pin absolute top-3 left-3 text-gray-400"></i>
                        <input
                            name="location"
                            type="text"
                            placeholder="Add location"
                            className="w-full border border-gray-300 rounded-lg pl-10 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formState.location}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
                        <i className="bx bx-user-pin"></i> Tag Friends
                    </button>
                </div>

                {/* Privacy Selector */}
                <div className="mb-4">
                    <label className="block mb-1 font-semibold">Privacy</label>
                    <select
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formState.privacy}
                        onChange={handlePrivacyChange}
                    >
                        <option value="Public">Public</option>
                        <option value="Friends">Friends</option>
                        <option value="Only me">Only me</option>
                    </select>
                </div>

                {/* Add to Post Options */}
                <div className="flex gap-4 mb-4">
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
                        <i className="bx bx-smile"></i> Feeling/Activity
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
                        <i className="bx bx-tag"></i> Tag
                    </button>
                </div>

                {/* Action Buttons */}
                <div className="text-center">
                    <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600">
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostCreationPage;
