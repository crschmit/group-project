/**
 * @Author: Anthony Perry
 * @Date:   2017-07-12T17:41:43-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: tag.config.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-12T21:14:46-05:00
 */
 export const config =
   ($stateProvider) => {
     'ngInject'
     $stateProvider.state({
       name: 'tag',
       url: '/tag/{label}',
       component: 'twtrTag',
       resolve: {
         tweets: (tagService, $transition$) => {
           return tagService.displayTweets($transition$.params().label)
         },

         label: ($transition$) => $transition$.params().label
       }
     })
   }
