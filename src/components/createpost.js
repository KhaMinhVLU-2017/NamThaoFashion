import React, { Component } from 'react'
import Titlesector from './titlesector'
import { Row, Form, FormGroup, Label, Input, Col, Button } from 'reactstrap'
import SimpleMDE from "react-simplemde-editor"

class CreatePost extends Component {
  constructor(props) {
    super(props)
    this.state = { content: '', imagePreviewUrl: '', file: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleImage = this.handleImage.bind(this)
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
    return (
      <>
        <Titlesector title='Create Blog' />
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
            <Col xs='12' sm='12' md='12'>
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

export default CreatePost

