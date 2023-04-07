const express = require('express');
const app = express();

// 정적 파일을 제공할 디렉토리 설정
app.use(express.static('public'));

// 루트 URL에 접속했을 때 현재 시간을 반환하는 라우트 설정
app.get('/', (req, res) => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const date = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeString = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds;

  // 클라이언트 측 JavaScript 코드를 응답
  res.send(`
    <h1>현재 시간</h1>
    <h2 id="time">${timeString}</h2>
    <script>
      // 1초마다 페이지를 자동으로 갱신
      setInterval(() => {
        location.reload();
      }, 1000);
    </script>
  `);
});

// 서버 실행
app.listen(3000, () => console.log('서버가 시작되었습니다.'));
