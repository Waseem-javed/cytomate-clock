let clockH = document.querySelector('.clock_hours');
let clockM = document.querySelector('.clock_mints');
let clockS = document.querySelector('.clock_seconds');
let digitClockH  = document.querySelector('.countdown_hours');
let digitClockM  = document.querySelector('.countdown_mints');
let digitClockS  = document.querySelector('.countdown_seconds');

let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;
let finalDate = new Date('Jul 25, 2020 00:00:00');


let startClock = () => {
	updateTime();
	updateCountDown();
	setInterval(()=>{
		updateTime();
		updateCountDown();
	},1000);
}

let updateTime = () => {
	let time = new Date();
	let hours = time.getHours() % 12;
	let mints = time.getMinutes();
	let seconds =  time.getSeconds();

	clockH.style.transform = `rotate(${360 / 12 * hours}deg)`;
	clockM.style.transform = `rotate(${360 / 60 * mints}deg)`;
	clockS.style.transform = `rotate(${360 / 60 * seconds}deg)`;
}

let updateCountDown = () => {
	let now = new Date();
	let diff = finalDate - now;
	let diffObj = convertMilliToDMHS(diff);
	digitClockH.textContent = diffObj.hours >= 10 ? diffObj.hours : '0'+ diffObj.hours;
	digitClockM.textContent = diffObj.minutes >= 10 ? diffObj.minutes : '0'+ diffObj.minutes;
	digitClockS.textContent = diffObj.seconds >= 10 ? diffObj.seconds : '0'+ diffObj.seconds;
}


let convertMilliToDMHS = (millis) => {
	// abs is used for positive value return
	let hours = Math.abs(Math.floor(millis % day / hour));
	let minutes = Math.abs(Math.floor(millis % hour / minute));
	let seconds = Math.abs(Math.floor(millis % minute / second));
 	return {hours,minutes,seconds};
}
startClock();
