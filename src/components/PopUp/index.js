import React from "react";
import { Modal, ModalHeader, ModalBody, FormInput, InputGroup, InputGroupAddon, Button } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default function PopUp({ open, toggle, header, onChange, onClick, placeholder }) {
  return (
    <Modal open={open} toggle={toggle}>
      <ModalHeader>{header}</ModalHeader>
      <ModalBody>
        <InputGroup>
          <FormInput placeholder={placeholder} onChange={onChange} />
          <InputGroupAddon type="append">
            <Button theme="secondary" onClick={onClick}>
              Create
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </ModalBody>
    </Modal>
  );
}
