import Hello from '../packages/hello/index'
import Button from '../packages/button/index'

const components = {
  'v-hello':Hello,
  'v-button':Button
};

const ivue = {
    ...components
};
const install = function(Vue) {
  if (install.installed) return

  Object.keys(ivue).forEach(key => {
    console.log(key)
    Vue.component(key, ivue[key])
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ivue
}
