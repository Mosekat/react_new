import {render, screen} from '@testing-library/react';
import Component from "./Component";

test('renders learn react link', () => {
    render(<Component/>);
    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/test/i)
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
});
