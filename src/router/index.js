import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/components/layout';
import Project from '@/components/project';
import SubProject from '@/components/subproject';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '/',
          component: Project,
        },
        {
          path: '/subproject/:id',
          component: SubProject,
        },
      ],
    },
  ],
});
