import Card from './Card'
import CardSection from './CardSection'
import { Meta } from '@storybook/vue3'

export default {
  title: 'Components/Containers/Card',
  component: Card,
} as Meta

export const Base = () => ({
  components: { Card, CardSection },
  template: '<Card><CardSection>Card contents</CardSection></Card>',
})
