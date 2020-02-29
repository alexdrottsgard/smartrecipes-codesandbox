import React, { useState, Fragment } from "react";

export const Search = ({ setSearchQuery }) => {
  const [query, setQuery] = useState("");

  return (
    <Fragment>
      <input
        placeholder="search..."
        onChange={event => setQuery(event.target.value)}
      />
      <button onClick={() => setSearchQuery(query)}>search</button>
    </Fragment>
  );
};
