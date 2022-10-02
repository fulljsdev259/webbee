import { Categories, Dashboard, CategoryType } from '../pages'

export const routes = {
  root:
    {
      path: "/",
      element: <Dashboard/>,
      children: [
        {
          path: "manage-types",
          element: <Categories/>,
        },
        {
          path: "type",
          element: <CategoryType />,
        },
        {
          path: "type/:categoryId",
          element: <CategoryType />,
        },
      //   {
      //     path: "*",
      //     element: <div>No Match</div>, 
      //   },
      ],
    },

  // here we can mention another set of routes and render dynamically based on user auth state
  // user won't be able to access routes that we do not want let them used before signin/signup
};
