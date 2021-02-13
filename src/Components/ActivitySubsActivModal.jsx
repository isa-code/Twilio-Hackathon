import React, { useEffect } from "react";
import ReactModal from "react-modal";
import "./Modal.css";
import { Component } from "react";

class ActivitySubsActivModal extends Component {
  render() {
    return (
      <div>
        {this.props.info === true && (
          <ReactModal
            isOpen={true}
            onRequestClose={this.handleRequestCloseFunc}
            closeTimeoutMS={10000}
            style={
              { overlay: {}, content: {} }
              /* Object indicating styles to be used for the modal.
                It has two keys, `overlay` and `content`.
                See the `Styles` section for more details. */
            }
            contentLabel={"Mission subscription confirmation"}
            portalClassName={"confirmationModal"}
            overlayClassName={"confirmationModal_Overlay"}
            className={"confirmationModal_Content"}
            bodyOpenClassName={"confirmationModal_BodyOpen"}
            htmlOpenClassName={"confirmationModal_HtmlOpen"}
            // ariaHideApp={false}

            shouldFocusAfterRender={
              true
              /* Boolean indicating if the modal should be focused after render. */
            }
            shouldCloseOnOverlayClick={
              true
              /* Boolean indicating if the overlay should close the modal */
            }
            shouldCloseOnEsc={true}
            shouldReturnFocusAfterClose={true}
            role={"confirmation"}
            preventScroll={false}
            parentSelector={
              () => this.props.info
              /* Function that will be called to get the parent element
               that the modal will be attached to. */
            }
            aria={
              {
                labelledby: "heading",
                describedby: "full_description",
              }
              /* Additional aria attributes (optional). */
            }
            data={
              { background: "green" }
              /* Additional data attributes (optional). */
            }
            overlayRef={
              this.setOverlayRef
              /* Overlay ref callback. */
            }
            contentRef={
              this.props.info
              /* Content ref callback. */
            }
            overlayElement={
              (props, contentElement) => <div {...props}>{contentElement}</div>
              /* Custom Overlay element. */
            }
            contentElement={
              (props, children) => <div {...props}>{children}</div>
              /* Custom Content element. */
            }
          >
            <p>Modal Content</p>
          </ReactModal>
        )}
      </div>
    );
  }
}

export default ActivitySubsActivModal;
