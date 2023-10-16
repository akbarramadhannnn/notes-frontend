import React, { memo } from "react";

type SearchBarProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = (props: SearchBarProps) => {
  return (
    <div
      style={{
        marginTop: 30,
      }}
    >
      <input
        value={props.value}
        onChange={props.onChange}
        placeholder="Search giphy"
      />
    </div>
  );
};

export default memo(SearchBar);
