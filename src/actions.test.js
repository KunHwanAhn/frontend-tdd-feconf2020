import configureStore from 'redux-mock-store';

import thunk from 'redux-thunk';

import { fetchTasks } from './services/api';

import { loadTasks } from './actions';

import tasks from '../fixtures/tasks';

jest.mock('./services/api');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('loadTasks', () => {
  beforeEach(() => {
    fetchTasks.mockResolvedValue(tasks);
  });

  it('set tasks', async () => {
    const store = mockStore({ tasks: [] });

    await store.dispatch(loadTasks());

    const actions = store.getActions();

    expect(actions).toEqual([
      { type: 'setTasks', payload: { tasks: [] } },
      { type: 'setTasks', payload: { tasks } },
    ]);
  });
});
