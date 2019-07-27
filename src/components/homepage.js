import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import Titlesector from './titlesector'
import ImgContent from '../images/content.jpg'
import ImgYeezy from '../images/yeezy.jpg'

class Homepage extends Component {
  render() {
    return (
      <>
        <Titlesector title='Thời trang & Cuộc sống' />
        <Col className='article' xs='12' md='12' sm='12' lg='12'>
          <Row className='content-row'>
            <Col className='content' xs='12' sm='6' md='12' lg='6'>
              <p className='content-title'>Thời Trang Nam Thảo</p>
              <p className='content-sapo'><em>JudasFate</em>&ensp;07-24-2019</p>
              <div className='content-body'>
                <ul>
                  <li><p>
                    Ngay từ những năm 2010 khi thời trang là thứ gì đó còn khá mới mẻ
                    đối với một số người dân ở địa phương. Bởi vì lúc đó việc mua sắm tại cửa hàng "Shop" nó là thứ
                    gì đó quá xa xỉ đối với họ thay vì phải đến shop thì họ có thể ra chợ như thường niên.
                </p></li>
                  <li><p>
                    Nhưng mọi chuyện không chỉ dừng lại ở việc trả tiền rồi mang hàng về dùng sau đó sản phẩm có bị
                    như thế nào đi nửa thì tự bản thân người mua phải chịu trách nhiệm, một số vấn đề về việc mặc cả hàng hoá
                    mua lầm giá trị của sản phẩm thường xuyên xảy ra, etc...
                </p></li>
                  <li>

                    <ul>
                      Nhận thấy được những vấn đề đó cửa hàng chúng tôi được thành lập nên với 3 tiêu chí chính
                      <li>Cam kết hàng chính hãng</li>
                      <li>Cam kết bán hàng đúng giá trị của sản phẩm</li>
                      <li>Bảo đảm dịch vụ hậu mãi về sau cho khách hàng (Chính sách)</li>
                    </ul>


                  </li>
                  <li>
                    <ul>
                      Cửa hàng chúng tôi có hơn 10 năm trong
                        hoạt động lĩnh vực thời trang bao gồm:
                        <li><strong>Giày dép nam nữ</strong></li>
                      <li><strong>Quần áo nữ</strong></li>
                    </ul>
                  </li>
                  <li>
                    <p><strong>Đặc biệt:</strong> cửa hàng chúng tôi chỉ bán hàng <strong>Offline</strong> xem tại cửa hàng.
                    </p>
                  </li>
                  <li>
                    <p><strong>Lưu ý: </strong> chúng tôi chỉ có đúng 1 website này. Bất cứ website nào khác nêu tên chúng tôi đều là giả mạo</p>
                  </li>
                </ul>
              </div>
              <p className='content-footer'>&reg; Nam Thao Fashion</p>
            </Col>
            <Col className='pad-0' xs='12' sm='6' md='12' lg='6'>
              <img className='img-resize' src={ImgYeezy} alt='Images' />
            </Col>
          </Row>
          <Row className='content-row'>
            <Col className='content' xs='12' sm='6' md='12' lg='6'>
              <p className='content-title'>Chính sách bảo hành hàng hoá</p>
              <p className='content-sapo'><em>JudasFate</em>&ensp;07-24-2019</p>
              <div className='content-body'>
                <ul>
                  <li>
                    Tình trạng sản phẩm <strong>"hao phí"</strong> sau sẽ không bảo hành:
                    <ul>
                      <li>Dép/Giày bị mòn đế</li>
                      <li>Dép/Giày bị bong tróc da</li>
                      <li>Dép/Giày bị duột do tác động từ bên ngoài</li>
                    </ul>
                  </li>
                  <li>
                    Tình trạng sản phẩm sau sẽ được bảo hành:
                    <ul>
                      <li>Dép/Giày mang bị hở keo</li>
                      <li>Dép/Giày bị bong chỉ làm hở giữa thân dép với đế</li>
                    </ul>
                  </li>
                  <li>
                    Như thế nào là <strong>hao phí</strong> ?
                    <ul>
                      <li>Hao phí là những thứ bạn sử dụng bị bào mòn theo thời gian</li>
                      <li><strong>Ví dụ: </strong> Bạn không thể bắt Apple đổi iphone mới cho bạn khi PIN bị chay</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Cam kết</strong> bảo hành keo cho Dép/Giày cho khách hàng trọn đời:
                    <ul>
                      <li>Đối với ngày thường nhận Dép/Giày bảo hành và trả khách khoảng từ:<strong> 3-->5 ngày</strong></li>
                      <li>Đối với ngày nghĩ nhận Dép/Giày bảo hành và trả khách khoảng từ: <strong>5 --> 7 ngày</strong></li>
                      <li>Đối với ngày Lễ (Tết) <strong>không nhận dép bảo hành</strong></li>
                    </ul>

                  </li>
                </ul>
              </div>
              <p className='content-footer'>&reg; Nam Thao Fashion</p>
            </Col>
            <Col className='pad-0' xs='12' sm='6' md='12' lg='6'>
              <img className='img-resize' src={ImgContent} alt='Images' />
            </Col>
          </Row>
        </Col>
      </>
    )
  }
}

export default Homepage