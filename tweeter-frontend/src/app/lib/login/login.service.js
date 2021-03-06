/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T11:10:40-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: login.service.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-13T16:28:48-05:00
 */

export class LoginService {
  constructor (localStorageService, $http, $log, $q) {
    'ngInject'
    this.localStorageService = localStorageService
    this.$http = $http
    this.$log = $log
    this.$q = $q
  }

  /**
   * Returns true if the user is currently authenticated, else false
   */
  isAuthenticated () {
    return this.localStorageService.get('currentUser') !== null
  }

  userDoesExists (user) {
    return this.$http({
      method: 'GET',
      url: `http://localhost:8888/user/validate/username/exists/@${user}`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/json'
      }
    }).then((response) => {
      if (response.data === true) {
        return true
      } else {
        return false
      }
    }, (response) => {
      return false
    })
  }

  /**
   * Authentication function that returns a promise that is either resolved or rejected.
   */
  authenticate (username, password) {
    // checks if the username is one of the known usernames, and the password is 'password'

    let userObject = { credentials: { username: username, password: password } }

    return this.$http({
      method: 'POST',
      url: 'http://localhost:8888/user/users/validate/user',
      data: userObject,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/json'
      }
    }).then((response) => {
      if (response.data.username !== undefined) {
        this.localStorageService.set('currentUser', response.data)
        this.localStorageService.set('password', password)
        return true
      }

      return false
    }, (response) => {
      return false
    })
  }

  /** Logs the current user out */
  logout () {
    return this.$q((resolve, reject) => {
      this.localStorageService.clearAll()
      if (this.localStorageService.get('currentUser') === null) {
        resolve(true)
      } else {
        reject(false)
      }
    })
  }
}
