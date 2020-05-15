const { createRating } = require('../../db/index');

const sum = (acum, curr) => acum + curr;

module.exports = {
  Professor: {
    averageRating: (p) => {
      const ratingsCount = p.ratings.length;

      if (ratingsCount === 0) {
        return 0;
      }

      const responsibility = p.ratings.map(r => r.responsibility).reduce(sum, 0) / ratingsCount;
      const amountOfWork = p.ratings.map(r => r.amountOfWork).reduce(sum, 0) / ratingsCount;
      const personality = p.ratings.map(r => r.personality).reduce(sum, 0) / ratingsCount;
      const difficulty = p.ratings.map(r => r.difficulty).reduce(sum, 0) / ratingsCount;

      return (responsibility + amountOfWork + personality + difficulty) / 4;
    },
    avgResponsibility: (p) => {
      const ratingsCount = p.ratings.length;

      if (ratingsCount === 0) {
        return 0;
      }

      return p.ratings.map(r => r.responsibility).reduce(sum, 0) / ratingsCount;
    },
    avgAmountOfWork: (p) => {
      const ratingsCount = p.ratings.length;

      if (ratingsCount === 0) {
        return 0;
      }

      return p.ratings.map(r => r.amountOfWork).reduce(sum, 0) / ratingsCount;
    },
    avgPersonality: (p) => {
      const ratingsCount = p.ratings.length;

      if (ratingsCount === 0) {
        return 0;
      }

      return p.ratings.map(r => r.personality).reduce(sum, 0) / ratingsCount;
    },
    avgDifficulty: (p) => {
      const ratingsCount = p.ratings.length;

      if (ratingsCount === 0) {
        return 0;
      }

      return p.ratings.map(r => r.difficulty).reduce(sum, 0) / ratingsCount;
    }
  },
  Mutation: {
    createRating: (_, { params }) => createRating(params)
  }
}
