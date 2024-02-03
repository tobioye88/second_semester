function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function getUser(username) {
  if (!username) throw new Error("Username is required");
  return {
    username,
  };
}

module.exports = {
  getFullName,
  getUser,
};
