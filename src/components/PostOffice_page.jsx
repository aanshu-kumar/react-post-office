import React, { useState } from "react";
import PostOffice from "./PostOffice";

const PostOffice_page = ({ setData, data, pin }) => {
  const [post, setPost] = useState([...data.PostOffice]);
  function filterPost(filter) {
    setPost(data.PostOffice.filter((item) => item.Name.includes(filter)));
  }
  return (
    <div className="w-11/12 mx-auto my-10 flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Pincode: {pin}</h2>
      <h2 className="font-bold">
        Message: <span>{data.Message}</span>
      </h2>
      {data.Status == "Success" ? (
        <div>
          <div className="flex items-center border-2 border-gray-900 rounded-lg p-2 gap-2">
            <svg
              width="20"
              height="20"
              viewBox="-2.5 -2.5 24 24"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin"
              className="jam jam-search">
              <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12m6.32-1.094 3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414z" />
            </svg>
            <input
              onChange={(e) => filterPost(e.target.value)}
              className="w-full"
              type="text"
              placeholder="Filter"
            />
          </div>
          <div className="w-full mt-10 flex flex-wrap gap-8 mx-10">
            {post.length != 0 ? (
              post.map((item, idx) => {
                return <PostOffice item={item} key={idx} />;
              })
            ) : (
              <div>
                {" "}
                <p>Couldn’t find the postal data you’re looking for…</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <p>Couldn’t find the postal data you’re looking for…</p>
        </div>
      )}
    </div>
  );
};

export default PostOffice_page;
