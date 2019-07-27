import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { Form, FormGroup, Label, Input, Button,FormFeedback,Alert } from 'reactstrap'
import axios from 'axios'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: {
        value: ''
        , valid: false
        , invalid: false
      }, passsword: {
        value: ''
        , valid: false
        , invalid: false
      }, fullname: {
        value: ''
        , valid: false
        , invalid: false
      },
      screenInvalid:false,
      messageInvalid:''
    }
    this.onHandlerChange = this.onHandlerChange.bind(this)
    this.submitServer = this.submitServer.bind(this)
  }
  onHandlerChange(e) {
    let { id, value } = e.target
    let cLength = value.length
    //Modified
    let meoObj = this.state[id]

    if (cLength < 5) {
      meoObj.valid = false
      meoObj.invalid = false
      this.setState({ [id]: meoObj })
    }
    if (cLength > 5) {
      meoObj.valid = true
      meoObj.invalid = false
      this.setState({ [id]: meoObj })
    }
    if (cLength > 30) {
      meoObj.valid = false
      meoObj.invalid = true
      this.setState({ [id]: meoObj })
    }
    meoObj.value = value
    this.setState({ [id]: meoObj })
  }
  submitServer(){
    let self = this

    let formdata = new FormData()
    formdata.set('Password',this.state.passsword.value)
    formdata.set('Username',this.state.username.value)
    axios({
      url: '/Account/login',
      baseURL: 'http://localhost:54355/api/',
      method: 'post',
      data:formdata
    })
    .then(res => {
      let {status,message} = res.data
      if(status===200) {
        let {token,fullname} = res.data
        localStorage.setItem('_Fullname',fullname)
        localStorage.setItem('_Token',token)
      }else {
        self.setState({screenInvalid: true,messageInvalid:message})
      }
    })
    .catch(err => {
      console.log(err)
    })
  }
  render() {
    let validUsername = this.state.username.valid
    let validPassword = this.state.passsword.valid
    return (
      <Row>
        <Col className='bg-register' md='6' sm='6' xs='12'></Col>
        <Col md='6' sm='6' xs='12'>
          <div className='register-form'>
            <p className='register-title'>Login</p>
            <Form>
              <FormGroup>
                <Label >Username</Label>
                <Input invalid={this.state.username.invalid} valid={this.state.username.valid} id='username' value={this.state.username.value} onChange={this.onHandlerChange} />
                <FormFeedback>Oh noes! that field not too 30 char</FormFeedback>
              </FormGroup>
            </Form>
            <Form>
              <FormGroup>
                <Label >Password</Label>
                <Input type='password' invalid={this.state.passsword.invalid} valid={this.state.passsword.valid} id='passsword' value={this.state.passsword.value} onChange={this.onHandlerChange} />
                <FormFeedback>Oh noes! that field not too 30 char</FormFeedback>
              </FormGroup>
            </Form>
            {this.state.screenInvalid&&<Alert color='danger'>{this.state.messageInvalid}</Alert>}
            <p className='float-right'>
              <Button outline color='danger'>Cancel</Button>
              &ensp;
              {validUsername && validPassword ?<Button outline onClick={this.submitServer} color='success'>Login</Button>
              :<Button outline color='success' disabled>Login</Button>}
            </p>
          </div>
        </Col>
      </Row>
    )
  }
}

export default Login