import { SearchInput, SearchLabel, SearchTitle } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

const Filter = () => {
  const filter = useSelector(selectFilter);
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
