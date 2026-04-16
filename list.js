(function() {
    var secretApps = [
{img: './png/hygj.jpg', name: '汇赢国际', xurl: 'aHR0cHM6Ly9uY2djYS50cHJzbWkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDYyJnRvcElkPTEzNzMzJnNlbGZQbGFuSWQ9MTEzNw=='},
{img: './png/stgj.jpg', name: '胜天国际', xurl: 'aHR0cHM6Ly9sZWp2YS50cHJzbWkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDU4JnRvcElkPTk0MTcwMyZzZWxmUGxhbklkPTgyODczOQ=='},
{img: './png/cfgj.png', name: '超凡国际', xurl: 'aHR0cHM6Ly9wa2FqaW0uaGZqY2wuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDMyJnRvcElkPTQ5MDU3OTY='},
{img: './png/yh.png', name: '一号娱乐', xurl: 'aHR0cHM6Ly9nZnZneC5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD04MDAmcHQ9QTcyMzVCNjMtQjVFMy02RTNGLTlENTktOTMzRDI2NzBGMDE1'},
{img: './svg/ngty.svg', name: 'NG体育', xurl: 'aHR0cHM6Ly9udmptY2UuaGZqY2wuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDE5JnRvcElkPTEzNzc4ODg3'},
{img: './png/ltf.jpg', name: '新时代', xurl: 'aHR0cHM6Ly9kZXJlYXIuZm5icHN3LmNvbS9hcHAvcmVnaXN0ZXIucGhwP3NpdGVfaWQ9MTA1OSZ0b3BJZD05MzY2Mjkmc2VsZlBsYW5JZD04MDIyODg='},
{img: './svg/wd.svg', name: '问鼎娱乐', xurl: 'aHR0cHM6Ly9vbmtyY3kuZm5icHN3LmNvbS9hcHAvcmVnaXN0ZXIucGhwP3NpdGVfaWQ9MTAyMCZ0b3BJZD0zNTk1NTU3OQ=='},
{img: './png/dfgj.png', name: '巅峰国际', xurl: 'aHR0cHM6Ly9nZnZneC5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDMwJnRvcElkPTc0ODQyNDE='},
{img: './png/ffyl.png', name: '非凡娱乐', xurl: 'aHR0cHM6Ly9sbmNxYy5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDUwJnRvcElkPTE1NTE3Njc4NzM2Mzk2OTgmc2VsZlBsYW5JZD0zNzkwMjc1'},
{img: './png/bsj.jpg', name: '保时捷', xurl: 'aHR0cHM6Ly93eC5ndGx5c2MuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMzQ1MjMyNzUmdG9wSWQ9MTQ2NzA4MA=='},
{img: './png/gjr.jpg', name: '国际人', xurl: 'aHR0cHM6Ly90ei53eGdqcjUuY2MvYXBwL3JlZ2lzdGVyLnBocD9zaXRlX2lkPTIzMDQmdG9wSWQ9MTY3MDIwNg=='},
{img: './png/ztgj.png', name: '征途国际', xurl: 'aHR0cHM6Ly9wa2FqaW0uaGZqY2wuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDMxJnRvcElkPTM0MDMz'},
{img: './png/top1.png', name: 'Top1体育', xurl: 'aHR0cHM6Ly9sbmNxYy5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDUxJnRvcElkPTUyNzQxOQ=='},
{img: './png/sjgj.png', name: '赏金国际', xurl: 'aHR0cHM6Ly94anZ1ZWIuaGVmYXNoaXAuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDEwJnRvcElkPTMxMTMyMzU='},
{img: './png/yw28.jpg', name: '亿万28', xurl: 'aHR0cHM6Ly94anZ1ZWIuZm5icHN3LmNvbS9hcHAvcmVnaXN0ZXIucGhwP3NpdGVfaWQ9MTAxNyZ0b3BsZD02ODUxNzcxMDgwMzY4Nzgw'},
{img: './png/wc28.jpg', name: '旺财28', xurl: 'aHR0cHM6Ly9pemN2b2ouaGZqY2wuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDEyJnRvcGxkPTYxNjE3NzEwODAxNDAxNjc='},
{img: './png/jlgj.jpg', name: '君临国际', xurl: 'aHR0cHM6Ly90ZmFqbi5oY2p3ai5jb20vYXBwL3JlZ2lzdGVyLnBocD9zaXRlX2lkPTIwODEmdG9wSWQ9MjMyMTEmc2VsZlBsYW5JZD04NDU='},
{img: './png/xygj.jpg', name: '星耀国际', xurl: 'aHR0cHM6Ly9nZWR4cy5oY2p3ai5jb20vYXBwL3JlZ2lzdGVyLnBocD9zaXRlX2lkPTEwNTcmdG9wSWQ9NDM1MTc3MTA3MDAyMzc3Ng=='},
{img: './png/ng.png', name: 'NG国际', xurl: 'aHR0cHM6Ly8xMDMuNTQuNjAuMjI6ODg2Ni8jL2xpbms/YWxsd2luPWh4emM4Zm5sWmNFJTJCZ1RVcjBCUU13QSUzRCUzRA=='},
{img: './png/c7.png', name: 'C7', xurl: 'aHR0cHM6Ly8xMDMuMzkuMTguMjExOjc3ODgvIy9saW5rP2FsbHdpbj03UWpVRVhYa3NXd2E2ZGE2SlFFJTJCc2clM0QlM0Q='}
    ];

    var container = document.getElementById('xapes');
    if (!container) return;

    secretApps.forEach(function(app) {
        // 1. 创建元素
        var li = document.createElement('li');
        li.className = 'app-item'; // 只保留类名用于样式

        li.innerHTML = `
            <div class="app-icon"><img src="${app.img}"></div>
            <div class="app-name">${app.name}</div>
        `;

        li.onclick = function() {
            try {
                // 解码并跳转
                var targetUrl = atob(app.xurl.trim());
                window.open(targetUrl, '_blank');
            } catch (e) {
                console.error("解码失败:", e);
            }
        };

        // 4. 塞进容器
        container.appendChild(li);
    });
})();

window["document"]['getElementById']("3")['innerHTML'] = ("2026世界杯<br>点击查看赛程");
window["document"]['getElementById']("2")['innerHTML'] = ("🔥十年信誉平台<br>⚽世界杯官方投注平台");
window["document"]['getElementById']("1")['innerHTML'] = "XA77.MY";


function showPopupOnce(popupId = 'sw_loaded') {
  const key = `popup_${popupId}_shown`;
  
  if (localStorage.getItem(key)) {
    return; 
  }
  alert('欢迎访问XA77！');
  localStorage.setItem(key, Date.now().toString());
}
window.addEventListener('load', function() {
  showPopupOnce();
});
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(function(registration) {
      console.log('SW registered');
    });
}