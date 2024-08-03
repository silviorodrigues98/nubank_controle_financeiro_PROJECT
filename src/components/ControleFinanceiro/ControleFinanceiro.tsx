import './ControleFinanceiro.css';
import { DonutChart } from '@mantine/charts';
import { CSVDropZone } from '../CSVDropZone/CSVDropZone';
import { useUpload } from './UploadContext';
import { useFile } from '../CSVDropZone/FileContext';

export function ControleFinanceiro() {
  const mockData = [
    { name: 'USA', value: 400, color: 'indigo.6' },
    { name: 'India', value: 300, color: 'yellow.6' },
    { name: 'Japan', value: 300, color: 'teal.6' },
    { name: 'Other', value: 200, color: 'gray.6' },
  ];

  const { isUploaded } = useUpload();
  const { fileObject } = useFile();
  console.log(fileObject);

  const chartProps = {
    data: mockData,
    withTooltip: false,
    withLabelsLine: true,
    withLabels: true,
    paddingAngle: 10,
    size: 500,
    style: { width: 1000, height: 500 },
  };
  return (
    <>
      <div className="center">
        <h1>Controle Financeiro</h1>
        {!isUploaded && <CSVDropZone />}
        {isUploaded && <DonutChart {...chartProps} />}
        <h2>After</h2>
      </div>
    </>
  );
}
