import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { UploadProvider } from './components/ControleFinanceiro/UploadContext';
export default function App() {
  return (
    <MantineProvider theme={theme}>
      <UploadProvider>
        <Router />
      </UploadProvider>
    </MantineProvider>
  );
}
