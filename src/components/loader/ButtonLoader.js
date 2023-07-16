import { TailSpin } from 'react-loader-spinner';

const ButtonLoader = () => {
  return (
    <TailSpin
      height="14"
      width="14"
      color="red"
      ariaLabel="tail-spin-loading"
      radius="1"
      visible={true}
    />
  );
};

export default ButtonLoader;
