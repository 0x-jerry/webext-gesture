import { type GestureAction, GestureDir } from '@/services/types'
import { matchThenExecGestures } from '@/services/utils'

const contentActions: GestureAction[] = [
  {
    name: 'Scroll To Top',
    gesture: [GestureDir.Right, GestureDir.Up],
    action() {
      const el = document.scrollingElement
      if (!el) return
      el.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
  {
    name: 'Scroll To Down',
    gesture: [GestureDir.Right, GestureDir.Down],
    action() {
      const el = document.scrollingElement
      if (!el) return
      el.scrollTo({
        top: el.scrollHeight,
        behavior: 'smooth',
      })
    },
  },
]

export async function execGestures(gesture: GestureDir[]) {
  return matchThenExecGestures(contentActions, gesture)
}
