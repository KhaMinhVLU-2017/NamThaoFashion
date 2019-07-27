import React, { Component } from 'react'
import Titlesector from './titlesector'
import { Col, FormGroup, Label, Input, Button } from 'reactstrap'
import ImgVT from '../images/vungtau.jpg'

class Detail extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    // eslint-disable-next-line
    let { id } = this.props.match.params//get ID params
  }
  render() {
    return (
      <>
        <Titlesector title='Blog' />
        <Col className='article' xs='12' md='12' sm='12'>
          <div className='blog-detail'>
            <h2>Dalat the city many dreams</h2>
            <p><em>&ensp;JudasFate</em>&ensp;-&ensp;27-7-2019</p>
            <p className='blog-sapo'>SapoSapoSapoSapSaSapoSapoSapoSapoSapoSapoSapo   SapoSapopoSapoSapoSapoSapoSapoSapoSapoSapo
                oSapoSapoSapoSapoSapoSapo</p>
            <img src={ImgVT} width="600px;" alt='Place' />
            <p className='blog-content'>During 14th and 15th centuries, the cape that would become Vũng Tàu
              was an area which European trading ships visited regularly.
              The ships' activities inspired the name Vũng Tàu, which means
              "ship's bay" or "anchorage" in Vietnamese. Portuguese navigators
              who passed Vũng Tàu many times named it Sant'Iago after Saint James.
              The French, who invaded and took over Vietnam in the mid-19th century
              named it Cap Saint Jacques (Cape St. James.) The cliff of Vũng Tàu is
                 now called Mũi Nghinh Phong (literally means “Cape of greeting the wind”).</p>
            <Col xs='12' sm='12' md='12' className='main-comment'>
              <FormGroup className='blog-comment'>
                <Label for="Comment">Comment</Label>
                <Input type="textarea" name="Comment" id="Comment" />
                <p className='float-right'>
                  <Button color='success'>Send</Button>
                </p>
              </FormGroup>
              <FormGroup className='blog-commented'>
                <p><strong>JudasFate: </strong>The perfect</p>
              </FormGroup>
            </Col>
          </div>
        </Col>
      </>
    )
  }
}

export default Detail
