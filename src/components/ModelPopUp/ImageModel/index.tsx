import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { FaExpand, FaCompress } from "react-icons/fa";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={isFullScreen ? "full" : "xl"}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          Document Image
          <IconButton
            aria-label="Toggle Fullscreen"
            icon={isFullScreen ? <FaCompress /> : <FaExpand />}
            onClick={toggleFullScreen}
            variant="ghost"
          />
        </ModalHeader>
        <ModalBody>
          {imageUrl && (
            <Image
              src={`${imageUrl}`}
              alt="Document Image"
              width="100%"
              height="auto"
            />
          )}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ImageModal;
