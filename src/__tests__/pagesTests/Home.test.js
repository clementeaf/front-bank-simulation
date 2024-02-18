import React, {Suspense} from "react";
import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import Home from "../../pages/Home";

const MockHomeComponent = () => <div>Home Component</div>;
const MockAboutComponent = () => <div>About Component</div>;

jest.mock('../../hooks/useAppRoutes', () => () => [
    { id: 'home', path: '/', component: MockHomeComponent, isIndex: true },
    { id: 'about', path: '/about', component: MockAboutComponent },
  ]);  

describe('Home Component', () => {
  it('should render the Home component for the root route', async () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      </MemoryRouter>
    );

    await waitFor(() => expect(getByText('Home Component')).toBeInTheDocument());
  });

  it('should render the About component for the /about route', async () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/about']}>
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      </MemoryRouter>
    );

    await waitFor(() => expect(getByText('About Component')).toBeInTheDocument());
  });
});