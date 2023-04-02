import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import { NavItem } from './components/NavItem'
import { BlogContainer } from './components/BlogContainer'
import { SideBar } from './components/SideBar'
import { useState } from 'react'
import { ReadCounter } from './components/ReadCounter'
import { toast } from 'react-hot-toast'

function App() {
  const [readCount, setReadCount] = useState(0)
  const [bookmarkList, setBookmarkList] = useState([]);
  const [selected, setSelected] = useState()

  const handleReadCount = (time, id) => {
    setSelected(id)
    setReadCount(prev => prev + time)
  }

  const handleBookmark = (id, title) => {
    const bookmarkObj = {
      id,
      title
    }
    const newBookmark = [...bookmarkList, bookmarkObj]
    setBookmarkList(newBookmark)

    const exist = newBookmark.filter(item => item.id === id)

    if (exist.length > 1) {
      toast('Article already added on your bookmark.', {
        icon: '🔖',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        }
      })
    }
  }

  return (
    <>
      <div className="sticky-top">
        <NavItem />
      </div>

      <Container>
        <Row>
          <Col lg={8}>
            <BlogContainer
              handleReadCount={handleReadCount}
              handleBookmark={handleBookmark}
              selected={selected}
            />
          </Col>
          <Col lg={4}>
            <div className="sticky-top">
              <ReadCounter readCount={readCount} />
              <SideBar bookmarkList={bookmarkList} />
            </div>
          </Col>
        </Row>
      </Container>
    </>

  )
}

export default App
