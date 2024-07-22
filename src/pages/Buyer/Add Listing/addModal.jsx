import React from "react";
import {Modal,
        ModalHeader,

} from "semantic-ui-react"

function AddModal({open,onClose}){
    return (
        <Modal
            centered = {false}
            open = {open}
            onClose={onClose}
        >
            <ModalHeader>Add new lisiting</ModalHeader>

            
        </Modal>
    )
}

export default AddModal;