import { render, fireEvent, screen } from '@testing-library/svelte';
import Component from './Component.svelte';

describe('Component', () => {
  it('should render with light theme by default', async () => {
    render(Component);
    const themeElement = screen.getByTestId('theme');
    expect(themeElement).toHaveAttribute('data-theme', 'light');
  });

  it('should switch to night theme on theme button click', async () => {
    render(Component);
    const themeButton = screen.getByTestId('theme-button');
    fireEvent.click(themeButton);
    const themeElement = screen.getByTestId('theme');
    expect(themeElement).toHaveAttribute('data-theme', 'night');
  });

  it('should switch to light theme on theme button click when already in night theme', async () => {
    render(Component);
    const themeButton = screen.getByTestId('theme-button');
    fireEvent.click(themeButton);
    fireEvent.click(themeButton); // Click again to switch back to light theme
    const themeElement = screen.getByTestId('theme');
    expect(themeElement).toHaveAttribute('data-theme', 'light');
  });
});
