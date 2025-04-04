import { IUserGroupData } from '@/interfaces/temp'
import React from 'react'

type IGroupCard = {
  group: IUserGroupData
}

const GroupCard = ({group}: IGroupCard) => {
  return (
    <div className="text-gray-900 flex items-center justify-between py-6 px-4 overflow-y-auto overflow-x-hidden border rounded-md shadow-md my-3">
      <div>
        <h3 className="font-[800] text-[1.5rem]">{group.name}</h3>
        <h5 className="text-[.85rem] text-gray-800">Contribution: {group.contribution} ALGO</h5>
        <h5 className="text-[.85rem] text-gray-800">Cycle: {group.contribution} days</h5>
        <h5 className="text-[.85rem] text-gray-800">Members: {group.contribution} ALGO</h5>
      </div>
      <div className="text-right">
        <h6 className="text-[.85rem] text-gray-800">Total Pool</h6>
        <h3 className="font-[800] text-[1.5rem]">{group.pool.total}</h3>
        <h6 className="text-[.85rem] text-gray-800">Emergency Pool: {group.pool.emergency_pool} ALGO</h6>
      </div>
    </div>
  )
}

export default GroupCard