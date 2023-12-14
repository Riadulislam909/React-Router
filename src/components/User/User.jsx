
import { useParams } from 'react-router-dom';

const User = () => {
    const {userId} = useParams();
    return (
        <div>
          <div className='flex justify-center items-center'>User : {userId} </div> 
        </div>
    );
};

export default User;