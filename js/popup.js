let target = document.querySelectorAll('.btn_open');
let btnPopClose = document.querySelectorAll('.fixedPopupPamphlet .btn_close');
let targetID;

// 팝업 열기
for(let i = 0; i < target.length; i++){
  target[i].addEventListener('click', function(){
    targetID = this.getAttribute('href');
    document.querySelector(targetID).style.display = 'block';
  });
}

// 팝업 닫기
for(let j = 0; j < target.length; j++){
  btnPopClose[j].addEventListener('click', function(){
    this.parentNode.parentNode.style.display = 'none';
  });
}

// 다운로드 알림창
function btn(){
    alert('서비스 준비중입니다.');
}

