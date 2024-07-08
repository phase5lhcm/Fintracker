// stores user data in local storage
const storeUserData = (userData, callback) => {
  // first check that you are running in a webpage
  if (typeof (window !== "undefined")) {
    localStorage.setItem("token", JSON.stringify(userData));
    callback();
  }
};

export default storeUserData;
