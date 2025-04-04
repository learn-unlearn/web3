'use client'

import CreateGroup from "@/components/section/CreateGroup";
import InviteMember from "@/components/section/InviteMember";
import Button from "@/components/ui/button";
import Emergency from "@/components/ui/emergencies";
import GroupCard from "@/components/ui/group-card";
import Tabs from "@/components/ui/tabs";
import UserJoinedCard from "@/components/ui/user-joined";
import constant_data from "@/config/constant";
import { useState } from "react";

type TabItem = {
  id: number,
  name: string
}

const tabs: TabItem[] = [
  {
    id: 1,
    name: "Active Groups"
  },
  {
    id: 2,
    name: "Member Management"
  },
  {
    id: 3,
    name: "Emergency Fund"
  }
]


const DashboardPage = () => {

  const [active, activeSet] = useState<TabItem>(tabs[0])
  const [create, createSet] = useState<boolean>(false)
  const [invite, inviteSet] = useState<boolean>(false)

  return (
    <main className="w-full h-[100vh] grid justify-center py-4 overflow-hidden bg-white">
      <main className="shadow-md px-4 py-2 grid grid-rows-[5rem,1fr] lg:min-w-[90vw] min-w-full  border rounded-lg bg-white overflow-hidden">
        <div className="flex justify-between items-center my-4">
          <h3 className="text-[1.6rem] text-primary font-[700]">Adashe Pay Dashboard</h3>
         
          <Button text="Create New Group" onClick={() => createSet(true)} className="text-primary" />
        </div>

        <section className="border-[2px] rounded-lg py-3 p-2 mb-2 h-full overflow-hidden">
          <div className="flex items-center justify-between">
            <h3 className="text-primary font-[800] py-2">{active.name}</h3>

            {active.id === 2 && <Button text="Invite Member" onClick={() => inviteSet(true)} className="text-white bg-gray-600" />}
          </div>

          <section className="overflow-hidden h-full"> {/* Set the correct height for scrolling */}
            <Tabs tabs={tabs} active={active} onClick={(res) => activeSet(res)} />

            <section className="overflow-y-auto h-full pb-16"> {/* Adjust max height */}
              {active.id === 1 && constant_data.groups.map(group => (
                <GroupCard group={group} key={group.name + Math.random() * 30} />
              ))}

              {active.id === 2 && constant_data.users.map(user => (
                <UserJoinedCard user={user} key={user.contribution  + Math.random() * 30} />
              ))}

              {active.id === 3 && constant_data.emegencies.map(emergency => (
                <Emergency emergency={emergency} key={emergency.name  + Math.random() * 30} />
              ))}
            </section>
          </section>
        </section>
      </main>
      <CreateGroup open={create} onClose={() => createSet(false)} />
        <InviteMember open={invite} onClose={() => inviteSet(false)} />
    </main>
  );
};

export default DashboardPage;
