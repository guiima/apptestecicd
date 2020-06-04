/* eslint-disable no-undef */
import React from 'react';
import {render, cleanup, fireEvent} from 'react-native-testing-library';
import App from '../src/App';

afterEach(cleanup);

describe('<App />', () => {
  it('should match snapshot', () => {
    const rendered = render(<App />).toJSON();

    expect(rendered).toMatchSnapshot();
  });

  it('should set counter to 0', () => {
    const rendered = render(<App />);
    const counterComponent = rendered.getByTestId('counter');

    expect(counterComponent.props.children).toContainEqual(0);
  });

  it('should increase counter by 1', () => {
    const rendered = render(<App />);
    const counterComponent = rendered.getByTestId('counter');
    const buttonComponent = rendered.getByTestId('button');

    fireEvent(buttonComponent, 'press');

    expect(counterComponent.props.children).toContainEqual(1);
  });
});
