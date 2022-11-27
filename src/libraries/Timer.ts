const timer = (t: number) => ({
  getMinutes: () => t % 60,
  getHours: () => {
    const h = Math.floor(t / 60) % 12
    return h === 0 ? 12 : h
  },
  isPM: () => t >= 720,
  toString: () => `${String(timer(t).getHours()).padStart(2, '0')}:${String(timer(t).getMinutes()).padStart(2, '0')} ${!timer(t).isPM() ? 'AM' : 'PM'}`
})

export default timer
