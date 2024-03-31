import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {TreeViewList} from '../src/components/TreeViewList';
import {LIST_DATA} from '../src/constants/listData';

describe('<TreeViewList />', () => {
  it('renders correctly with provided data', () => {
    const {getByText} = render(<TreeViewList data={LIST_DATA} />);
    // Assuming 'Phones' is a node in your data
    expect(getByText('Phones')).toBeTruthy();
  });

  it('checkboxes reflect and update the marked state of nodes', () => {
    const {getByTestId, queryByText} = render(
      <TreeViewList data={LIST_DATA} />,
    );
    // Assuming 'Phones' is a node in your data and has a checkbox
    const phonesCheckbox = getByTestId('checkbox-Phones');
    fireEvent(phonesCheckbox, 'onChange', true);
    // Assuming marking a node should update its state and UI
    // Adjust this based on your actual component behavior
    expect(queryByText('Apple')).toBeNull();
  });

  it('expands and collapses nodes on click', () => {
    const {getByText, queryByText} = render(<TreeViewList data={LIST_DATA} />);
    const phonesNode = getByText('Phones');
    fireEvent.press(phonesNode);
    // Assuming marking a node should update its state and UI
    expect(queryByText('Apple')).toBeTruthy();
    fireEvent.press(phonesNode);
    expect(queryByText('Apple')).toBeNull();
  });

  // Add more tests as needed
});
