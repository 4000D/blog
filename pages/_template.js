import React from 'react'
import { Link } from 'react-router'
import { Grid, Row, Col } from 'react-bootstrap'
import { prefixLink } from 'gatsby-helpers'
import { rhythm, scale } from 'utils/typography'
import { config } from 'config'
import update from 'immutability-helper'
import groupBy from 'lodash/groupBy'

import 'styles/app.scss'

import Header from 'components/Header/Header'
import Sidebar from 'components/Sidebar/Sidebar'

class App extends React.Component {
  state = {
    pages: [],
    categories: [], // { name, topics }
  }

  componentDidMount() {
    const pages = this.props.route.pages || []
    const data = pages
      .filter(page => page.data.category && page.data.topic)
      .map(page => ({
        category: page.data.category,
        topic: page.data.topic,
      }))
    const categories = groupBy(data, 'category')

    this.setState(update(this.state, {
      pages: { $set: pages },
      categories: { $set: categories }
    }))
  }

  render() {
    console.log(this);
    const { categories } = this.state
    const { location, children } = this.props
    return (
      <div>
        <Header />

        <Grid>
          <Row>
            <Col sm={2}>
              { categories && <Sidebar categories={categories} />}
            </Col>
            <Col sm={10} style={{
                backgroundColor: 'green'
              }}>
              { children }
            </Col>
          </Row>
        </Grid>

      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default App
