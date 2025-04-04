import { IMemberInGroup } from '@/interfaces/temp'
import React from 'react'

type IUserJoinedCard = {
  user: IMemberInGroup
}

const UserJoinedCard = ({user}: IUserJoinedCard) => {
  return (
    <div className="text-gray-900 flex items-center justify-between py-4 px-3 overflow-y-auto overflow-x-hidden border rounded-md shadow-md my-3">
      <div>
        <h3 className="font-[800] text-[1.5rem]">{user.user_id}</h3>
        <h5 className="text-[.85rem] text-gray-800">Joined At: {user.joined_at} ALGO</h5>
      </div>
      <div className="text-right">
        <h6 className="text-[.85rem] text-gray-800">Contribution: {user.contribution} ALGO</h6>
      </div>
    </div>
  )
}

export default UserJoinedCard