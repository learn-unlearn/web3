import { IEmergency, IMemberInGroup, IUserGroupData } from "@/interfaces/temp";

const constant_data: {
  groups: IUserGroupData[];
  users: IMemberInGroup[]
  emegencies: IEmergency[]
} = {
  groups: [
    {
      name: 'Group A',
      contribution: 1200,
      cycle: 'Every 30 days',
      member: '12/20',
      pool: {
        total: 50000,
        emergency_pool: 10000
      }
    },
    {
      name: 'Group B',
      contribution: 1500,
      cycle: 'Every 45 days',
      member: '10/15',
      pool: {
        total: 35000,
        emergency_pool: 7000
      }
    },
    {
      name: 'Group C',
      contribution: 1800,
      cycle: 'Every 60 days',
      member: '18/25',
      pool: {
        total: 60000,
        emergency_pool: 12000
      }
    },
    {
      name: 'Group D',
      contribution: 2200,
      cycle: 'Every 90 days',
      member: '9/12',
      pool: {
        total: 40000,
        emergency_pool: 8000
      }
    },
    {
      name: 'Group E',
      contribution: 1400,
      cycle: 'Every 30 days',
      member: '16/18',
      pool: {
        total: 45000,
        emergency_pool: 9000
      }
    },
    {
      name: 'Group F',
      contribution: 2000,
      cycle: 'Every 60 days',
      member: '20/22',
      pool: {
        total: 70000,
        emergency_pool: 14000
      }
    },
    {
      name: 'Group G',
      contribution: 1600,
      cycle: 'Every 45 days',
      member: '14/19',
      pool: {
        total: 55000,
        emergency_pool: 11000
      }
    },
    {
      name: 'Group H',
      contribution: 2100,
      cycle: 'Every 75 days',
      member: '8/10',
      pool: {
        total: 42000,
        emergency_pool: 8400
      }
    },
    {
      name: 'Group I',
      contribution: 2500,
      cycle: 'Every 30 days',
      member: '22/30',
      pool: {
        total: 80000,
        emergency_pool: 16000
      }
    },
    {
      name: 'Group J',
      contribution: 2300,
      cycle: 'Every 90 days',
      member: '7/9',
      pool: {
        total: 38000,
        emergency_pool: 7600
      }
    }
  ],
  users: [
    {
      user_id: 'ALGO_token_12345678',
      joined_at: new Date('2024-11-03T00:00:00Z')?.toString(),
      contribution: Math.floor(Math.random() * 3) + 2 // Random number between 2 and 4
    },
    {
      user_id: 'ALGO_token_23456789',
      joined_at: new Date('2024-11-03T00:00:00Z')?.toString(),
      contribution: Math.floor(Math.random() * 3) + 2 // Random number between 2 and 4
    },
    {
      user_id: 'ALGO_token_34567890',
      joined_at: new Date('2024-11-03T00:00:00Z')?.toString(),
      contribution: Math.floor(Math.random() * 3) + 2 // Random number between 2 and 4
    }
  ],
  emegencies: [
    {
      name: 'Emergency Toy Delivery A',
      requested: 500,
      votes: Math.floor(Math.random() * 2) + 2, // Random number between 2 and 3
    },
    {
      name: 'Emergency Toy Delivery B',
      requested: 500,
      votes: Math.floor(Math.random() * 2) + 2, // Random number between 2 and 3
    },
    {
      name: 'Emergency Toy Delivery C',
      requested: 500,
      votes: Math.floor(Math.random() * 2) + 2, // Random number between 2 and 3
    }
  ]
}

export default constant_data