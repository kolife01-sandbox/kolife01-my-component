// Import vue component
import MyComponent from './my-component.vue';
import BlueComponent from './blue-component.vue'

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('MyComponent', MyComponent);
  Vue.component('BlueComponent', BlueComponent);
}

// Create module definition for Vue.use()
const plugin = {
  install,
};

// To auto-install when vue is found
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// // Inject install function into component - allows component
// // to be registered via Vue.use() as well as Vue.component()
// component.install = install;

// Export component by default
export default {
  MyComponent,
  BlueComponent
}