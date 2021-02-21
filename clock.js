const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector(".js-title"),
  dayTitle = clockContainer.querySelector(".js-day");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}시 ${
    minutes < 10 ? `0${minutes}` : minutes
  }분 ${seconds < 10 ? `0${seconds}` : seconds}초`;
}

function getDay() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  dayTitle.innerText = `${year}년 ${month + 1}월 ${day}일`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
  getDay();
}
init();
