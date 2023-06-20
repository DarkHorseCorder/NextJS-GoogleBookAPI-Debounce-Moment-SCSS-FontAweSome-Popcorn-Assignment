import { DebounceInput } from 'react-debounce-input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import SearchItem from './SearchItem'

const SearchBar = ( props ) => {
  const { value, changeHandler, data, clickHandler } = props;
  return (
    <div className="PrimarySearch">
      <FontAwesomeIcon icon={faSearch} className="form-control__Icon" />
      <DebounceInput
        minLength={3}
        debounceTimeout={300}
        value={value}
        className="form-control"
        placeholder="Search for a book..."
        onChange={changeHandler} 
      />
      <FontAwesomeIcon icon={faBook} className="form-control__ListIcon" />
      {
        data.length > 0 &&
          <ul className="PrimarySearch-Result shadow-sm">
            {
              data.map(result => (
                <li 
                  key={result.id}
                  onClick={() => clickHandler(result.id)}
                >
                  <SearchItem title = {result.volumeInfo.title} author = {result.volumeInfo.authors && result.volumeInfo.authors} publisher = {result.volumeInfo.publisher && result.volumeInfo.publisher} publishedDate = {result.volumeInfo.publishedDate && result.volumeInfo.publishedDate} />
                </li>
              ))
            }
          </ul>
      }
    </div>
  );
}

export default SearchBar;