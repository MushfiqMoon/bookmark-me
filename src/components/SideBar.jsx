import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { FaBookmark } from 'react-icons/fa'

export const SideBar = ({ bookmarkList }) => {

  return (
    <div className='mt-4 px-3 py-4 bg-dark rounded'>
      <h4 className='text-white mb-4'>Bookmarked Blogs : {bookmarkList.length}</h4>
      <ListGroup >
        {
          bookmarkList.map((bookmark, idx) =>
            <ListGroup.Item
              key={idx}
              variant="dark"
              className='p-3 fw-bold'>
              <span className='me-1 text-warning'>
                <FaBookmark />
              </span>
              {bookmark.title}
            </ListGroup.Item>)
        }
      </ListGroup>
    </div>
  )
}
