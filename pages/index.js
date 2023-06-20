import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import fetch from 'isomorphic-unfetch';

import { Layout, SearchBar, BookDetails } from '../components';

const Homepage = () => {
  const [treatise, setTreatise] = useState({
    keyword: '',
    items: [],
    item: {}
  });

  // Search book by keyword
  const searchHandler = ( e ) => {
    const keyword = e.target.value;

    if (keyword) {
      fetch(`${process.env.apiUrl}/volumes?q=${keyword}&maxResults=5`)
        .then( res => res.json() )
        .then( data => {
          if (data.totalItems > 0) {
            setTreatise({ 
              ...treatise,
              keyword: keyword,
              items: data.items
            });
          }
        })
        .catch( (err) => console.log(err) );
    } else {
      setTreatise({ 
        ...treatise,
        items: [] 
      });
    }
  }

  // Get specific treatise
  const getTreatiseHandler = ( id ) => {
    const { items } = treatise;
    const targetItem = items.filter(item => { return item.id === id })[0];
    
    setTreatise({
      keyword: '',
      items: [],
      item: targetItem
    });
  }

  const isEmptyObject = ( obj ) => {
    return Object.keys(obj).length === 0;
  }

  const addBooklist = () => {
    console.log(item)
  }

  const { keyword, items, item } = treatise;
  
  return (
    <Layout>
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <SearchBar
              value={keyword}
              data={items}
              changeHandler={searchHandler}
              clickHandler={getTreatiseHandler}
            />
            {
              isEmptyObject(item) ? <></> : <BookDetails data={item} addBooklist = {addBooklist}/>
            }
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Homepage;