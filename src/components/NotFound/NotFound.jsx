import Box from 'Box/Box';
import { Link } from 'react-router-dom';
import error from './NotFound-min.png'

const NotFound = () => {
    return (
        <>
        <Box display='flex' justifyContent='center' alignitems='center' mb={32}>
            <img src={error} alt="NotFound" />
        </Box>
        <Box display='flex' justifyContent='center'>
            <Link to='' style={{color: 'green', textDecoration: 'underline', fontSize: '24px'}}>Go to the homepage</Link>
        </Box>
        </>
    )
}

export default NotFound;