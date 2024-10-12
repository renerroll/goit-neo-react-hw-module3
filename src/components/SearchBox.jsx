/* eslint-disable react/prop-types */
import { useId } from "react";

import classes from "./SearchBox.module.css";

function SearchBox({ value, onChange }) {
  const searchId = useId();

  return (
    <div className={classes["search-box"]}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        id={searchId}
        value={value}
        type="search"
        className={classes["search-box-input"]}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
