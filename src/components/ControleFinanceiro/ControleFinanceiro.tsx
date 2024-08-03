import './ControleFinanceiro.css';
import { DonutChart } from '@mantine/charts';
import { CSVDropZone } from '../CSVDropZone/CSVDropZone';

//TODO Read the csv
//TODO Parse the data
//TODO Display the data in a table and in a graph
export function ControleFinanceiro() {
  const mockData = [
    { name: 'USA', value: 400, color: 'indigo.6' },
    { name: 'India', value: 300, color: 'yellow.6' },
    { name: 'Japan', value: 300, color: 'teal.6' },
    { name: 'Other', value: 200, color: 'gray.6' },
  ];
  return (
    <>
      <div className="center">
        <h1>Controle Financeiro</h1>
        <DonutChart
          data={mockData}
          withTooltip={false}
          withLabelsLine
          withLabels
          paddingAngle={10}
          size={500}
          style={{ width: 1000, height: 500 }}
        />
        <CSVDropZone />
        <h2>After</h2>
      </div>
    </>
  );
}
