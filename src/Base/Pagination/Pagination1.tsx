import React from 'react'
import { Pagination } from 'react-bootstrap'

interface Props {
    pageCount: number;
    setPageCount: React.Dispatch<React.SetStateAction<number>>;
    todosTotalPage: number;
}

const Pagination1 = ({ pageCount, setPageCount, todosTotalPage }: Props) => {

    let items = [];
    for (let number = 1; number <= todosTotalPage; number++) {
        items.push(
            <Pagination.Item onClick={() => { setPageCount(number) }} key={number} active={number === pageCount}>
                {number}
            </Pagination.Item>,
        )
    }

    const handleFirstPg = () => {
        setPageCount(1)
    }

    const handlePrevPg = () => {
        setPageCount(prev => prev - 1)
    }

    const handleNextPg = () => {
        setPageCount(prev => prev + 1)
    }

    const handleLastPg = () => {
        setPageCount(todosTotalPage)
    }

    return (
        <Pagination className='pt-3'>
            <Pagination.First onClick={handleFirstPg} disabled={pageCount === 1 ? true : false} />
            <Pagination.Prev onClick={handlePrevPg} disabled={pageCount === 1 ? true : false} />
            {items}
            <Pagination.Next onClick={handleNextPg} disabled={(pageCount === todosTotalPage || todosTotalPage === 0 || todosTotalPage === 1) ? true : false} />
            <Pagination.Last onClick={handleLastPg} disabled={(pageCount === todosTotalPage || todosTotalPage === 0 || todosTotalPage === 1 ? true : false)} />
        </Pagination>
    )
}

export default Pagination1