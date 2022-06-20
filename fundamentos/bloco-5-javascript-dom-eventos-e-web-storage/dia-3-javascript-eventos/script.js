function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
createDaysOfTheWeek();
  
  // Escreva seu código abaixo.


function createDays(){
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const daysList = document.querySelector('#days');

    for (let i = 0; i < dezDaysList.length; i += 1){
        const days2 = dezDaysList[i];
        const newDat = document.createElement("li");
        newDat.className = "day";
        if(dezDaysList[i] == 24 || dezDaysList[i] == 25 || dezDaysList[i] == 31){
          newDat.classList.add("holiday");
        }
        if(dezDaysList[i] == 4 || dezDaysList[i] == 11 || dezDaysList[i] == 18 || dezDaysList[i] == 25){
          newDat.classList.add("friday");
        }
        newDat.innerHTML = days2;

        daysList.appendChild(newDat);
    };
};

createDays();


function holidaysBtn(buttonName){
  const buttonsContainer = document.querySelector('.buttons-container');
  const buttonElem = document.createElement("button");
  buttonElem.id = "btn-holiday";
  buttonElem.innerText = buttonName;
  buttonsContainer.appendChild(buttonElem);


}

holidaysBtn('Feriados');


function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};

displayHolidays();



function fridayBtn(buttonFriday){
  const buttonsContainer = document.querySelector('.buttons-container');
  const buttonFridayObj = document.createElement("button");
  buttonFridayObj.id = "btn-friday";
  buttonFridayObj.innerText = buttonFriday;
  buttonsContainer.appendChild(buttonFridayObj);


}

fridayBtn('Sexta-feira');


function displayFriday() {
  let getFridayButton = document.querySelector('#btn-friday');
  let getFriday = document.querySelectorAll('.friday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getFridayButton.addEventListener('click', function() {
    for (let index = 0; index < getFriday.length; index += 1) {
      if (getFriday[index].style.backgroundColor === setNewColor) {
        getFriday[index].style.backgroundColor = backgroundColor;
      } else {
        getFriday[index].style.backgroundColor = setNewColor;
      }
    }
  })
};

displayFriday();
