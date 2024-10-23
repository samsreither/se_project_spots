class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    })
    .then(this._checkResponse);
  }

  getAppInfo() {
    // call getUserInfo it in this array
    return Promise.all([this.getInitialCards(), this.getUserInfo()]);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then(this._checkResponse);
}

addCard({ name, link }) {
  return fetch(`${this._baseUrl}/cards`, {
    method: "POST",
    headers: this._headers,
    // Send the data in the body as a JSON string.
    body: JSON.stringify({
      name,
      link,
    }),
  }).then(this._checkResponse);
}

editUserInfo({ name, about }) {
  return fetch(`${this._baseUrl}/users/me`, {
    method: "PATCH",
    headers: this._headers,
    // Send the data in the body as a JSON string.
    body: JSON.stringify({
      name,
      about,
    }),
  }).then(this._checkResponse);
}

editAvatarInfo(avatar) {
  return fetch(`${this._baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: this._headers,
    // Send the data in the body as a JSON string.
    body: JSON.stringify({
      avatar
    }),
  }).then(this._checkResponse);
}

deleteCard(id) {
  return fetch(`${this._baseUrl}/cards/${id}`, {
    method: "DELETE",
    headers: this._headers,
  }).then(this._checkResponse);
}

addLike(cardId) {
  return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
    method: "PUT",
    headers: this._headers,
  })
  .then(this._checkResponse);
}

removeLike(cardId) {
  return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
    method: "DELETE",
    headers: this._headers,
  })
  .then(this._checkResponse);
}
}

export default Api;