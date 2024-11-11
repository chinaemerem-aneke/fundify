function navigate(pageId) {
  document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}

function moveToNext(input) {
  const inputs = document.querySelectorAll('.pin-digit');
  if (input.value.length === 1) {
      const nextInput = input.nextElementSibling;
      if (nextInput && nextInput.classList.contains('pin-digit')) {
          nextInput.focus();
      }
  }
}

function validatePin() {
  const pinInputs = document.querySelectorAll('.pin-digit');
  const pin = Array.from(pinInputs).map(input => input.value).join('');
  if (pin.length === 4) {
      navigate('success');
  } else {
      alert('Please enter a 4-digit PIN');
  }
}

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
