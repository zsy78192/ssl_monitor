// 引入
const getSSLCertificateExpirationDate = require('./ssl');

// 测试
test('getSSLCertificateExpirationDate', async () => {
    let res = await getSSLCertificateExpirationDate('www.gerinn.com');
    console.log(res);

});