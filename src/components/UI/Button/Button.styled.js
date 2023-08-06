import styled, { css } from "styled-components";
import LoadingButton from "@mui/lab/LoadingButton";

export const CustomButton = styled(LoadingButton)`
    &.MuiLoadingButton-root {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 48px;
        margin-top: 26px;
        background: ${({theme}) => theme.palette.text.primary };
        border: 2px solid ${({theme}) => theme.palette.text.primary};
        font-size: 16px;
        color: ${({theme}) => theme.palette.background.default };
        text-transform: capitalize;
        transition: 0.3s ease-in-out;
        &:hover {
            background: ${({theme}) => theme.palette.background.default };
            color: ${({theme}) => theme.palette.text.primary};
        }
        & .MuiLoadingButton-loadingIndicator {
            color: #fff;
        }
        &.Mui-disabled {
            background: rgba(0, 0, 0, 0.3);
            border-color: rgba(0, 0, 0, 0.3);
        }
        &.MuiLoadingButton-loading {
            color: transparent;
        }
        ${({ $success, theme }) => $success && css`
            background-color: ${theme.palette.success.main};
            border-color: ${theme.palette.success.main};
            &:hover {
                background: ${({theme}) => theme.palette.background.default };
                color: ${({theme}) => theme.palette.success.main};
            }
        `}

        ${({ $primary, theme }) => $primary && css`
            background-color: ${theme.palette.primary.main};
            border-color: ${theme.palette.primary.main};
            &:hover {
                background: ${({theme}) => theme.palette.background.default };
                color: ${({theme}) => theme.palette.primary.main};
            }
        `}
        ${({ $error, theme }) => $error && css`
            background-color: ${theme.palette.error.main};
            border-color: ${theme.palette.error.main};
            &:hover {
                background: ${({theme}) => theme.palette.background.default };
                color: ${({theme}) => theme.palette.error.main};
            }
        `}
        ${({ $fit }) => $fit && css`
            width: auto;
            min-width: unset;
            padding: 0 20px;
        `}
        ${({ $noMargin }) => $noMargin && css`
            margin-top: 0;
        `}
    }
`;

export const CustomLinkButton = styled.a`
    
`;

