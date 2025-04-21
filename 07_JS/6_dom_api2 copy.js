const boxEls = document.querySelectorAll(".box")
console.log(boxEls);

boxEls.forEach(function(animal, index){
  console.log(animal, index);

  animal.classList.add(`order-${index+1}`);
}); 
//function 옆에 이름은 매개변수 자리이기 때문에 이름은 내맘대로 해도 상관없음

const boxEl = document.querySelector('.box');
console.log(boxEl.extContent);

boxEl.textContent = "change!";
console.log(boxEl.textContent);