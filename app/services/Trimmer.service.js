const publicidTrimmer = (id) => {
  const parts = id.split("/");
  return parts[parts.length - 1];
};
module.exports = publicidTrimmer;
