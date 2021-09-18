const client = require("./postgresIntialization");

function getRole({ userId }) {
  const query = `SELECT users.role FROM users WHERE id = '${userId}';`;
  const USER_DATA_INDEX = 0;
  return new Promise((resolve, reject) => {
    client.query(query, (postgressError, postgresResponse) => {
      if (postgressError) {
        reject({
          error: true,
          status: 500,
          description: postgressError.detail,
        });
        return;
      }
      resolve(postgresResponse.rows[USER_DATA_INDEX]);
    });
  });
}

function addUser({ userId, role }) {
  const query = `INSERT INTO users(id,role)VALUES('${userId}','${role}');`;
  return new Promise((resolve, reject) => {
    client.query(query, (postgressError) => {
      if (postgressError) {
        reject({
          error: true,
          status: 500,
          description: postgressError.detail,
        });
        return;
      }
      resolve({ error: false, description: "successfully added user" });
    });
  });
}

module.exports = {
  getRole,
  addUser,
};
