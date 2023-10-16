import { memo } from "react";

type GifListProps = {
  image: string;
};

const GifList = (props: GifListProps) => {
  return (
    <div className="gif-item">
      <img src={props.image} alt="img" />
    </div>
  );
};

export default memo(GifList);
