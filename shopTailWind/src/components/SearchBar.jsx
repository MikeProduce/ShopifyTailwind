import { useState } from "react"

export const SearchBar = ({ onSubmit}) => {
  const [value,setValue] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
  };




  return (
    <form className="p-6" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Search..."
        className="text-black"
      />
      <button type="submit">Search</button>
    </form>
  );
};
