import React from 'react'
import Header from './header'
import { Row } from 'reactstrap'
import Footer from './footer'
import Homepage from './homepage'
import CreatePost from './createpost'
import {  Route } from 'react-router-dom'
import Detail from './detail'
import Update from './update'

function Layout(props) {
  return (
    <>
      <Row>
        <Header />
      </Row>
      <Row>
        <div className='body-bg'>
          <div className='bg-center'>
            <h1 className='bg-title'>Để không ai có thể thay thế, bạn phải luôn luôn khác biệt</h1>
          </div>
        </div>
          <Route exact path={`${props.match.path}`} component={Homepage} />
          <Route path={`${props.match.path}/create`} component={CreatePost} />
          <Route path={`${props.match.path}/detail/:id`} component={Detail} />
          <Route path={`${props.match.path}/edit/:id`} component={Update} />
      </Row>
      <Row className='footer'>
        <Footer />
      </Row>
    </>
  )
}

export default Layout