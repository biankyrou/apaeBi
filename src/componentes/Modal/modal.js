import React from "react";
import Modal from "react-modal";
import Slider from '../Slider/slider.js';
import './modal.css';
import sliderData from '../Slider/sliderData.json';

function CustomModal({ cardId, closeModal }) {
    return (
        <div className="container-modal">
            <Modal
                isOpen={!!cardId}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="conteudo-modal"
                appElement={document.getElementById('root')}
            >
                {cardId && (
                    <>
                        <h2 className="titulo-modal">Galeria de fotos</h2>
                        <Slider slides={sliderData.sets.find(set => set.id === cardId)} />
                        <button className="button-modal" onClick={closeModal}>Close</button>
                    </>
                )}
            </Modal>
        </div>
    );
}

export default CustomModal;

