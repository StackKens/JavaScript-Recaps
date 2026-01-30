const tasks = [];

function addTask(title) {
  const newTask = {
    id: tasks.length + 1,
    title,
    status: 'pending',
    createdAt: new Date(),
    completedAt: null,
  };

  tasks.push(newTask);

  console.log(`Task added: ${title}`);
}

function processTask(taskId) {
  console.log(`Processing task ${taskId}...`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const task = tasks.find((t) => t.id === taskId);

      if (!task) {
        reject('Task not found');
        return;
      }

      const success = Math.random() > 0.5;

      if (success) {
        task.status = 'completed';
        task.completedAt = new Date();
        resolve(task);
      } else {
        task.status = 'failed';
        reject('Task failed');
      }
    }, 2000);
  });
}

console.log(tasks);

function taskSummary() {
  return {
    total: tasks.length,
    completed: tasks.filter((t) => t.status === 'completed').length,
    failed: tasks.filter((t) => t.status === 'failed').length,
    pending: tasks.filter((t) => t.status === 'pending').length,
  };
}

console.log('Start');

addTask('Learn JavaScript');
addTask('Understand Async JS');

console.log('Before async task');

processTask(1)
  .then((task) => {
    console.log(`Success: ${task.title}`);
  })
  .catch((error) => {
    console.log('Error:', error);
  })
  .finally(() => {
    console.log('Summary:', taskSummary());
  });

console.log('After async task');
