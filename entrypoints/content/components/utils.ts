import { GestureDir, Position } from './types'

export function calcDirection(p1: Position, p2: Position) {
  const x = p2.x - p1.x
  const y = p2.y - p1.y

  const deg = (Math.atan2(y, x) * 180) / Math.PI

  if (deg >= -45 && deg <= 45) {
    return GestureDir.Right
  }
  if (deg > 45 && deg <= 135) {
    return GestureDir.Down
  }
  if (deg > 135 && deg <= 225) {
    return GestureDir.Left
  }

  return GestureDir.Up
}

export function distance(p1: Position, p2: Position) {
  const dx = p1.x - p2.x
  const dy = p1.y - p2.y
  return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
}

export function calcPath(positions: Position[]) {
  const d = positions
    .map(({ x, y }, idx) => (idx === 0 ? `M ${x},${y}` : `L ${x},${y}`))
    .join(' ')

  return d
}
