import { SortIcon } from '@/assets/icons';
import React from 'react'

function SmallSort() {
    const [showSort, setShowSort] = useState(false);

  return (
    <>
     <button onClick={()=>setShowSort(!showSort)}>
        <SortIcon />
      </button>
      {showSort && (
        <Modal setShowSort={setShowSort}>
          <ModalDiv>
            <div className="title">Sort by</div>
            <SortBy />
          </ModalDiv>
        </Modal> )
}
    </>
  )
}

export default SmallSort
