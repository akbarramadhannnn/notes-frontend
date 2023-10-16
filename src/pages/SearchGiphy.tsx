import { useCallback, useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import GifItem from "../components/GifItem";
import GifList from "../components/GiftList";
import { ApiSearchGiphy } from "../api/index";

const SearchGiphy = () => {
  const [valueSearch, setValueSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    let timeout = setTimeout(() => {
      ApiSearchGiphy(valueSearch, 9).then((response) => {
        setData(response.data);
      });
    }, 600);

    return () => {
      clearTimeout(timeout);
    };
  }, [valueSearch]);

  const handleChange = useCallback((e: { target: { value: any } }) => {
    const { value } = e.target;
    setValueSearch(value);
  }, []);

  return (
    <div>
      <div className="heading-area">
        <h1>SEARCH YOUR GIPHY</h1>

        <SearchBar value={valueSearch} onChange={handleChange} />
      </div>

      <GifList>
        {data.map((d: any, i) => {
          return <GifItem key={i} image={d.images.original.url} />;
        })}
      </GifList>
    </div>
  );
};

export default SearchGiphy;
