import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { ControleFinanceiro } from '@/components/ControleFinanceiro/ControleFinanceiro';
export function HomePage() {
  return (
    <>
      <ColorSchemeToggle />
      <ControleFinanceiro/>
    </>
  );
}
