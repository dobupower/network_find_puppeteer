📡 Network Payload Finder (with Puppeteer)
크롬 개발자 도구(Network 탭)에서 수많은 API 요청 중 특정 POST 요청의 Payload (body) 를 일일이 찾기 어려울 때 유용한 자동화 스크립트입니다. Puppeteer를 사용하여 웹 페이지를 자동으로 열고, 네트워크 요청 중 POST 요청의 Payload 정보를 수집합니다.

🔧 주요 기능
Puppeteer로 웹페이지를 자동 브라우징

모든 POST 요청의 Payload(body) 데이터를 콘솔에 출력

반복적인 수작업 없이 API 요청 내용 확인 가능

▶️ 실행 방법
1. 의존성 설치
bash
복사
편집
npm install puppeteer
2. 스크립트 실행
bash
복사
편집
node network_find_puppeteer.js
스크립트가 실행되면, 설정된 URL로 접속한 뒤, 페이지 내 POST 요청의 Payload가 자동으로 출력됩니다.

📝 사용 예시
network_find_puppeteer.js 파일 내부에 원하는 웹사이트 URL이나 대기 시간 등의 설정을 직접 수정해서 사용하세요.

예:

js
복사
편집
const targetUrl = 'https://example.com'; // 원하는 웹사이트 URL로 변경
📁 참고
이 스크립트는 디버깅, 리버스 엔지니어링, API 구조 분석 등을 위해 사용됩니다.

사용 시 해당 웹사이트의 이용 약관을 위반하지 않도록 주의해주세요.
