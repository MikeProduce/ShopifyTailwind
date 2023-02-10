import { useState } from "react"

export const SearchBar = ({ onSubmit, items }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform the search on the items
    const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );

    onSubmit(filteredItems);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center w-full md:w-3/4 xl:w-1/2">
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Search..."
        className="text-black rounded-lg w-full py-1 px-1.5 mx-4"
      />
      <button className="mx-2 py-2 outline-black" type="submit">
        Search
      </button>
    </form>
  );
};
