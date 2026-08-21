import { render, screen } from '@testing-library/react-native';
import { Text } from 'react-native';

import BottomSheet from '../BottomSheet';

// Note: in React Native Testing Library v14, `render` is async — remember to await it.
describe('BottomSheet', () => {
  it('renders its title and its children', async () => {
    await render(
      <BottomSheet title="Leave feedback">
        <Text>How was your visit?</Text>
      </BottomSheet>
    );

    expect(screen.getByText('Leave feedback')).toBeOnTheScreen();
    expect(screen.getByText('How was your visit?')).toBeOnTheScreen();
  });
});
