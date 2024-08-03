import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { UploadProvider } from './components/ControleFinanceiro/UploadContext';
import { FileProvider } from './components/CSVDropZone/FileContext';
export default function App() {
  return (
    <MantineProvider theme={theme}>
      <FileProvider>
        <UploadProvider>
          <Router />
        </UploadProvider>
      </FileProvider>
    </MantineProvider>
  );
}
