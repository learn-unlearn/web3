import React from 'react'
import Modal from '../ui/modals'
import Input from '../input'
import Button from '../ui/button'
import { ICreateGroupData, ICreateGroupError } from '@/interfaces/group'

type ICreateGroup = {
  open: boolean
  onClose: () => void
}

const InviteMember = ({open, onClose}: ICreateGroup) => {

  const [data, dataSet] = React.useState<{email: string}>({
    email: "",
  })
  const [error, errorSet] = React.useState<{email: "warning" | ""}>({
    email: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    dataSet(prev => ({...prev, [name]: value}))
    errorSet(prev => ({...prev, [name]: ""}))
  }

  const handleSubmit = () => {
    let validate: boolean = false
    if (!data.email) {
      validate = true
      errorSet(prev => ({...prev, email: "warning"}))
    }
    if (validate) return;
  }

  return (
    <Modal open={open}>
      <div className='w-full text-right'>
        <span  onClick={onClose} className='text-[1.2rem] text-body-color-dark cursor-pointer'>X</span>
      </div>

      <Input status={error.email} name="email" label='Group Name' type='text' onChange={handleChange} value={data.email} placeholder='farmer@mail.com' className='my-2' />

      <div className='w-full flex items-center justify-center'>
        <Button text='Submit' onClick={handleSubmit} className='my-3 text-gray-600' />
      </div>
    </Modal>
  )
}

export default InviteMember