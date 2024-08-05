import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { ControleFinanceiro } from '@/components/ControleFinanceiro/ControleFinanceiro';
import './Home.page.css';
export function HomePage() {
  return (
    <>
      <ColorSchemeToggle />
      <ControleFinanceiro />
    </>
  );
}
