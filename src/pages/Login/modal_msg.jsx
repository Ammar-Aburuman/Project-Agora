import React from "react";
import {Modal,
        ModalHeader,
        ModalDescription,
        ModalContent,
        ModalActions,
        Button,
        } from "semantic-ui-react";

function ModalMsg({ open, onClose }) {
    return (
        <Modal
            centered={false}
            open={open}
            onClose={onClose}
        >
            <ModalHeader>Our Services Are Down !</ModalHeader>
            <ModalContent>
                <ModalDescription>
                    Unfortunately the Login & Sign-Up services are inoperable right now. Please try to use Google login feature in the meantime.
                </ModalDescription>
                <ModalDescription>
                    Thank you for using our services.
                </ModalDescription>
            </ModalContent>
            <ModalActions>
                <Button onClick={onClose}>OK</Button>
            </ModalActions>
        </Modal>
    );
}

export default ModalMsg;

