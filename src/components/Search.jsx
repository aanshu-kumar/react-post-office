import React, { useState } from "react";

const Search = ({setData,setPin,setLoading}) => {
  let [pincode, setPincode] = useState("");
  const lookupHandler = () => {
    setLoading(true);
    fetch(`https://api.postalpincode.in/pincode/${pincode}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data[0]);
        setPin(pincode)
        setLoading(false);
      });
  };

  return (
    <div className="w-11/12 mx-auto my-10 flex flex-col gap-4">
      <h2 className="text-2xl">Enter Pincode</h2>
      <div className="flex items-center border-2 border-gray-900 rounded-lg p-2 gap-2">
        <input
          onChange={(e) => setPincode(e.target.value)}
          className="w-full"
          type="text"
          placeholder="Enter Pincode"
        />
      </div>
      <button
        onClick={lookupHandler}
        className="text-white bg-black py-2 px-7 w-1/5 rounded-lg">
        Lookup
      </button>
      {pincode !=6 && <p>Pin have to be of 6 digits.</p>}
    </div>
  );
};

export default Search;
