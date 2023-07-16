import { ThreeDots } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <ThreeDots
        height="50"
        width="50"
        radius="9"
        color="goldenrod"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderContainer>
  );
};

export default Loader;
