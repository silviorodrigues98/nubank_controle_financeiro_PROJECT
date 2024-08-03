import { Group, Text, rem } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import { useUpload } from '../ControleFinanceiro/UploadContext';

export function CSVDropZone() {
  const { isUploaded, setIsUploaded } = useUpload();
  const onDropFunction = (files: File[]) => {
    if (files.length === 0 || !files) console.error('No files uploaded');
    setIsUploaded(true);
    files.forEach(async (file) => {
      const fileData = await file.text();
      const fileObject = {
        name: file.name,
        size: file.size,
        data: fileData,
      };
      console.log(fileObject);

      const categoryTotals: Record<string, number> = {};
      fileObject.data.split('\n').forEach((line) => {
        const columns = line.split(',');
        const category = columns[1];
        const amount = columns[3];
        if (category && amount) {
          categoryTotals[category] = (categoryTotals[category] || 0) + Number(amount);
        }
      });
      console.log(categoryTotals);
    });
  };
  return (
    <>
      <Dropzone
        onDrop={(files) => onDropFunction(files)}
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
              Araste e solte os arquivos aqui ou clique para selecionar
            </Text>
            <Text size="sm" c="dimmed" inline mt={7}>
              Adicione os arquivos exportados, em formato CSV, cada um nao deve exceder 5mb
            </Text>
          </div>
        </Group>
      </Dropzone>
    </>
  );
}
