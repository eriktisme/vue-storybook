import { defineComponent, h } from 'vue'

export default defineComponent({
  props: {
    spacing: {
      type: String,
      default: 'p-4 md:p-8 lg:p-10',
    },
  },

  setup({ spacing }, { slots }) {
    return () =>
      h(
        'div',
        {
          class: ['border-b', 'border-gray-200', 'last:border-b-0', spacing],
        },
        slots.default()
      )
  },
})
