import { FormsModule } from '@angular/forms';
import { Meta, StoryFn, StoryObj, moduleMetadata } from '@storybook/angular';
import { CustomCvaComponent } from './custom-cva.component';

const meta: Meta<CustomCvaComponent> = {
  // title: 'Basics / Angular forms / ControlValueAccessor',
  component: CustomCvaComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule],
    }),
    (storyFn) => {
      const story = storyFn();
      console.log(story);
      return story;
    },
  ],
} as Meta;

export default meta;

type Story = StoryObj<CustomCvaComponent>;

export const SimpleInput: Story = {
  storyName: 'Simple input',
  render: () => ({
    props: {
      ngModel: 'Type anything',
      ngModelChange: () => {},
    },
  }),
};
