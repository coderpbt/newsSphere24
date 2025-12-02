"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";


const AddPostForm = ({ categories, session }) => {
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  console.log("sessionX", session);
  const router = useRouter();
  const slugify = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-') 
      .replace(/^-+|-+$/g, '');
}

    const onSubmit = async (e) => {
      e.preventDefault();
      setError("");
      setUploading(true);

    if (!session?.user) {
      setError("You must be logged in to create a post.");
      setUploading(false);
      return;
    }

      try {
        const formData = new FormData(e.currentTarget);

        // Upload image first
        const imageFile = formData.get("featuredImage");
        let imageUrl = "";

        if (imageFile && imageFile.size > 0) {
          const imageData = new FormData();
          imageData.append("file", imageFile);
          imageData.append("upload_preset", "upload_preset"); // cloudinary User Name 
          imageData.append("cloud_name", "ddgwhf0bu"); 

          const res = await fetch("https://api.cloudinary.com/v1_1/ddgwhf0bu/image/upload", {
            method: "POST",
            body: imageData,
          });

          const imgResponse = await res.json();
          imageUrl = imgResponse.secure_url;
        }

        const finalData = {
          title: formData.get("title"),
          // cname: formData.get("category") || null,
          slug: slugify(formData.get("title")),
          content: formData.get("content"),
          excerpt: formData.get("excerpt"),
          featuredImage: imageUrl,
          // author: session.user._id || session.user.id,       
          authorName : session.user.name,
          category: formData.get("category") || null,
          tags: formData.get("tags")?.split(",").map((t) => t.trim()) || [],
          status: formData.get("status"),
          isEditorsPick: formData.get("isEditorsPick") === "on",
        };

        const resPost = await fetch("/api/posts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(finalData),
        });

        if (!resPost.ok) {
          const data = await resPost.json();
          throw new Error(data.message || "Something went wrong");
        }

        router.push("/");
      } catch (err) {
        setError(err.message);
      } finally {
        setUploading(false);
      }
    };


  return (
    <>
     <div className="text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-8 bg-white my-5 shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-2xl">
        <div className="text-center mb-8">
          <p className="text-black font-bold text-2xl uppercase tracking-wider">
            Add New Post
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg text-red-700 text-center">
            {error}
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-7">

          {/* Title */}
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Title</label>
              <input
                name="title"
                required
                placeholder="Title"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Excerpt</label>
            <textarea
              name="excerpt"
              rows={3}
              placeholder="Excerpt"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Featured Image */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Featured Image
            </label>

            <input
              name="featuredImage"
              type="file"
              accept="image/*"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Category + Tags + Status */}
          <div className="grid grid-cols-3 gap-6">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Select Category
            </label>
            <select 
              name="category" 
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-gray-900"
            >
              <option value="" className="text-gray-900">Select Category</option>
              {categories?.map((c) => (
                <option key={c._id} value={c._id} className="text-gray-900">
                  {c.cname}
                </option>
              ))}
            </select>
          </div>

          <div>
              <label className="block text-sm text-gray-600 mb-1">
                Tags
              </label>
              <input
                name="tags"
                placeholder="Tags (comma separated)"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Status</label>
              <select
                name="status"
                defaultValue="draft"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
          </div>

          {/* Editor Pick */}
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="isEditorsPick"
              className="w-5 h-5 text-blue-600 border-gray-400 rounded focus:ring-blue-500"
            />
            <span className="text-gray-700">Editors Pick</span>
          </label>

          {/* Content */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Content</label>
            <textarea
              name="content"
              required
              rows={12}
              placeholder="Write your content here..."
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition font-mono text-sm"
            />
          </div>

          {/* Submit */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={uploading}
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-70 disabled:cursor-not-allowed rounded-lg font-semibold text-lg transition cursor-pointer"
            >
              {uploading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
     </div>

    </>
  );
};

export default AddPostForm;