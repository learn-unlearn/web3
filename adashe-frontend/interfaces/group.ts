export type ICreateGroupData = {
  group_name: string;
  amount: number;
  cycle: string
  maximum_member: number;
  emergency_pool: number
}

export type ICreateGroupError = {
  group_name: "warning" | "";
  amount: "warning" | "";
  cycle: "warning" | "";
  maximum_member: "warning" | "";
  emergency_pool: "warning" | "";
}