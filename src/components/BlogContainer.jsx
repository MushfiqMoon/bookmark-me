import { useEffect, useState } from 'react'
import { Blogs } from './Blogs';
import { Col, Container, Row, Spinner } from 'react-bootstrap';

export const BlogContainer = ({ handleReadCount, handleBookmark, selected }) => {

  const [blogData, setBlogData] = useState()


  useEffect(() => {
    fetch('/fakeData.json')
      .then(res => res.json())
      .then(data => setBlogData(data))
      .catch(error => console.error(error));
  }, [])

  return (
    <>
      <Container>
        <Row>

          {
            blogData
              ? blogData.map(blogs => {
                // for highlighting the last selected item
                let isSelected = (blogs.id === selected)
                return (
                  <Col lg={12} key={blogs.id}>
                    <Blogs
                      blogs={blogs}
                      isSelected={isSelected}
                      handleReadCount={handleReadCount}
                      handleBookmark={handleBookmark} />
                  </Col>
                )
              }
              )
              :
              <div className="d-flex justify-content-center">
                <Spinner className='my-5' animation="grow" />
              </div>
          }

        </Row>
      </Container>

    </>
  )
}
