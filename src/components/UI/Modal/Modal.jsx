import { CustomizedModal, ModalContent, TopBar } from "./Modal.styled";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CustomModal = (props) => {
    const { open, handleClose, displayClose } = props;

    return (
        <CustomizedModal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <ModalContent>
                {!displayClose && (
                    <TopBar>
                        <IconButton aria-label="close" onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </TopBar>
                )}
                {props.children}
            </ModalContent>
        </CustomizedModal>
    );
};
export default CustomModal;
