import { styled } from '@mui/system';

export const StyledPrimaryButton = styled('button')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));