const boxEl = document.querySelector('.box');
console.log(boxEl.textContent);

boxEl.addEventListener('click', function(){
  console.log("Click!!");

  boxEl.classList.add('active');

  // let hasActive = boxEl.classList.contains('active')
  // console.log(hasActive);
  
  boxEl.classList.remove('active');
  let hasActive = boxEl.classList.contains('active')
  console.log(hasActive)

  boxEl.classList.toggle('on')
})

// 해당 요소에 이벤트가 발생하는지 듣고 있다가 실제로 이벤트가 발생하면
// Handler를 실행 -> Handler는 이벤트 호출 함수

