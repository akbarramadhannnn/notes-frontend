import { ReactNode, memo } from "react";

type GifItemProps = {
  children: ReactNode;
};

const GifItem = (props: GifItemProps) => {
  return <div className="gif-list">{props.children}</div>;
};

export default memo(GifItem);
