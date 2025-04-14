import { addTodo, completeTodo, deleteTodo, editTodo, getAllTodos, uncompleteTodo } from '@/api';
import { expect, test} from '@jest/globals';

test('GET all TODOs', async () => {
  const actual = await getAllTodos();
  expect(actual).toEqual([
    {
      id: "1",
      text: "Test 1",
      done: false,
      priority: "MEDIUM"
    },
    {
      id: "2",
      text: "Test 2",
      done: false,
      priority: "MEDIUM"
    },
    {
      id: "3",
      text: "Test 3",
      done: false,
      priority: "MEDIUM"
    }
  ]);
});

test('add a TODO', async () => {
  await addTodo({
    id: "4",
    text: "Test 4",
    priority: "MEDIUM"
  });
  const actual = await getAllTodos();

  expect(actual).toEqual([
    {
      id: "1",
      text: "Test 1",
      done: false,
      priority: "MEDIUM"
    },
    {
      id: "2",
      text: "Test 2",
      done: false,
      priority: "MEDIUM"
    },
    {
      id: "3",
      text: "Test 3",
      done: false,
      priority: "MEDIUM"
    },
    {
      id: "4",
      text: "Test 4",
      done: false,
      priority: "MEDIUM"
    }
  ]);
});

test('edit a TODO', async () => {
  await editTodo({
    id: "2",
    text: "Test 2 edited"
  });
  const actual = await getAllTodos();

  expect(actual).toEqual([
    {
      id: "1",
      text: "Test 1",
      done: false,
      priority: "MEDIUM"
    },
    {
      id: "2",
      text: "Test 2 edited",
      done: false,
      priority: "MEDIUM"
    },
    {
      id: "3",
      text: "Test 3",
      done: false,
      priority: "MEDIUM"
    },
    {
      id: "4",
      text: "Test 4",
      done: false,
      priority: "MEDIUM"
    }
  ]);
});

test('delete a TODO', async () => {

  await deleteTodo('2');
  const actual = await getAllTodos();

  expect(actual).toEqual([
    {
      id: "1",
      text: "Test 1",
      done: false,
      priority: "MEDIUM"
    },
    {
      id: "3",
      text: "Test 3",
      done: false,
      priority: "MEDIUM"
    },
    {
      id: "4",
      text: "Test 4",
      done: false,
      priority: "MEDIUM"
    }
  ]);
});

test('complete a TODO', async () => {
  await completeTodo("3");
  const actual = await getAllTodos();

  expect(actual).toEqual([
    {
      id: "1",
      text: "Test 1",
      done: false,
      priority: "MEDIUM"
    },
    {
      id: "3",
      text: "Test 3",
      done: true,
      priority: "MEDIUM"
    },
    {
      id: "4",
      text: "Test 4",
      done: false,
      priority: "MEDIUM"
    }
  ]);
});

test('uncomplete a TODO', async () => {
  await uncompleteTodo("3");
  const actual = await getAllTodos();

  expect(actual).toEqual([
    {
      id: "1",
      text: "Test 1",
      done: false,
      priority: "MEDIUM"
    },
    {
      id: "3",
      text: "Test 3",
      done: false,
      priority: "MEDIUM"
    },
    {
      id: "4",
      text: "Test 4",
      done: false,
      priority: "MEDIUM"
    }
  ]);
});
