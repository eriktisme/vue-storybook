import { defineComponent, h } from 'vue'

export const Card = defineComponent({
  setup(_, { slots }) {
    return () =>
      h(
        'div',
        {
          class: ['border', 'border-gray-200'],
        },
        slots.default()
      )
  },
})
