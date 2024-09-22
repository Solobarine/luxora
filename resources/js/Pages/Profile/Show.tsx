import React from "react";

interface UserProfileProps {
    profilePicture: string;
    username: string;
    followers: number;
    following: number;
    friends: number;
    bio: string;
    recentPosts: string[]; // Array of image URLs for simplicity
    highlights: string[]; // Array of highlight names or images
}

const userData: UserProfileProps = {
    profilePicture: "https://example.com/profile.jpg",
    username: "john_doe",
    followers: 1200,
    following: 180,
    friends: 75,
    bio: "Just a simple bio for John Doe. Loving life and sharing moments!",
    recentPosts: [
        "https://example.com/post1.jpg",
        "https://example.com/post2.jpg",
        "https://example.com/post3.jpg",
    ],
    highlights: ["Travel", "Food", "Fitness"],
};

const UserProfile: React.FC<UserProfileProps> = () => {
    const {
        profilePicture,
        username,
        followers,
        following,
        friends,
        bio,
        recentPosts,
        highlights,
    } = userData;
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            {/* Header Section */}
            <div className="flex items-center space-x-6">
                <img
                    src={profilePicture}
                    alt={`${username}'s profile`}
                    className="w-24 h-24 rounded-full"
                />
                <div>
                    <h2 className="text-2xl font-bold">{username}</h2>
                    <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md">
                        Follow
                    </button>
                </div>
            </div>

            {/* Stats Section */}
            <div className="flex justify-between mt-6 text-center">
                <div>
                    <h3 className="text-xl font-semibold">{followers}</h3>
                    <p className="text-gray-600">Followers</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">{following}</h3>
                    <p className="text-gray-600">Following</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">{friends}</h3>
                    <p className="text-gray-600">Friends</p>
                </div>
            </div>

            {/* Bio Section */}
            <div className="mt-6">
                <p className="text-gray-800">{bio}</p>
            </div>

            {/* Highlights Section */}
            <div className="mt-6">
                <h3 className="text-lg font-semibold">Highlights</h3>
                <div className="flex space-x-4 mt-3">
                    {highlights.map((highlight, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center"
                        >
                            <span className="text-sm font-semibold">
                                {highlight}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Posts Section */}
            <div className="mt-8">
                <h3 className="text-lg font-semibold">Recent Posts</h3>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    {recentPosts.map((post, index) => (
                        <div key={index}>
                            <img
                                src={post}
                                alt={`Post ${index + 1}`}
                                className="w-full h-32 object-cover rounded-md"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
