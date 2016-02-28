//Filling in the weekdays and dates
var currentTime = new Date();
var currentWeekDay = currentTime.getDay();
var weekDays = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
var weekDaysSmall = ['S','M','T','W','T','F','S'];


for (i = 1; i < 8; i++) { 
	document.getElementById("week-date-"+i).innerHTML = currentTime.getDate() + i - 1;
	var weekDayNumber = currentWeekDay + i - 1;
	if (weekDayNumber > 6) weekDayNumber = weekDayNumber - 7;
	var weekDay = weekDays [weekDayNumber];
	var weekDaySmall = weekDaysSmall [weekDayNumber];
	document.getElementById("week-day-"+i).innerHTML = weekDay;
	document.getElementById("week-day-small-"+i).innerHTML = weekDaySmall;
}