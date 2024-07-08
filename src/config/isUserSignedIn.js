// Let's reveal certain links depending if the user is signed in out not
const isUserSignedIn = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("token")) {
    return JSON.parse(localStorage.getItem("token"));
  } else {
    return false;
  }
};

export default isUserSignedIn;
