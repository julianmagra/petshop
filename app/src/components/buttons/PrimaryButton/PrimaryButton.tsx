import { StyledPrimaryButton } from './styles';

const PrimaryButton = ({ children, ...props }) => {
  return <StyledPrimaryButton {...props}>{children}</StyledPrimaryButton>;
};

export default PrimaryButton;