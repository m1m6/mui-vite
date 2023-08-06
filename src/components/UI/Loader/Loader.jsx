import CircularProgress from '@mui/material/CircularProgress';
import { Wrapper } from './Loader.styled';

const Loader = props => {

    const { height } = props;

    return (
        <Wrapper height={ height }>
            <CircularProgress color="primary" />
        </Wrapper>
    )
}

export default Loader;