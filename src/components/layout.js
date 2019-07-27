import React from 'react'
import Header from './header'
import { Row } from 'reactstrap'
import Footer from './footer'
import Homepage from './homepage'
import CreatePost from './createpost'
import { Route } from 'react-router-dom'
import Detail from './detail'
import Update from './update'
//import Unsplash from 'unsplash-js'

class Layout extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props)
    // this.unsplash = new Unsplash({
    //   applicationId: "83cc75058db0bc00ee47db02f84cebea6976094a4b6ffedf666e3992b09e44a3",
    //   secret: "6debc8ca8f155739459b1b1e52b8a53f02405d400f8fe2d4d33fdb6f87b808eb"
    // });
  }
  componentDidMount() {
    // this.unsplash.photos.getRandomPhoto({ collections:['fashion'] })
    //   .then(e => e.json())
    //   .then(json => {
    //     console.log(json)
    //     // Your code
    //   })
  }
  render() {
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
          <Route exact path={`${this.props.match.path}`} component={Homepage} />
          <Route path={`${this.props.match.path}/create`} component={CreatePost} />
          <Route path={`${this.props.match.path}/detail/:id`} component={Detail} />
          <Route path={`${this.props.match.path}/edit/:id`} component={Update} />
        </Row>
        <Row className='footer'>
          <Footer />
        </Row>
      </>
    )
  }
}

export default Layout