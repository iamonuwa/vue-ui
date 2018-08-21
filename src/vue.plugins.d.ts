/* tslint:disable:no-shadowed-variable */

import Vue                               from 'vue';
import { DefaultProps, PropsDefinition } from 'vue/types/options';
import { Route, VueRouter }              from 'vue-router/types/router';
import { VeeValidateComponentOptions } from 'vee-validate/types/vee-validate.d';

declare module 'vue/types/vue' {
  interface Vue {
    $meta?: any;
    $_veeValidate?: any;
  }

  interface VueConstructor {
    prefetch?: (options: any) => {};
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    metaInfo?: any;
    prefetch?: any;
    $_veeValidate?: VeeValidateComponentOptions;
  }

  interface FunctionalComponentOptions<Props = DefaultProps, PropDefs = PropsDefinition<Props>> {
    metaInfo?: any;
    prefetch?: any;
    $_veeValidate?: VeeValidateComponentOptions;
  }
}

declare module 'vue-router/types/router' {
  interface VueRouter {
    history: {
      router: VueRouter,
      base: string,
      current: Route,
      pending?: Route,
    };
  }
}
