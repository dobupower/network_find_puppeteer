const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({
    headless: false, // 이 옵션을 추가!
    // 필요시 window 크기 등도 지정 가능
    // args: ['--window-size=1200,900']
  });
  const page = await browser.newPage();

  page.on('response', async (response) => {
    const request = response.request();
    if (
      request.method() === 'POST' &&
      request.postData() &&
      request.postData().includes('SellerCode=uc-0801')
    ) {
      const responseBody = await response.text();
      const status = response.status();
      console.log('응답 URL:', response.url());
      console.log('응답 상태:', status);
      if (status >= 200 && status < 300) {
        console.log('✅ 요청 성공!');
      } else {
        console.log('❌ 요청 실패!');
      }
      console.log('응답 내용:', responseBody);
    }
  });
  

  await page.goto('https://tamazi-shopmanager-cdb6f.web.app/stockMasterDistribution/');
  // 이후 자동화 또는 수동 조작
})();
