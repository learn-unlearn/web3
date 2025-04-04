import React from 'react'

type IModal = {
  open: boolean
  children?: React.ReactNode
}

const Modal = ({open, children}: IModal) => {
  return (
    <div className={open ? "fixed inset-0 bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-md" : "hidden"}>
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full relative z-10">
        {children}
      </div>
    </div>
  )
}

export default Modal