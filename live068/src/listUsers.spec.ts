import axios from 'axios';
import { expect, it, vi } from 'vitest';

import { listUsers } from './listUsers';

vi.mock('axios');

const getMock = vi.mocked(axios.get).mockResolvedValue({
  data: [
    {
      id: 1,
      name: 'Mateus',
      email: 'mateus@jstack.com.br',
    },
  ],
});;

it('should call get correctly', async () => {
  await listUsers();

  expect(getMock).toHaveBeenCalledOnce();
  expect(getMock).toHaveBeenCalledWith(
    'https://jsonplaceholder.typicode.com/users',
    {
      auth: {
        username: 'admin',
        password: '123',
      },
    }
  );
});

it('should return users on success', async () => {
  const users = await listUsers();

  expect(users).toEqual([
    {
      id: 1,
      name: 'Mateus',
      email: 'mateus@jstack.com.br',
    },
  ])
});
