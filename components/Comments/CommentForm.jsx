"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 

const CommentForm = ({postId, user}) => {
    const [text, setText] = useState("");
    const router = useRouter(); 


  async function submitComment(){
      await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          postId,
          text,
          userName: user.name,
        }),
    });

    setText("");
    router.refresh();
  };
  return (
    <>
      <div className="max-w-2xl mb-4 ml-2 border-b border-gray-300 pb-2">
          <div className="gap-3">
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Write comments"
                  rows={2}
                  className="
                   w-full
                    resize-none
                    px-4 py-3
                    bg-white
                    border border-gray-300
                    rounded-lg
                    text-sm
                    placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:ring-blue-300
                    transition
                  "
                />
                <div className="flex justify-end">
                 <button
                  type="submit"
                  className="
                    px-4 py-2
                    bg-blue-600 text-white
                    rounded-lg
                    text-sm font-medium
                    cursor-pointer
                    hover:bg-blue-700
                    focus:outline-none focus:ring-2 focus:ring-blue-300
                    disabled:opacity-60 disabled:cursor-not-allowed
                  "
                  onClick={submitComment}
                >
                  Post
                </button>

                </div>

          </div>
        </div>
      
    </>
  );
};

export default CommentForm;