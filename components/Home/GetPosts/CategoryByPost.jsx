import Link from 'next/link';
import React from 'react';

const CategoryByPost = ({CategoryIndexPost}) => {
  return (
    <div>
       <aside className="space-y-3">
            {CategoryIndexPost?.map((post) => (
              <Link href={`/${post.cname}/${post.slug}`} key={post.slug} className="border border-gray-100 py-1 px-2 rounded block">
                <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-2 py-0.5 rounded hover:underline">{post.cname}</span>
                <h3 className="text-sm font-medium mt-2 leading-tight hover:underline">{post.title}</h3>
              </Link>
            ))}
          </aside>          
    </div>
  );
};

export default CategoryByPost;