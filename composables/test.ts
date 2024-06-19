const prom1 = new Promise((resolve) => {
  resolve('1')
})

setTimeout(() => {
  prom1.then((res) => {
    console.log(res)
  })
}, 1000)
