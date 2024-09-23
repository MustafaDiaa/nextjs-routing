"use client";

import Link from "next/link";
import React, { useState } from "react";

function Card({ title, body, id }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  function handleLike() {
    setLiked(true);
    setLikeCount((prev) => prev + 1);
  }

  return (
    <div className="border border-gray-300 p-6 flex flex-col justify-between shadow-lg rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl bg-green-50">
      <Link href={`/post/${id}`}>
        <h4 className="text-3xl font-semibold text-gray-900 min-h-32 mb-4 hover:text-rose-600 transition-colors duration-200">
          {title}
        </h4>
        <hr className="my-4 border-gray-300" />
        <p className="text-zinc-600 leading-relaxed mb-4">{body}</p>
      </Link>
      <button
        onClick={handleLike}
        className={`${
          liked
            ? "bg-gradient-to-r from-rose-600 to-pink-500 text-white"
            : "bg-gray-100"
        } w-full rounded-full py-3 mt-6 font-medium shadow-md transition-all duration-300 hover:scale-105 active:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-400`}
      >
        {liked ? `Liked (${likeCount})` : "Like"}
      </button>
    </div>
  );
}

export default Card;
