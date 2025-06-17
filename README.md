<h1 align="center">📡 Network Payload Finder (with Puppeteer)</h1>

<p align="center">
  <em>크롬 개발자 도구에서 POST 요청의 Payload를 자동으로 수집하는 툴</em>
</p>

---

## ✅ 개요

크롬 개발자도구(Network 탭)에서 API 요청이 많은 경우, 특정 POST 요청의 **Payload (body)** 를 일일이 찾기 번거롭습니다.  
이 스크립트는 Puppeteer를 활용해 자동으로 웹 페이지를 열고, POST 요청의 Payload를 콘솔에 출력해줍니다.

---

## 🔧 주요 기능

- 🧠 Puppeteer로 웹페이지 자동 열기  
- 🛰️ 모든 POST 요청의 Payload(body) 데이터 추출  
- ⏱️ 반복적인 수작업 없이 자동화된 정보 수집

---

## ▶️ 사용 방법

### 1. 저장소 클론 또는 파일 준비

`network_find_puppeteer.js` 파일을 프로젝트 디렉터리에 준비합니다.

### 2. 의존성 설치

```bash
npm install puppeteer

### 3. 스크립트 실행

```bash
node network_find_puppeteer.js
