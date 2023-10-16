import { useEffect, useState } from "react";
import GifItem from "../components/GifItem";
import GifList from "../components/GiftList";
import { ApiSearchGiphy } from "../api/index";

const IronManGiphy = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    ApiSearchGiphy("iron man", 9).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <div className="heading-area">
        <h1>IRON MAN GIPHY</h1>
      </div>

      <GifList>
        {data.map((d: any, i) => {
          return <GifItem key={i} image={d.images.original.url} />;
        })}
      </GifList>
    </div>
  );
};

export default IronManGiphy;
