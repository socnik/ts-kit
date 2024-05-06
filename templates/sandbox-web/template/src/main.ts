import '@/styles/main.css'

import { sum } from '@/sum'

function runTimer() {
  let seconds = 0

  setInterval(() => {
    seconds = sum(seconds, 1)

    const timerEl = document.querySelector('#timer')

    if (!timerEl) return

    timerEl.innerHTML = `Seconds: ${seconds}`
  }, 1000)
}

runTimer()
