interface IGroupData {
  name: string;
  contribution: number;
  cycle: string // e.g Every 30 days
  member: string // 12/15
}

interface IPoolStatus {
  total: number;
  emergency_pool: number
}
export type IUserGroupData = IGroupData &{ pool: IPoolStatus }


export type IMemberInGroup = {
  user_id: string // ALGO auth token name
  joined_at: string // properly formatted Date from November 3rd
  contribution: number // between 4 and 2
}

export type IEmergency = {
  name: string;
  requested: 500, // toys
  votes: number // between 2 and 3
}