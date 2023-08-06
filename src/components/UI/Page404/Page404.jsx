import styled from 'styled-components';
import Lottie from "lottie-react";
import notFoundAnimation from '../../../assets/animations/404.json';


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    padding: 20px;
`

const Page404 = props => {
    return (
        <Wrapper>
            <Lottie animationData={notFoundAnimation} />
        </Wrapper>
    )
}
export default Page404;