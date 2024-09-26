const routes = {
  index: "/",
  about: "/about",
  contact: "/contact",
  signIn: "/signin",
  signUp: "/signup",
  verify: (id: string, code: string) => `/verify/${id}/${code}`,
};

export default routes;
