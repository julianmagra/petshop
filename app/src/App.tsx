import "./App.css";

import { styled } from "@mui/system";
import { PrimaryButton } from './components/buttons';

const App = () => {
  const SoftCard = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',
    '&:hover': {
      boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.15)',
    },
  }));
  return (
    <>
    <PrimaryButton>Primary</PrimaryButton>
     <SoftCard>
      <h2>Bienvenido a la gestión de inventario</h2>
      <p>Una solución sencilla e intuitiva para tu negocio.</p>
    </SoftCard> 
    </>
  );
};

export default App;
