const timer = (t: number) => ({
  getMinutes: () => t % 60,
  getHours: () => {
    const h = Math.floor(t / 60) % 12
    return h === 0 ? 12 : h
  },
  isPM: () => t >= 720,
  toString: () => `${timer(t).getHours()}:${timer(t).getMinutes()} ${!timer(t).isPM() ? 'AM' : 'PM'}`
})

export default timer
