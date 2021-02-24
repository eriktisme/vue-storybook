import { defineComponent, h } from 'vue'

export default defineComponent({
  props: {
    type: {
      type: String,
      default: "submit"
    },
    style: {
      type: String,
      default: "bg-blue-700 hover:bg-blue-400 text-white border-transparent"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    }
  },

  setup({ type, style, block, rounded, disabled }, { slots }) {
    return () => h(
      "button",
      {
        type,
        disabled,
        class: [
          'px-3',
          'py-2',
          'align-middle',
          'border',
          'cursor-pointer',
          'text-center',
          'text-base',
          'transition-all',
          'appearance-none',
          'outline-none',
          'focus:shadow-outline',
          style,
          {
            "cursor-not-allowed opacity-50": disabled,
            "rounded-md": rounded,
            "w-full": block,
          }
        ]
      },
      [
        slots.default()
      ]
    )
  }
})