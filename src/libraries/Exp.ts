const exp = (xp: number) => ({
  toLvl: () => Math.floor(Math.pow(xp / 10, 1 / 3)),
})

export default exp
