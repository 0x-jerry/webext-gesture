import { GestureDir, type GestureAction } from './types'

export async function matchThenExecGestures(
  actions: GestureAction[],
  gesture: GestureDir[],
) {
  const action = actions.find((n) => isTheSameGesture(n.gesture, gesture))

  if (action) {
    await action?.action()
    return true
  }

  return false
}

function isTheSameGesture(g1: GestureDir[], g2: GestureDir[]) {
  if (g1.length !== g2.length) {
    return false
  }

  return g1.every((v, idx) => v === g2[idx])
}
