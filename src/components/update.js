import React, { Component } from 'react'
import Titlesector from './titlesector'
import {
  Row, Form, FormGroup, Label, Input, Col, Button,
  Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap'
import SimpleMDE from "react-simplemde-editor"

class Update extends Component {
  constructor(props) {
    super(props)
    this.state = { content: '', imagePreviewUrl: '', file: '' ,modal:false}
    this.handleChange = this.handleChange.bind(this)
    this.handleImage = this.handleImage.bind(this)
    this.toggle = this.toggle.bind(this)
  }
  toggle(){
    this.setState({modal: !this.state.modal})
  }
  handleChange(value) {
    this.setState({ content: value })
  }
  handleImage(e) {
    let file = e.target.files[0]
    let reader = new FileReader()
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }
  render() {
    // eslint-disable-next-line
    let { id } = this.props.match.params

    return (
      <>
        <Titlesector title='Update' />
        <Col className='article' xs='12' md='12' sm='12'>
          <Row>
            <Col xs='12' sm='6' md='6'>
              <Form>
                <FormGroup>
                  <Label for="title"><strong>Title</strong></Label>
                  <Input type="text" name="title" id="title" placeholder="Title" />
                </FormGroup>
                <FormGroup>
                  <Label for="sapo"><strong>Sapo</strong></Label>
                  <Input type="textarea" name="sapo" id="sapo" placeholder="Sapo" />
                </FormGroup>
                <FormGroup>
                  <Label for="file"><strong>Image</strong></Label>
                  <Input onChange={this.handleImage} type="file" name="file" id="file" />
                </FormGroup>
                <FormGroup>
                  <img className='imgThumnail' src={this.state.imagePreviewUrl} alt='Blog' />
                </FormGroup>
              </Form>
            </Col>
            <Col xs='12' sm='6' md='6'>
              <Form>
                <FormGroup>
                  <Label for="content"><strong>Content</strong></Label>
                  <SimpleMDE
                    id='simple-MDE'
                    onChange={this.handleChange}
                    value={this.state.content}
                    options={{
                      autofocus: true,
                      spellChecker: false
                    }}
                  />
                </FormGroup>
              </Form>
            </Col>
            <Col xs='6' md='6' sm='6'>
              <p className='float-left'>
                <Button color='danger' onClick={this.toggle}>Delete Blog</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} >
                  <ModalHeader toggle={this.toggle}>Are you remove it ?</ModalHeader>
                  <ModalBody>
                      Vung Tau city
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" onClick={this.toggle}>Cancel</Button>{' '}
                    <Button color="success" onClick={this.toggle}>Ok</Button>
                  </ModalFooter>
                </Modal>
              </p>
            </Col>
            <Col xs='6' sm='6' md='6'>
              <p className='float-right'>
                <Button color='danger'>Cancel</Button>
                &ensp;
              <Button color='success'>Create</Button>
              </p>
            </Col>
          </Row>
        </Col>
      </>
    )
  }
}

export default Update
