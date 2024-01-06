import { FaSearch } from "react-icons/fa";

const Search = ({ query, setQuery, sortOrder, setSortOrder }: SearchProps) => {
  const handleClick = () => {
    setQuery("");
  };

  return (
    <div className="flex flex-col">
      <div>
        <label className="flex items-center">
          search:
          <div className="flex items-center space-x-4">
            <input
              className="border-2 p-[4px] ml-2 rounded-md"
              placeholder="Search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleClick} type="button">
              <FaSearch />
            </button>
          </div>
        </label>
      </div>
      <div className="flex space-x-2 justify-end ">
        <p>filter: price</p>

        <select
          name="sortorder"
          id="sortorder"
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="lowToHigh">Low to High</option>

          <option value="highToLow">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
