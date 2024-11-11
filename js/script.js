let pin = '';
const hiddenInput = document.querySelector('.pin-hidden');
const errorMessage = document.querySelector('.error-message');

function navigate(pageId) {
  document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}

function focusHiddenInput() {
  hiddenInput.focus();
}

function updatePinDisplay(input) {
  pin = input.value;
  const digits = document.querySelectorAll('.pin-digit');
  digits.forEach((digit, index) => {
      digit.classList.toggle('filled', index < pin.length);
  });
}

function addDigit(digit) {
  if (pin.length < 4) {
      pin += digit;
      hiddenInput.value = pin;
      updatePinDisplay(hiddenInput);
  }
}

function backspace() {
  if (pin.length > 0) {
    pin = '';
    hiddenInput.value = '';
    updatePinDisplay(hiddenInput);
  }
}

// Show errow message
function showError(message) {
  const errorMessage = document.querySelector('.error-message__text');
  errorMessage.textContent = message;
  errorMessage.parentElement.classList.add('show');
}

// Hide error message
function dismissError() {
  const errorMessage = document.querySelector('.error-message');
  errorMessage.classList.remove('show');
}

// Pin confirmation
function confirmPin() {
  if (pin.length === 0) {
    showError('Please input a PIN');
  } else if (pin === '0000') {
    navigate('money-sent');
  } else {
    showError('Incorrect PIN');
    pin = '';
    hiddenInput.value = '';
    updatePinDisplay(hiddenInput);
  }
}

// Focus the hidden input on page load
document.addEventListener('DOMContentLoaded', focusHiddenInput);

// Display the current time on the status bar
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  document.querySelectorAll('.status-bar__time').forEach(el => {
    el.textContent = timeString;
  });
}

setInterval(updateTime, 1000);
updateTime();
