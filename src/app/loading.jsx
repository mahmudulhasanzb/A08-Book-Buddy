import { HashLoader } from 'react-spinners';

const loading = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <HashLoader color="#820fba" />
    </div>
  );
}

export default loading