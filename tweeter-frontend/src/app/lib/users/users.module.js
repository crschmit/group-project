/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T13:55:46-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: usesrs.module.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-12T21:41:40-05:00
 */

import { UsersService } from 'users/users.service'
import { twtrUsers } from 'users/users.component'
import { config } from 'users/users.config'
// import usersData from 'users/users.data'

import simpleUser from 'simple-user/simple-user.module'

export default ng
  .module('twtr.users', [simpleUser])
  .service('usersService', UsersService)
  .component('twtrUsers', twtrUsers)
  // .constant('usersData', usersData)
  .config(config)
  .name
