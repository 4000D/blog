import React from 'react'
import { Link } from 'react-router'
import { Grid, Row, Col } from 'react-bootstrap'
import { rhythm, scale } from 'utils/typography'

const Topic = ({topic}) => (
  <div>
    Topic: {topic}
  </div>
)

const Category = ({name, topics}) => {
  return (
    <div>
      {name}
      {
        topics && topics.map(
          ({topic}, i) => <Topic key={i} topic={topic} />
        )
      }
    </div>
  )
}

const Sidebar = ({ categories }) => (
  <div style={{
      backgroundColor: 'blue'
    }}>
    {
      categories && Object.keys(categories).map(
        (category, i) => <Category key={i} name={category} topics={categories[category]} />
      )
    }
  </div>
)

export default Sidebar
