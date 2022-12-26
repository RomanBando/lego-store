import './Pagination.css'

export default function Pagination({numOfPages, currentPage, setCurrentPage}) {
  const pageNumbers = Array(numOfPages).fill().map(
    (elem, index) => index + 1
  );

  function goToNextPage(e) {
    e.preventDefault();
    if (currentPage !== numOfPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function goToPrevPage(e) {
    e.preventDefault();
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <nav className="pagination-color">
      <ul className="pagination">
        <li className="page-item">
          <a 
            className="page-link" 
            href="/#" 
            onClick={goToPrevPage}          
          >Previous</a>
        </li>
        {pageNumbers.map(pageNum => (
          <li 
            className={`page-item ${currentPage === pageNum ? 'active': ''}`}          
            key={pageNum}>
            <a 
              className="page-link" 
              href="/#"
              onClick={e => {
                e.preventDefault();
                setCurrentPage(pageNum);
              }}
            >
              {pageNum}
            </a>
          </li>
        ))}       
        <li className="page-item">
          <a 
            className="page-link" 
            href="/#"
            onClick={goToNextPage}
          >Next</a>
        </li>
      </ul>
    </nav>
  )

}