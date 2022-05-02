export default function setUserStorage(user) {
  localStorage.setItem("user", JSON.stringify(user));
}
