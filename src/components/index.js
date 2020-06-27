import iForm from "./form";

const components = {
  iForm
};

// alias set
const iComponents = {
  ...components
};

const install = function(Vue) {
  // if (install.installed) return

  Object.keys(iComponents).forEach(key => {
    Vue.component(key, iComponents[key]);
  });
};

const API = {
  version: process.env.VERSION,
  install,
  ...components
};

export default API;
