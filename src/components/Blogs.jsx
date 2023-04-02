import React, { useState } from 'react'
import { Button, Card, Image, Spinner } from 'react-bootstrap'
import { FaBookmark } from "react-icons/fa";
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

export const Blogs = ({ blogs, handleReadCount, handleBookmark, isSelected }) => {
  const { id, imgBlog, title, tag, imgAvatar, writerName, publishDate, readTime } = blogs

  return (
    <>
      <Card
        bg={'secondary'}
        text={'white'}
        className="my-4"
      >
        <LazyLoadImage
          className='card-img-top'
          effect="blur"
          src={imgBlog} />
        <Card.Body>
          <div className='d-flex justify-content-between'>
            <div className="d-flex">
              <Image fluid roundedCircle thumbnail src={imgAvatar} alt="user-image" />
              <div className="ms-3">
                <span className='fw-bold'>{writerName}</span>
                <br />
                <span>{publishDate}</span>
              </div>
            </div>
            <div>
              <span className='me-2'>{readTime} minutes read</span>
              <span className='pointer text-warning' onClick={() => handleBookmark(id, title)}>
                <FaBookmark />
              </span>
            </div>
          </div>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {
              tag.map((t, i) => <Button key={i} size="sm" variant='warning' className='me-1 fst-italic'>#{t}</Button>)
            }
            <br />
          </Card.Text>
          {/* <Button variant="outline-light mt-3" onClick={() => handleReadCount(readTime)}>Mark as read</Button> */}
          <Button variant={isSelected ? "outline-dark mt-3" : "outline-light mt-3"} onClick={() => handleReadCount(readTime, id)}>Mark as read</Button>
        </Card.Body>
      </Card>
    </>

  )
}
