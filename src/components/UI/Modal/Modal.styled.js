import { Modal } from "@mui/material";
import styled from "styled-components";

export const CustomizedModal = styled(Modal)`
    & .MuiBackdrop-root {
        background-color: rgba(0, 0, 0, 0.6);
        @media screen and (min-width: 900px) {
            background-color: rgba(0, 0, 0, 0.7);
        }
    }
`;
export const ModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    margin: auto;
    overflow: hidden;
    box-shadow: none;
    background-color: ${({ theme }) => theme.palette.background.default};
    margin-bottom: 0;
    padding: 20px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
        height: auto;
        width: 500px;
    }
`;
export const Topbar = styled.div`
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
