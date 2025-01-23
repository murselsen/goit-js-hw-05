console.log('~~~~~~~~~ Task 4: ~~~~~~~~~');

//getTotalBalanceByGender;
const getTotalBalanceByGender = (users, gender) => {
  const balance = users.reduce((total, user) => {
    if (user.gender === gender) {
      return (total += user.balance);
    } else {
      return total;
    }
  }, 0);

  return balance;
};

const all_users = [
  {
    name: 'Moore Hensley',
    gender: 'male',
    balance: 2811,
  },
  {
    name: 'Sharlene Bush',
    gender: 'female',
    balance: 3821,
  },
  {
    name: 'Ross Vazquez',
    gender: 'male',
    balance: 3793,
  },
  {
    name: 'Elma Head',
    gender: 'female',
    balance: 2278,
  },
  {
    name: 'Carey Barr',
    gender: 'male',
    balance: 3951,
  },
  {
    name: 'Blackburn Dotson',
    gender: 'male',
    balance: 1498,
  },
  {
    name: 'Sheree Anthony',
    gender: 'female',
    balance: 2764,
  },
];

console.log(getTotalBalanceByGender(all_users, 'male')); // 12053

console.log(getTotalBalanceByGender(all_users, 'female')); // 8863
