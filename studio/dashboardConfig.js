export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f5f40b4598fe14f4797dc53',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-v-2-studio',
                  apiId: 'c9b6d60e-a36e-4fb9-98bc-6316009aa9d4'
                },
                {
                  buildHookId: '5f5f40b4a21a97384bb988af',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-v-2',
                  apiId: '25f45937-fff5-444a-be8d-4c1289d70654'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/haavardt/sanity-nextjs-landing-pages-v2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-v-2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
