

function getTimeCurrent() {
  let today = new Date()
  let date =  today.getDate()+ '-' + (today.getMonth() + 1) + '-' + today.getFullYear()
  return date
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const listSentence =[
  {
    sentence: 'Lo thắng người thì loạn, lo thắng mình thì bình',
    author: 'Lão Tử'
  },
  {
    sentence: 'Nếu muốn được tất cả, phải từ bỏ tất cả',
    author: 'Lão Tử'
  },
  {
    sentence: 'Hiểu người là khôn, hiểu được mình mới là khôn thật sự',
    author: 'Lão Tử'
  },
  {
    sentence: 'Nếu biết vạn vật đều thay đổi, thì bản thân không nên cố nắm giữ điều chi',
    author: 'Lão Tử'
  },
  {
    sentence: 'Ai vội vàng tiến lên phía trước đều không thể đi xa',
    author: 'Lão Tử'
  },
  {
    sentence: 'Ai muốn hiển thị mình sẽ tự làm lu mờ bản thân',
    author: 'Lão Tử'
  },
  {
    sentence: 'Ai muốn chứng thực bản thân sẽ không tự biết bản thân mình là ai',
    author: 'Lão Tử'
  },
  {
    sentence: 'Ai muốn ước chế người khác thường không tự ước chế bản thân mình',
    author: 'Lão Tử'
  },
  {
    sentence: 'Không còn sự đối chọi, ma quỷ tự tiêu tan',
    author: 'Lão Tử'
  },
  {
    sentence: 'Nếu biết nhìn vào tâm mình, anh có thể tìm thấy tất cả các câu trả lời',
    author: 'Lão Tử'
  },
  {
    sentence: 'Nhu thắng cương, tĩnh thắng động',
    author: 'Lão Tử'
  },
  {
    sentence: 'Hãy để mọi chuyện tùy kỳ tự nhiên',
    author: 'Lão Tử'
  },
  {
    sentence: 'Nếu người muốn co lại, trước hết hãy cho phép nó duỗira. Nếu người muốn từ bỏ, hãy cho phép nó nhảy xuất ra. Nếu người muốn có điềugì, trước hết phải cho đi thứ đó',
    author: 'Lão Tử'
  },
  {
    sentence: 'Những khởi đầu tốt đẹp thường được ngụy trang thành một đoạn kết bi thảm',
    author: 'Lão Tử'
  },
  {
    sentence: 'Chú tâm đến sự công nhận của người khác rồi người sẽ trở thành tù nhân của chính họ',
    author: 'Lão Tử'
  },
  {
    sentence: 'Nếu một người có thể nhận ra mình không thiếu thứ gì, cả thiên hạ đã thuộc về người đó',
    author: 'Lão Tử'
  },
  {
    sentence: 'Vô hình vô tướng là niềm an lạc nhất',
    author: 'Lão Tử'
  },
  {
    sentence: 'Bậc trí tuệ là người biết những gì mình không biết',
    author: 'Lão Tử'
  },
  {
    sentence: 'Khi bạn hài lòng đơn giản là chính mình, không so sánh hay cạnh tranh với ai, tất cả mọi người sẽ tôn trọng bạn',
    author: 'Lão Tử'
  },
  {
    sentence: 'Tự biết mình là người sáng suốt. Thắng được người là có sức mạnh. Thắng được mình là kiên cường',
    author: 'Lão Tử'
  },
  {
    sentence: 'Biết người là trí, biết mình là sáng',
    author: 'Lão Tử'
  },
  {
    sentence: 'Hễ còn có lòng ham muốn thì chỉ biết trước được cái hẹp hòi biểu hiện ra bên ngoài chứ không biết được cái vi diện sâu ở bên trong',
    author: 'Lão Tử'
  },
  {
    sentence: 'Lời thành thật thì không đẹp; Lời đẹp thì không thành thật',
    author: 'Lão Tử'
  },
  {
    sentence: 'Tấm gương sáng, bụi bặm chẳng làm dơ được. Tinh thần trong, lòng hàm muốn chẳng dính vô được',
    author: 'Lão Tử'
  },
  {
    sentence: 'Biết đủ là đủ, tức là đủ. Biết nhàn là nhàn tức là nhàn',
    author: 'Lão Tử'
  },
  {
    sentence: 'Hạnh phúc sinh ra trong đau khổ, đau khổ giấu mình trong hạnh phúc',
    author: 'Lão Tử'
  },
  {
    sentence: 'Ai vâng lời liều, hứa liều, tất nhiên khó lòng đúng hẹn',
    author: 'Lão Tử'
  }
]

export {getTimeCurrent,listSentence,getRandomInt}