import Parent from '@/modules/posts/components/Parent'
import Posts from '@/modules/posts/components/Posts'
import NewPost from '@/modules/posts/components/NewPost'
import EditPost from '@/modules/posts/components/EditPost'

export default [
  {
    path: '/posts',
    component: Parent,
    children: [
      {
        path: '',
        name: 'Posts',
        component: Posts
      },
      {
        path: 'new',
        name: 'NewPost',
        component: NewPost
      },
      {
        path: ':id',
        name: 'EditPost',
        component: EditPost
      }
    ]
  }
]
