import React from 'react'
import { useDispatch } from "react-redux";
import { setCurrentPage } from '../store/filterFilmSlice/filterFilmSlice';

const Pagination: React.FC<{totalResult: string}> = ({totalResult}) => {
    const [page, setPage] = React.useState<number>(1)
    const dispatch = useDispatch()

    let allPage = Math.ceil(+totalResult / 10) 

    React.useEffect(() => {
        dispatch(setCurrentPage(page))
    }, [page])

    const nextPage = () => {
        if(page < allPage) {
            setPage(() => page + 1)
        }
    } 

    const previousPage = () => {
        if(page > 1) {
            setPage(() => page - 1)
        }
    } 

    const startPage = () => {
        setPage(1)
    } 

    const endPage = () => {
        setPage(allPage)
    } 

  return (
    <div className='pagination'>
        <span onClick={startPage}>&laquo;</span>
        <span onClick={previousPage}>&lt;</span>
        <p>{page}</p>
        <span onClick={nextPage}>&gt;</span>
        <span onClick={endPage}>&raquo;</span>
    </div>
  )
}

export default Pagination