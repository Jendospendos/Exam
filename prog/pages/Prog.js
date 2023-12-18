let ProfileName = document.querySelector('#Profile__Input_Name');
console.log(`Имя ph ${ProfileName.placeholder}`);

let ProfileAbout = document.querySelector('#Profile__Input_About');
console.log(`О себе ph ${ProfileAbout.placeholder}`)

let ProfileButton = document.querySelector('.profile__button');
console.log(`button ${ProfileButton}`)

function ShowClick() {
    console.log(`Имя ${ProfileName.value} \nО себе ${ProfileAbout.value}`);
}
ProfileButton.addEventListener('click', ShowClick);




import initialCards from "../utils/initialCards.js";

console.log(initialCards);

let index = Math.floor(Math.random() * initialCards.length);

let cardsArray = initialCards.map((item) => item); //все изображения

let lastId = 0;

function getNewCardId(){
  return ++lastId;
}
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function checkClickCard(elem){
  elem.addEventListener('click',zoomCard);
}
function zoomCard(){
  let zoom_image=document.querySelector(".zoom-image");
  zoom_image.src=this.src;
  modal.style.display = "block";
}
function createEventLForDelete(elem){
  elem.addEventListener('click', removeParent);
}
function createEventForLike(elem){
  elem.addEventListener('click', setLike);
}
function setLike(){
  if(this.classList.contains('card__like_checked')){
    this.classList.remove('card__like_checked');
  } else{
    this.classList.add('card__like_checked');
  }    
}
//////////////////
const cardTemplate = document.querySelector('#card').content;
const cards = document.querySelector('.cards');
function createCard(data)
{
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardLink = cardElement.querySelector('.card__image');
  cardLink.src = data.link;
  cardLink.alt = data.name;
  const cardTitle = cardElement.querySelector('.card__title');
  cardTitle.textContent = data.name;
  cards.append(cardElement); 
  const buttonDelete = cardElement.querySelector('.card__remove');
  const buttonLike = cardElement.querySelector('.card__like');
  createEventLForDelete(buttonDelete);
  createEventForLike(buttonLike);
  checkClickCard(cardLink);
}

cardsArray.forEach(card => {
  createCard(card);
});

function AddNewCard(data)
{
  cardsArray.push(data);
  createCard(data);
  console.log(cardsArray);
}


const nn = 'Pelude';
const ll = 'https://avatars.dzeninfra.ru/get-zen_doc/1895194/pub_62a8f02b8f4f1a4e3a97caf5_62a8f057976862692a2ce82c/scale_1200';


AddNewCard({name:nn, link:ll});

console.log(cardsArray);

let buttonAddImage = document.querySelector('.popup__button');
buttonAddImage.addEventListener('click', ()=>{
  const name = document.querySelector('#popup__input_title').value;
  const link = document.querySelector('#popup__input_link').value;
  AddNewCard({name:name, link:link});
});



let profileImage = document.querySelector('.profile__image');
function ShowImage(){
  if(profileImage.classList.contains('profile__image_unvisiable')){
    profileImage.classList.remove('profile__image_unvisiable');
  }
  else {
    profileImage.classList.add('profile__image_unvisiable');
  }
}
function imageExists(image_url){
  var http = new XMLHttpRequest();
  http.open('HEAD', image_url, false);
  http.send();
  return http.status != 404;
}
profileImage.addEventListener('click', ShowImage);
const formElement = document.getElementById('form1');
var list = [];
formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(formElement); 
  const name = formData.get('popupTitle'); 
  const link = formData.get('popupLink');
  if(imageExists(link) && link != "" && name != ""){
    createCard({name: name, link: link});
  } 
});

function deleteFromCards(id){
  cardsArray.forEach(function(card, index) {
    if(card.id === id){
      cardsArray.splice(index, 1);
    }
  });
}
function removeParent(){
  let revDiv = this.parentElement;
  revDiv.remove();
  deleteFromCards(this.parentElement.id);
}
const form = document.querySelector('.profile');
const loginInput = form.querySelector('.Profile__Input_Name');



form.addEventListener('submit', (evt) => {
  // Отменяем действие по умолчанию
  evt.preventDefault();
  
  // Получаем значения полей формы
  const login = loginInput.value;
  
 
  
  // Проверяем, что поля заполнены
  if (!login ) {
    alert('Пожалуйста, заполните все поля');
    return;
  }
  
  
  if (!isValidLogin(login)) {
    alert('Имя должно содержать больше 1 буквы');
    return;
  }
  
  

  
  // Если всё в порядке, отправляем форму
  form.submit();
});

function isValidLogin(login) {
  // Проверка имени регулярным выражением
  const pattern = /^[a-zA-Z0-9]+$/;
  return pattern.test(login);
}

