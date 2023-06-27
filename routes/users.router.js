const express = require('express');
const { faker } = require('@faker-js/faker');


const router = express.Router();

router.get('/', (req, res) => {
  const users = [];
  for (let index = 0; index < 100; index++) {
    users.push({
      fullname: faker.person.fullName(),
      email: faker.internet.email(),
      job: faker.person.jobTitle(),
      birthdate: faker.date.birthdate({mode: 'age'}),
    });
  }
  res.json(users);
});

module.exports = router;