(() => {
  let records = []
  let startTime = null
  let timer = null

  process.stdin.on('readable', () => {
    let chunk = process.stdin.read()
    if (chunk.toString() === 'stop\n') {
      records.push(stop())
      console.log(records)
    }

    if (chunk.toString() === 'start\n') {
      start()
    }
  })

  function start () {
    startTime = new Date()
    timer = interval(16)
  }

  function stop () {
    clearInterval(timer)
    let elapsed = new Date() - startTime
    console.log(elapsed)
    startTime = null
    return elapsed
  }

  function interval (t) {
    return setInterval(() => {
      let visualTime = new Date() - startTime
      process.stdout.cursorTo(0)
      process.stdout.write(visualTime.toString())
      process.stdout.clearLine(1)
    }, t)
  }
}())
