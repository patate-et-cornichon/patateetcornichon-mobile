function minutesToHours (times) {
  let totalTime = 0

  // If times value is an array, we add each time to the totalTime
  // Else, totalTime = times
  if (Array.isArray(times)) {
    for (let time of times) if (time) totalTime += Number(time)
  } else {
    totalTime = Number(times)
  }

  // If time less or equal than one hour, return time in minutes
  if (totalTime <= 60) {
    return `${totalTime} min`
  } else if (totalTime > 60) {   // If time greater than 1 hour
    const hours = Math.floor(totalTime / 60)
    const minutes = ('0' + totalTime % 60).slice(-2)
    return `${hours}h${minutes}min`
  }
}

export default minutesToHours
