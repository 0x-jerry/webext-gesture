import { type GestureAction, GestureDir } from '@/entrypoints/services/types'
import { matchThenExecGestures } from '@/entrypoints/services/utils'

const contentActions: GestureAction[] = [
  {
    gesture: [GestureDir.Right, GestureDir.Up],
    action() {
      document.body.scrollTo({
        top: 0,
      })
    },
  },
  {
    gesture: [GestureDir.Right, GestureDir.Down],
    action() {
      document.body.scrollTo({
        top: document.body.scrollHeight,
      })
    },
  },
]

export async function execGestures(gesture: GestureDir[]) {
  return matchThenExecGestures(contentActions, gesture)
}
