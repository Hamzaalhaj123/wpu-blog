const routes = {
  index: "/",
  about: "/about",
  contact: "/contact",
  verify:(id:string,code:string)=>`/verify/${id}/${code}`,
};


export default routes;
