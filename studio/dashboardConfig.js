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
                  buildHookId: '61b0ac99dcdf3e12dbbbf363',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-9dq7bqkz',
                  apiId: '0c59e21d-3289-4140-b072-c8f568bff0a2'
                },
                {
                  buildHookId: '61b0ac99f2d9dc0b774ecf8a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-stch1ve6',
                  apiId: '0e65898a-d201-497b-b3e5-1b4f12a83e79'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Hennie53/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-stch1ve6.netlify.app', category: 'apps'}
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
