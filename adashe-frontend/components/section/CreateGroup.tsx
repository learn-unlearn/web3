import React from 'react'
import Modal from '../ui/modals'
import Input from '../input'
import Button from '../ui/button'
import { ICreateGroupData, ICreateGroupError } from '@/interfaces/group'

type ICreateGroup = {
  open: boolean
  onClose: () => void
}

const CreateGroup = ({open, onClose}: ICreateGroup) => {

  const [data, dataSet] = React.useState<ICreateGroupData>({
    amount: 0,
    cycle: "",
    emergency_pool: 0,
    group_name: "",
    maximum_member: 0
  })
  const [error, errorSet] = React.useState<ICreateGroupError>({
    amount: "",
    cycle: "",
    emergency_pool: "",
    group_name: "",
    maximum_member: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    dataSet(prev => ({...prev, [name]: value}))
    errorSet(prev => ({...prev, [name]: ""}))
  }

  const handleSubmit = () => {
    let validate: boolean = false
    if (!data.amount) {
      validate = true
      errorSet(prev => ({...prev, amount: "warning"}))
    }
    if (!data.cycle) {
      validate = true
      errorSet(prev => ({...prev, cycle: "warning"}))
    }
    if (!data.emergency_pool) {
      validate = true
      errorSet(prev => ({...prev, emergency_pool: "warning"}))
    }
    if (!data.group_name) {
      validate = true
      errorSet(prev => ({...prev, group_name: "warning"}))
    }
    if (!data.maximum_member) {
      validate = true
      errorSet(prev => ({...prev, maximum_member: "warning"}))
    }
    if (validate) return;
  }

  return (
    <Modal open={open}>
      <div className='w-full text-right'>
        <span  onClick={onClose} className='text-[1.2rem] text-body-color-dark cursor-pointer'>X</span>
      </div>

      <Input status={error.group_name} name="group_name" label='Group Name' type='text' onChange={handleChange} value={data.group_name} placeholder='Farmer Weekly Contribution' className='my-2' />
      <Input status={error.amount} name="amount" label='Contribution Amount (ALGO)' type='text' onChange={handleChange} value={data.amount?.toString()} placeholder='2000' className='my-2' />
      <Input status={error.cycle} name="cycle" label='Cycle Length (Days)' type='text' onChange={handleChange} value={data.cycle?.toString()} placeholder='7' className='my-2' />
      <Input status={error.maximum_member} name="maximum_member" label='Maximum Members' type='text' onChange={handleChange} value={data.maximum_member?.toString()} placeholder='20' className='my-2' />
      <Input status={error.emergency_pool} name="emergency_pool" label='Emergency Pool Percentage' type='text' onChange={handleChange} value={data.emergency_pool?.toString()} placeholder='50%' className='my-2' />

      <div className='w-full flex items-center justify-center'>
        <Button text='Submit' onClick={handleSubmit} className='my-3 text-gray-600' />
      </div>
    </Modal>
  )
}

export default CreateGroup