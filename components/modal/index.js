import Modal from './Modal'
import modalConfirm from './confirm'

// export { ActionButtonProps } from './ActionButton'
// export { ModalProps, ModalFuncProps } from './Modal'

const info = function (props) {
  const config = {
    type: 'info',
    iconType: 'info-circle-fill',
    okCancel: false,
    ...props,
  }
  return modalConfirm(config)
}

const success = function (props) {
  const config = {
    type: 'success',
    iconType: 'check-circle-fill',
    okCancel: false,
    ...props,
  }
  return modalConfirm(config)
}

const error = function (props) {
  const config = {
    type: 'error',
    iconType: 'close-circle-fill',
    okCancel: false,
    ...props,
  }
  return modalConfirm(config)
}

const warning = function (props) {
  const config = {
    type: 'warning',
    iconType: 'warning-circle-fill',
    okCancel: false,
    ...props,
  }
  return modalConfirm(config)
}
const warn = warning

const confirm = function (props) {
  const config = {
    type: 'confirm',
    okCancel: true,
    ...props,
  }
  return modalConfirm(config)
}
Modal.info = info
Modal.success = success
Modal.error = error
Modal.warning = warning
Modal.warn = warn
Modal.confirm = confirm

export default Modal
