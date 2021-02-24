import { Button as Btn } from "./index"
import { Meta } from "@storybook/vue3"

export default {
    title: "Components/CoreUI/Button",
    component: Btn
} as Meta

export const Default = () => ({
    components: { Btn },
    template: '<Btn>Button</Btn>'
})

export const Block = () => ({
    components: { Btn },
    template: '<Btn :block="true">Button</Btn>'
})

export const Disabled = () => ({
    components: { Btn },
    template: '<Btn :disabled="true">Button</Btn>'
})

export const Rounded = () => ({
    components: { Btn },
    template: '<Btn :rounded="true">Button</Btn>'
})


