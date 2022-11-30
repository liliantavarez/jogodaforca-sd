import { Button } from './style';

const Alfabeto = ({ value, ...rest }) => {
  return <Button {...rest}>{value}</Button>;
};
export default Alfabeto;
