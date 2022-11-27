const lvl2Exp = (lvl: number) => Math.round(10 * Math.pow(lvl, 3))

const exp = (xp: number) => ({
  toLvl: () => Math.floor(Math.pow(xp / 10, 1 / 3)),
  required: () => exp(xp).requiredTotal() - lvl2Exp(exp(xp).toLvl()),
  requiredTotal: () => lvl2Exp(exp(xp).toLvl() + 1),
  remaining: () => exp(xp).requiredTotal() - xp,
  currentLevel: () => exp(xp).required() - exp(xp).remaining(),
  ratio: () => exp(xp).currentLevel() / exp(xp).required()
})

exp.fromLevel = lvl2Exp

export default exp
