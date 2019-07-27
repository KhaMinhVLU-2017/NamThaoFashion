import React from 'react'
import { Col, Row, Container } from 'reactstrap'

function Footer() {
  return (
    <Container>
      <Col lg='12' md='12' sm='12' xs='12'>
        <Row className='footer-body'>
          <Col lg='6' md='6' sm='12' xs='12'>
            <h5>Thông tin liên hệ:</h5>
            <ul className='footer-ul'>
              <li><strong>Địa chỉ: </strong> Đường 30/4, Phường 1, Thị Xã Cai Lậy, Tỉnh Tiền Giang</li>
              <li><strong>Liên hệ: </strong> namthaofashion@gmail.com</li>
            </ul>
          </Col>
          <Col lg='6' md='6' sm='12' xs='12'>
            <h5>Google map</h5>
            <iframe className='footer-iframe' title='NamThao' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d291.6632306402979!2d106.11965334715337!3d10.410688775407538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xea175df6fe5d9efc!2zU2hvcCBHacOgeSBEw6lwIE5hbSBUaOG6o28!5e0!3m2!1sen!2s!4v1564235205789!5m2!1sen!2s"></iframe>
          </Col>
        </Row>
      </Col>
    </Container>
  )
}

export default Footer
