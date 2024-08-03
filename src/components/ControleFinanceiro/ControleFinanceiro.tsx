import './ControleFinanceiro.css';
import { DonutChart } from '@mantine/charts';
import { Group, Text, rem } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';

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
        <Dropzone
          onDrop={(files) => console.log('accepted files', files)}
          onReject={(files) => console.log('rejected files', files)}
          maxSize={5 * 1024 ** 2}
          accept={[MIME_TYPES.csv]}
        >
          <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
            <Dropzone.Accept>
              <IconUpload
                style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
                stroke={1.5}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconPhoto
                style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
                stroke={1.5}
              />
            </Dropzone.Idle>

            <div>
              <Text size="xl" inline>
                Drag images here or click to select files
              </Text>
              <Text size="sm" c="dimmed" inline mt={7}>
                Attach as many files as you like, each file should not exceed 5mb
              </Text>
            </div>
          </Group>
        </Dropzone>
        <h2>After</h2>
      </div>
    </>
  );
}
