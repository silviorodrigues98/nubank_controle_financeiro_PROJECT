import './ControleFinanceiro.css';
import { DonutChart } from '@mantine/charts';
import { CSVDropZone } from '../CSVDropZone/CSVDropZone';
import { useUpload } from './UploadContext';
import { useFile } from '../CSVDropZone/FileContext';
import { useEffect, useState } from 'react';

export function ControleFinanceiro() {
  const { isUploaded } = useUpload();
  const { fileObject } = useFile();
  const [graphData, setGraphData] = useState<{ name: string; value: number; color: string }[]>([]);
  const graphColors = ['indigo.6', 'red.5', 'blue.4', 'yellow.3', 'orange.2', 'green.1'];
  useEffect(() => {
    if (fileObject) {
      const categories = fileObject.categoryTotals;
      const newGraphData = Object.keys(categories)
        .map((category, index) => {
          const value = categories[category];
          if (value >= 0) {
            return {
              name: category.toUpperCase(),
              value: value,
              color: graphColors[index % graphColors.length],
            };
          }
          return null;
        })
        .filter((data) => data !== null) as { name: string; value: number; color: string }[];
      setGraphData(newGraphData);
    }
  }, [fileObject]);

  const chartProps = {
    data: graphData,
    withTooltip: true,
    withLabelsLine: false,
    withLabels: true,
    tooltipDataSource: 'segment' as const,
    mx: 'auto',
    paddingAngle: 1,
    size: 350,
    style: { width: 750, height: 750 },
  };

  useEffect(() => {
    const handleScroll = () => {
      const tooltip = document.querySelector('.mantine-charts-tooltip') as HTMLElement;
      if (tooltip) {
        tooltip.style.position = 'fixed';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="center">
        <h1>Controle Financeiro</h1>
        {!isUploaded && <CSVDropZone />}
        {isUploaded && graphData.length > 0 && <DonutChart {...chartProps} />}
      </div>
    </>
  );
}
