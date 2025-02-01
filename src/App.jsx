import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import PostOffice_page from "./components/PostOffice_page";
function App() {
  const [data, setData] = useState([]);
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <>
      {data.length === 0 && (
        <Search setLoading={setLoading} setData={setData} setPin={setPin} />
      )}
      {loading && (
        <div className="w-11/12 mx-auto flex justify-center">
          <div className="loader"></div>
        </div>
      )}
      {data.length != 0 && (
        <PostOffice_page setData={setData} data={data} pin={pin}></PostOffice_page>
      )}
    </>
  );
}

export default App;
