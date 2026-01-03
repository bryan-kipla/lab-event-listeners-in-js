function changeBackgroundColor() {
  const colors = ['#8B4513', '#FF1493', '#00CED1', '#FFD700', '#DC143C', '#32CD32'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

function resetBackgroundColor() {
  document.body.style.backgroundColor = '';
}

function displayKeyPress(event) {
  const keyDisplay = document.getElementById('keyPressDisplay');
  if (keyDisplay) {
    keyDisplay.textContent = `Key pressed: ${event.key}`;
  } else {
    console.error('keyPressDisplay element not found.');
  }
}

function displayUserInput() {
  const inputField = document.getElementById('textInput');
  const inputDisplay = document.getElementById('textInputDisplay');
  if (inputField && inputDisplay) {
    inputDisplay.textContent = `You typed: ${inputField.value}`;
  } else {
    console.error('textInput or textInputDisplay element not found.');
  }
}

function setupEventListeners() {
  const changeButton = document.getElementById('changeColorButton');
  const resetButton = document.getElementById('resetColorButton');
  const inputField = document.getElementById('textInput');

  if (changeButton) {
    changeButton.addEventListener('click', changeBackgroundColor);
  } else {
    console.error('changeColorButton element not found.');
  }

  if (resetButton) {
    resetButton.addEventListener('dblclick', resetBackgroundColor);
  } else {
    console.error('resetColorButton element not found.');
  }

  document.addEventListener('keydown', displayKeyPress);

  if (inputField) {
    inputField.addEventListener('input', displayUserInput);
  } else {
    console.error('textInput element not found.');
  }
}

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners);
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};