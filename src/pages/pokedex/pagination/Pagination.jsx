import React from 'react'; 

const Pagination = ({ page, maxPages, setPage }) => {

  const pagesPerBlock = 6
  const currentBlock = Math.ceil(page / pagesPerBlock)
  const maxBlock = Math.ceil(maxPages / pagesPerBlock)

  const arrPages = []
  const initialPage = (currentBlock - 1) * pagesPerBlock + 1
  const finalPage = maxBlock === currentBlock? maxPages :currentBlock * pagesPerBlock

  for(let i = initialPage; i <= finalPage; i++){
    arrPages.push(i)
  }

  const handleClick = (e) => {
    //e.target.style = 'backgroundColor: #D93F3F;' 
    setPage(e.target.value)
  }

  return (
    <ul className='pagination'>
      <li 
        className='next_previus' 
        onClick={() => {page > 1? setPage(page - 1) : setPage(1)}}>&#60;</li>
      {
        arrPages.map(e => <li className={`page ${page === e && 'current_page'}`} onClick={handleClick} value={e} key={e}></li>)
      }
      <li className='next_previus' onClick={() => page < maxPages && setPage( page + 1 )}>&#62;</li>
    </ul>
  )
}

export default Pagination 

