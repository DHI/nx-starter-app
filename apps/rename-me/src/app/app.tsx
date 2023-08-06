import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Content from './layout/Content';
import Theme from './theme/Theme';
import { provider } from 'react-ioc';
import { ThemeDataStore } from './theme/ThemeDataStore';
import { AppDataStore } from './stores/AppDataStore';
import { routes } from './routes';
import { useEffect, useState } from 'react';
import { ApiResponse, API_URL } from '@nx-rename-me/api-interface';

const API_HOST = import.meta.env.API_HOST ?? 'http://localhost:3333';

function App() {
  const [apiResponse, setApiResponse] = useState<ApiResponse>({
    message: 'Loading',
  });

  useEffect(() => {
    fetch(`${API_HOST}${API_URL}`)
      .then((res) => res.json())
      .then((res) => setApiResponse(res));
  }, []);

  return (
    <Theme>
      <BrowserRouter>
        <Layout
          header={<Header message={apiResponse.message} />}
          content={<Content routes={routes} />}
          footer={<Footer />}
        />
      </BrowserRouter>
    </Theme>
  );
}

export default provider(AppDataStore, ThemeDataStore)(App);
