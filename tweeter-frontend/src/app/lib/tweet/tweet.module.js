/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T14:53:25-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: tweet.module.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-13T02:27:41-05:00
 */

import { twtrTweet } from 'tweet/tweet.component'
import { tweetLikes } from 'tweet/tweet.likes.component'
import { tweetMentions } from 'tweet/tweet.mentions.component'
import { tweetReposts } from 'tweet/tweet.reposts.component'
import { tweetTags } from 'tweet/tweet.tags.component'
import { TweetService } from 'tweet/tweet.service'
import { config } from 'tweet/tweet.config'

import simpleTweet from 'simple-tweet/simple-tweet.module'

export default ng
  .module('twtr.tweet', [simpleTweet])
  .service('tweetService', TweetService)
  .component('twtrTweet', twtrTweet)
  .component('tweetLikes', tweetLikes)
  .component('tweetMentions', tweetMentions)
  .component('tweetReposts', tweetReposts)
  .component('tweetTags', tweetTags)
  .config(config)
  .name
