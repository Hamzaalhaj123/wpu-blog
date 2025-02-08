const routes = {
  index: "/",
  about: "/about",
  contact: "/contact",
  signIn: "/signin",
  signUp: "/signup",
  verify: (id: string, code: string) => `/verify/${id}/${code}`,
  blog: {
    id: (id: string | number) => `/blog/${id}`,
  },
  dashboard: {
    index: "/dashboard/home",
    blogs: {
      index: "/dashboard/blogs",
      create: "/dashboard/blogs/create",
      categories: { index: "/dashboard/blogs/categories" },
      edit: (id: string | number) => `/dashboard/blogs/edit/${id}`,
    },
    userManagement: {
      users: {
        index: "/dashboard/user-management/users",
        id: (id: string | number) => `/dashboard/user-management/users/${id}`,
      },
      roles: { index: "/dashboard/user-management/roles" },
    },
  },
};

export default routes;
