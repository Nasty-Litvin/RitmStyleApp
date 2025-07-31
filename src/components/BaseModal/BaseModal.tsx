import { Box, Button, Modal } from "@mui/material";
import Title from "../Title/Title";
import { BaseModalProps } from "./types";
import "./style.scss";


const BaseModal = ({open, handleClose, titleModal, content, btn}: BaseModalProps) => {
    return ( 
     <div className="base-modal">
          <div className="base-modal__wrapper">
               <Modal open={open} onClose={handleClose}>
                    <Box className="base-modal__box">
                         <div className="base-modal__title">
                              <Title textTitle={titleModal}/>
                         </div>
                         <div className="base-modal__content">
                              {content}
                         </div>
                         {btn && (
                              <div className="base-modal__buttons">
                                   <Button>Сохранить</Button>
                                   <Button>Отмена</Button>
                              </div>
                         )}
                    </Box>
               </Modal>
          </div>
     </div>

     );
}
 
export default BaseModal;