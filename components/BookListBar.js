import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Image } from 'react-bootstrap';

const BookListBar = (props) => {
    const classNames = props.showBookListBar ? '' : 'hiddenListBar';
    const booklists = Array.from(props.booklist);
    const toggleBookListBar = props.toggleBookListBar;

    const isEmpty = (obj) => {
        return Object.keys(obj).length === 0;
    };

    return (
        <div className={`Booklistbar ${classNames}`}>
            {props.showBookListBar && 
            <div className="BooklistbarHead">
                <div className='BooklistbarHead-Gradient'>
                    <p>Favourite</p>
                </div>
                <FontAwesomeIcon icon={faWindowClose} onClick={toggleBookListBar}/>
            </div>
            }
            {props.showBookListBar && booklists.length > 0 && (
                <ul className="Booklistbar-List shadow-sm">
                    {booklists.map(result => {
                        const volumeInfo = result.volumeInfo;
                        let imageLink = './static/empty-cover.jpeg';

                        if (volumeInfo.imageLinks !== undefined && !isEmpty(volumeInfo.imageLinks)) {
                            imageLink = volumeInfo.imageLinks.thumbnail;
                        }

                        return (
                            <li 
                                key={result.id}
                            >
                                <Row>
                                    <Col md="6">
                                        <Image src={imageLink} thumbnail />
                                    </Col>
                                    <Col md="6" className='title'>{result.volumeInfo.title}</Col>
                                </Row>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}

export default BookListBar;
