const uuid = require('uuid');

const professors = {};

const createProfessor = (params) => {
  const id = uuid();

  const p = {
    id,
    name: params.name,
    college: params.college,
    department: params.department,
    gender: params.gender,
    ratings: [],
    comments: [],
  }

  professors[id] = p;

  return p;
}

const searchProfessors = (name) => {
  return Object.values(professors).filter(p => p.name === name);
}

const findByProfessorId = (id) => {
  return professors[id] || null;
}

const createComment = (params) => {
  const p = findByProfessorId(params.id);

  if (!p) {
    return null;
  }

  const c = {
    id: uuid(),
    message: params.message,
    date: new Date(),
  };

  p.comments.push(c);

  professors[p.id] = p;

  return c;
}

const createRating = (params) => {
  const p = findByProfessorId(params.id);

  if (!p) {
    return null;
  }

  const r = {
    id: uuid(),
    responsibility: params.responsibility,
    amountOfWork: params.amountOfWork,
    personality: params.personality,
    difficulty: params.difficulty,
    date: new Date(),
  }

  p.ratings.push(r);

  professors[p.id] = p;

  return r;
}

module.exports = {
  professors,
  searchProfessors,
  createProfessor,
  createComment,
  createRating,
};
