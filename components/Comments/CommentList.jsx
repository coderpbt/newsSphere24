import { getAllComments } from "@/database/queries";


const CommentList = async ({postId}) => {
  const comments = await getAllComments(postId);
  console.log("comments", comments)
  return (
     <div className="space-y-3">
      {comments.map((c, i) => {
        const firstLetter = c.userName?.charAt(0)?.toUpperCase() || "?";

        return (
          <div key={i} className="flex items-start gap-3 mb-6">
            <div className="
              w-10 h-10 flex items-center justify-center 
              bg-blue-600 text-white font-semibold 
              rounded-full text-lg
            ">
              {firstLetter}
            </div>

            <div className="
              bg-gray-100 
              px-4 py-2 
              rounded-2xl 
              max-w-lg
            ">
              <p className="font-semibold text-sm">{c.userName}</p>
              <p className="text-sm text-gray-700">{c.comments}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;