//task-1

const delay = (ms) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ms > 0) {
        resolve(ms);
      }
    }, ms);
  });
  return promise;
};

const logger = (time) => console.log(`Resolved after ${time}ms`);

delay(2000)
  .then(logger)
  .catch((err) => console.log(err));
delay(1000)
  .then(logger)
  .catch((err) => console.log(err));
delay(1500)
  .then(logger)
  .catch((err) => console.log(err));
delay("ggg").then(() => {
  console.log(`Resolved after ${time}ms`);
});
  // .catch((err) => console.error(`не передано нужное значение`));

//task2

const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName) => {

    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            const updatedUsers = allUsers.map(user =>
                user.name === userName ? { ...user, active: !user.active } : user,
                );
        res(updatedUsers);

            // rej();
    });
  },0);
  return promise
};

const logger1 = (updatedUsers) => console.table(updatedUsers);

toggleUserState(users, "Mango").then(logger1);
toggleUserState(users, "Lux").then(logger1);

// //task3

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
  const delay = randomIntegerFromInterval(200, 500);
  return new Promise((res, rej) => {
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;
      if (canProcess) {
        res({ id: transaction.id, time: delay });
      } else {
        rej({ id: transaction.id });
      }
    }, delay);
  });
};

const logSuccess = ({id, time}) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = ({id}) => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
