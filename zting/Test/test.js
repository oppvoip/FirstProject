//<div id="foo\bar"></div>
//<div id="foo:bar"></div>

console.log('#foo\bar')             // "#fooar" ('\b'는 백스페이스 컨트롤 문자)
document.querySelector('#foo\bar')  // 일치하는 요소 없음

console.log('#foo\\bar')            // "#foo\bar"
console.log('#foo\\\\bar')          // "#foo\\bar"
document.querySelector('#foo\\bar') // 첫 번째 <div>

document.querySelector('#foo:bar')   // 일치하는 요소 없음
document.querySelector('#foo\\:bar') // 두 번째 <div>