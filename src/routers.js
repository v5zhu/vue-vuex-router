/**
 * Created by wwm on 2016/9/24.
 */
'use strict';
//注册路由
export default function (router) {
  router.map({
    '/home': {
      name: 'home',
      component: require('./components/Home.vue'),
      subRoutes: {
        '/article': {
          name: 'article',
          component: require('./components/Article.vue')
        }
      }
    },
    '/topic': {
      name: 'topic',
      component: require('./components/Topic.vue'),
      subRoutes: {
        'topic_article': {
          name: "topic_article",
          component: require('./components/Topic_article.vue')
        }
      }
    },
    '/bonus': {
      name: "bonus",
      component: require('./components/Bonus.vue')
    },
    '/login': {
      name: "login",
      component: require('./components/Login.vue')
    },
    '/download': {
      name: "download",
      component: require('./components/Download.vue')
    },
    '/module': {
      name: "module",
      component: require('./components/Module.vue')
    },
    '/menu': {
      name: "menu",
      component: require('./components/Menu.vue')
    },
    '/route': {
      name: "route",
      component: require('./components/Route.vue')
    },
    '/auth': {
      name: "auth",
      component: require('./components/Auth.vue')
    },
    '/role': {
      name: "role",
      component: require('./components/Role.vue')
    },
    '/user': {
      name: "user",
      component: require('./components/User.vue')
    }
  })
}
