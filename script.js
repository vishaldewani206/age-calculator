const yearAnswer = document.querySelector('.year-answer');
const monthAnswer = document.querySelector('.month-answer');
const dayAnswer = document.querySelector('.day-answer');
let dayinput = document.querySelector('#day');
let monthinput = document.querySelector('#month');
let yearinput = document.querySelector('#year');
const answerBtn = document.querySelector('.calculate-btn');
let warnings = document.querySelectorAll('.para');
let inputs = document.querySelectorAll('.inputs');
let monthinputValue;
let dayinputValue;
let yearinputValue;
let excuteFurther = true;
//current year - birth year
//current month - birth month
//if current month is smaller or answer is in negevite than minus a year
//current day - birth day
//if current day is smaller than birth day than reverse and answer will be minus with 30
answerBtn.addEventListener('click', () => {
  let date = new Date();
  let currentYear = date.getFullYear();
  currentYear = parseInt(currentYear);
  let currentMonth = date.getMonth() + 1;
  console.log(currentMonth);
  let currentDay = date.getDate();
  console.log(currentDay);

  if (dayinput.value == '' || monthinput.value == '' || yearinput.value == '') {
    console.log('fuck');
    if (dayinput.value == '') {
      dayinput.style.borderColor = 'var(--lightRed)';
      warnings[0].innerHTML = 'This field is required';
    }
    if (monthinput.value == '') {
      monthinput.style.borderColor = 'var(--lightRed)';
      warnings[1].innerHTML = 'This field is required';
    }
    if (yearinput.value == '') {
      yearinput.style.borderColor = 'var(--lightRed)';
      warnings[2].innerHTML = 'This field is required';
    }
  } else {
    // resets
    if (warnings[0].innerHTML == 'This field is required') {
      for (let i = 0; i < warnings.length; i++) {
        warnings[i].innerHTML = '';
        inputs[i].style.borderColor = 'var(--lightGrey)';
      }
    }
    monthinputValue = parseInt(monthinput.value);
    dayinputValue = parseInt(dayinput.value);
    yearinputValue = parseInt(yearinput.value);
    //invaild inputs
    let daysInMonthInput = new Date(
      yearinputValue,
      monthinputValue,
      0
    ).getDate();
    console.log(`this is day: ${daysInMonthInput}`);
    if (dayinput.value > daysInMonthInput) {
      console.log('working');
      warnings[0].innerHTML = 'Must be a valid day';
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.borderColor = 'var(--lightRed)';
      }
      excuteFurther = false;
    } else {
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.borderColor = 'var(--lightGrey)';
      }

      warnings[0].innerHTML = '';
      excuteFurther = true;
    }
    if (monthinput.value > 12) {
      console.log('working');
      warnings[1].innerHTML = 'Must be a valid month';
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.borderColor = 'var(--lightRed)';
      }
      excuteFurther = false;
    } else {
      if (excuteFurther == false) {
        excuteFurther = false;
      } else {
        excuteFurther = true;
      }
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.borderColor = 'var(--lightGrey)';
      }

      warnings[1].innerHTML = '';
    }

    if (yearinput.value > currentYear) {
      console.log('teysfdfdfsfdfs');
      warnings[2].innerHTML = 'Must be a past year';
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.borderColor = 'var(--lightRed)';
      }
      excuteFurther = false;
    } else {
      if (excuteFurther == false) {
        excuteFurther = false;
      } else {
        excuteFurther = true;
      }
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.borderColor = 'var(--lightGrey)';
      }

      warnings[2].innerHTML = '';
    }

    if (excuteFurther) {
      //years
      let years = currentYear - yearinputValue;
      yearAnswer.innerHTML = years + ' ';
      //months
      console.log(currentMonth, monthinputValue);
      console.log(currentDay, dayinputValue);
      console.log(currentYear, yearinputValue);
      let months;
      if (currentMonth < monthinputValue) {
        months = monthinputValue - currentMonth;
        months = 12 - months;
        monthAnswer.innerHTML = months + ' ';
        years = years - 1;
        yearAnswer.innerHTML = years + ' ';
      } else {
        months = currentMonth - monthinputValue;
        monthAnswer.innerHTML = months + ' ';
      }

      //days
      daysInMonthInput = new Date(yearinputValue, monthinputValue, 0).getDate();
      console.log(daysInMonthInput);
      let currentDaysInMonth = new Date(currentYear, currentMonth, 0).getDate();
      console.log(currentDaysInMonth);
      if (currentDay < dayinputValue) {
        let days = dayinputValue - currentDay;
        days = daysInMonthInput - days;
        dayAnswer.innerHTML = days + ' ';
        months = months - 1;
        dayAnswer.innerHTML = days + ' ';
      } else {
        let days = currentDay - dayinputValue;
        dayAnswer.innerHTML = days + ' ';
      }
    } else {
      dayAnswer.innerHTML = '--';
      monthAnswer.innerHTML = '--';
      yearAnswer.innerHTML = '--';
    }
  }
});
