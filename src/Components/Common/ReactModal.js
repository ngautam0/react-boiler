import Modal from 'react-modal';
import React, {Component} from 'react';

const customStyles = {
  content : {
    // put custom styling here
  }
};

Modal.setAppElement('#root')

export default class ReactModal extends Component{
  constructor(){
    super()
    this.state = {
     modalIsOpen: false
   };

   this.openModal = this.openModal.bind(this);
   this.afterOpenModal = this.afterOpenModal.bind(this);
   this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render(){
    return(
        <React.Fragment>

          <button className="btn btn-warning btn-lg" onClick={this.openModal}>Open Modal</button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="NFA Modal"
          shouldCloseOnOverlayClick={false}
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Some Error / Info Modal</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </React.Fragment>

    )


  }
}
