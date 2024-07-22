import React from "react";
import { useNavigate } from "react-router-dom";
import {Modal,
        Header,
        ModalDescription,
        ModalContent,
        ModalActions,
        Button,
        } from "semantic-ui-react";

function SignoutMsg({ open, onClose }) {

    const navigate = useNavigate();

    return (
        <Modal
            centered={false}
            open={open}
            onClose={onClose}
        >
            <Header icon='sign-out alternate' content='Signout-Warning' />
            <ModalContent>
                <ModalDescription>
                    Are you sure you wish to sign-out ?
                </ModalDescription>
            </ModalContent>
            <ModalActions>
            <Button
          content="Cancel"
          icon='close'
          negative
          onClick={onClose}
        />
            <Button
          content="Yes"
          icon='checkmark'
          positive
          onClick={()=>{navigate("/")}}
        />
            </ModalActions>
        </Modal>
    );
}

export default SignoutMsg;