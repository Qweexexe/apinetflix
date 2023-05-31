import './Search.css'
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Search() {

  const selector = useSelector(state => state.reducer.field);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const converter = () => {
    const converted = search.split(' ').join('%20');
    converted ? dispatch({ type: "GET", payload: converted }) : dispatch({ type: "GET", payload: 'witcher' });
  };
 console.log(selector)
  return (
    <div className="wrapper_search_input">
      <input
        onChange={e => {
          setSearch(e.target.value);
          converter();
        }}
        onMouseUp={e => {
          e.target.value = '';
          setSearch('');
        }}
        placeholder="Search.."
        className="search_input"
        type="text"
      />
    </div>
  );
}

export default Search;
