const createGit = window.require('simple-git/promise');

export default dir => createGit(dir);
