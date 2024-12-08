const text = document.getElementById('text');
const totalTime = 7500;  // Total time for one breathing cycle (ms)
const breatheInTime = (totalTime / 5) * 2;  // Breathe in for 3 seconds
const holdTime = totalTime / 5;  // Hold for 1.5 seconds

function breatheAnimation() {
  text.innerText = 'Breathe In';
  text.className = 'grow';
  
  setTimeout(() => {
    text.innerText = 'Hold';
    
    setTimeout(() => {
      text.innerText = 'Breathe Out';
    }, holdTime);
  }, breatheInTime);
}

// Start the breathing animation loop
breatheAnimation();
setInterval(breatheAnimation, totalTime);
