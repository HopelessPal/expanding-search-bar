let container = document.querySelector('.search-container')
let lefticondiv = document.querySelector('.lefticondiv')
let closebtn = document.querySelector('#closebtn')


lefticondiv.addEventListener('click',()=>{
  container.classList.toggle('active')
})
closebtn.addEventListener('click',()=>{
  document.querySelector('input').value=''
})
closebtn.addEventListener('click',()=>{
  container.classList.toggle('active')
})

