import { SearchInput, SearchLabel, SearchTitle } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  function onSearch(event) {
    dispatch(setFilter(event.target.value));
  }

  return (
    <SearchLabel>
      <SearchTitle>Search</SearchTitle>
      <SearchInput
        type="search"
        name="filter"
        value={filter}
        onChange={onSearch}
      ></SearchInput>
    </SearchLabel>
  );
};

export default Filter;
