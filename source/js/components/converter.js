const removeClassInArray = (arr, customClass) => {
  arr.map((item) => {
    item.classList.remove(customClass);
  });
}

let valueParent = document.querySelector('.exchange__controls-item.active');
let btnsChange =  [...document.querySelectorAll(".exchange__controls-item")];
let value = valueParent.querySelector("[data-exchange").getAttribute("data-exchange");
let currentForm = document.querySelector('.exchange__calculator');

const send = currentForm.send;
const receive = currentForm.receive;

const convertSend = function(currentValue, receiveValue){
  let result = receiveValue / currentValue;
  return result.toFixed(2);
};

const convertReceive = function(currentValue, receiveValue){
  let result = receiveValue * currentValue;
  return result.toFixed(2);
};


btnsChange.map(function(item){
  item.addEventListener('click', function(){
    removeClassInArray(btnsChange, 'active');
    this.classList.add('active');

    value = this.querySelector("[data-exchange").getAttribute("data-exchange");

    receive.value = convertSend(value, send.value);
  })
} );





send.addEventListener('keyup', function(){
  receive.value = convertSend(value, this.value);
})

receive.addEventListener('keyup', function(){
  send.value = convertReceive(value, this.value);
})


