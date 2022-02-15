export const MoviesRoute = [
    {
      path: 'movies',
      loadChildren: () => import('../movies.module').then((m) => m.MoviesModule),
      data: {
        preload: true
      }
    }
  ];