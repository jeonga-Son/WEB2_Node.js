// sample.txt 파일이 있는 폴더까지 들어와서 node를 실행해야 된다.
// 현재 위치하는 directory에서 sample.txt 파일을 찾는다.

const fs = require("fs");
fs.readFile("sample.txt", "utf8", function (err, data) {
  console.log(data);
});
