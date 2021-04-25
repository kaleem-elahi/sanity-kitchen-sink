export default {
  widgets: [
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
                  buildHookId: '6084c150ded25a6c7d7709bb',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-xc9ity2c',
                  apiId: 'ade11602-c3ef-4c5f-a1b0-81886e91a167'
                },
                {
                  buildHookId: '6084c1505d40b53c2bb726f6',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-rg6hp6c2',
                  apiId: '383eae12-40be-4d90-9c1c-f74f122043bd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kaleem-elahi/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-rg6hp6c2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
