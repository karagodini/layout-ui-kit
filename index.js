const btnNormal = document.querySelector('.btn-normal')

btnNormal.addEventListener('click', () => {
    btnNormal.classList.add('btn-active')
    btnNormal.textContent = 'Active'
})


document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('toggle-btn');
    const slider = document.querySelector('.slider');
    const sliderBtn = document.querySelector('.slider-btn');
    const sliderText = document.querySelector('.slider-text')

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            slider.style.backgroundColor = '#2196F3';
            sliderBtn.style.transform = 'translateX(36px)';
            sliderText.textContent = 'ON'
            sliderText.style.color = '#2196F3'
        } else {
            slider.style.backgroundColor = '#ccc';
            sliderBtn.style.transform = 'translateX(0)';
            sliderText.textContent = 'OFF'
            sliderText.style.color = '#777'
        }
    });
})

const rangeInputs = document.querySelectorAll('input[type="range"]')
let isRTL = document.documentElement.dir === 'rtl'

function handleInputChange(e) {
    let target = e.target
    if (e.target.type !== 'range') {
      target = document.getElementById('range')
    } 
    const min = target.min
    const max = target.max
    const val = target.value
    let percentage = (val - min) * 100 / (max - min)
    if (isRTL) {
      percentage = (max - val) 
    }
    
    target.style.backgroundSize = percentage + '% 100%'
  }

  rangeInputs.forEach(input => {
    input.addEventListener('input', handleInputChange)
  })