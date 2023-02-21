import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';

describe('Sidebar', () => {
  test('test sidebar', () => {
    componentRender(<Sidebar />);
    (<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('test sidebar toggle', () => {
    componentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar-toggle')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
