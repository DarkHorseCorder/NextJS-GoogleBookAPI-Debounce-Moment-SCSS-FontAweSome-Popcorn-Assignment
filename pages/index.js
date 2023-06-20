import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import fetch from 'isomorphic-unfetch';

import { Layout, SearchBar, BookDetails, BookListBar } from '../components';

const Homepage = () => {
  const [treatise, setTreatise] = useState({
    keyword: '',
    items: [],
    item: {}
  });

  const [booklist, setBookList] = useState(new Set());
  const [showBookListBar, setShowBookListBar] = useState(false);
  const [focusSearch, setFocusSearch] = useState(false);

  const toggleBookListBar = () => {
    setShowBookListBar(!showBookListBar); // Toggle the visibility
  };  

  // Search book by keyword
  const searchHandler = (e) => {
    const keyword = e.target.value;

    if (keyword) {
      fetch(`${process.env.apiUrl}/volumes?q=${keyword}&maxResults=5`)
        .then((res) => res.json())
        .then((data) => {
          if (data.totalItems > 0) {
            setTreatise({ 
              ...treatise,
              keyword: keyword,
              items: data.items
            });
          }
        })
        .catch((err) => console.log(err));
    } else {
      setTreatise({ 
        ...treatise,
        items: [] 
      });
    }
  };

  // Get specific treatise
  const getTreatiseHandler = (id) => {
    const { items } = treatise;
    const targetItem = items.filter(item => item.id === id)[0];
    
    setTreatise({
      keyword: '',
      items: [],
      item: targetItem
    });
  };

  const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0;
  };

  const addBooklist = () => {
    setBookList(prevBookList => new Set([...prevBookList, treatise.item])); // Update booklist as a new Set with added item
  };

  const handleFocus = () => {
    setFocusSearch(true);
  };

  const handleBlur = () => {
    setFocusSearch(false);
  };

  const { keyword, items, item } = treatise;

  return (
    <div>
      <BookListBar showBookListBar={showBookListBar} booklist={booklist} toggleBookListBar={toggleBookListBar} />
      <Layout showBookListBar={!showBookListBar} focusSearch={!focusSearch}>
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <SearchBar
                value={keyword}
                data={items}
                booklist={booklist}
                changeHandler={searchHandler}
                clickHandler={getTreatiseHandler}
                onFocus={handleFocus}
                onBlur={handleBlur}
                toggleBookListBar={toggleBookListBar}
              />
              {isEmptyObject(item) ? <></> : <BookDetails data={item} addBooklist={addBooklist} />}
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
};

export default Homepage;
