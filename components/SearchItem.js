const SearchItem = ( props ) => {
    const { title, author, publisher, publishedDate } = props;

    return (
        <div>
            <p className="searchItemTitle">{title}</p>
            <div className="searchItemDetail">
                <p>{author && author.join(', ')}</p>
                <p>{publisher && publisher}<span>  {publishedDate && publishedDate}</span></p>
            </div>
        </div>
    )
}

export default SearchItem;