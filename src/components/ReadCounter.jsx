import React from 'react'
import { Card } from 'react-bootstrap'

export const ReadCounter = ({ readCount }) => {

  return (
    <Card
      bg={'dark'}
      text={'white'}
      className='mt-4'>
      <Card.Body >
        <Card.Title>Spent time on read : {readCount} {readCount === 0 ? 'Minute' :'Minutes'}</Card.Title>
      </Card.Body>
    </Card>
  )
}
