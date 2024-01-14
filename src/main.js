let radius;

const circumferenceText = document.getElementById('calc-result');

document.getElementById('submit-radius-btn').onclick = () => {
  radius = Number(document.getElementById('radius-input').value);

  let result = 2 * Math.PI * radius;

  if (result === 0) {
    circumferenceText.innerText = `Circumference: ${
      Math.round(2 * Math.PI * 2.3 * 100) / 100
    } cm.`;
  } else {
    circumferenceText.innerText = `Circumference: ${
      Math.round(result * 100) / 100
    } cm.`;
  }
};
