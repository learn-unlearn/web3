import React from 'react'

type ITabItem = {
  id: number,
  name: string
}

interface ITabs {
  tabs:ITabItem[];
  active: ITabItem,
  onClick: (data: ITabItem) => void
}

const Tabs = ({tabs, active, onClick}: ITabs) => {
  return (
    
      <div className='text-primary  bg-gray-300 py-2 px-1 rounded-md inline-flex'>
        {tabs.map(tab => (
          <div onClick={() => onClick(tab)} className={`px-4 py-2 cursor-pointer ${active.id === tab.id ? "border-b border-primary bg-white rounded-md" : ""}`} key={tab.id}>
            {tab.name}
          </div>
          )
        )}
      </div>
    
  )
}

export default Tabs