import { type GestureAction, GestureDir } from '@/services/types'
import { matchThenExecGestures } from '@/services/utils'

const contentActions: GestureAction[] = [
  {
    name: 'Scroll To Top',
    gesture: [GestureDir.Right, GestureDir.Up],
    action() {
      document.body.scrollTo({
        top: 0,
      })
    },
  },
  {
    name: 'Scroll To Down',
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
