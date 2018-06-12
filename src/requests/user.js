export const User = {
  one() {
    return fetch(
      `https://api.github.com/users/defunkt`
    ).then(response => response.json())
  }
}
