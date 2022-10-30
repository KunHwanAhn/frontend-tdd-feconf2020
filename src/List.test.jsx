import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import List from './List';

import tasks from '../fixtures/tasks';

describe('List', () => {
  const handleClick = jest.fn();

  function rednerList(_tasks) {
    return render((
      <List
        tasks={_tasks}
        onClick={handleClick}
      />
    ));
  }

  context('with tasks', () => {
    it('renders tasks', () => {
      const { container } = rednerList(tasks);

      expect(container).toHaveTextContent('아무 일도 하기 싫다');
      expect(container).toHaveTextContent('건물 매입');
    });

    it('renders "완료" buttons to delee a task', () => {
      const { getAllByText } = rednerList(tasks);

      const buttons = getAllByText('완료');

      fireEvent.click(buttons[0]);

      expect(handleClick).toBeCalled();
    });
  });

  context('without tasks', () => {
    it('renders no task message', () => {
      const emptyTasks = [];

      const { container } = rednerList(emptyTasks);

      expect(container).toHaveTextContent('할 일이 없어요!');
    });
  });
});
