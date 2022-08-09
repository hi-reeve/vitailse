import { ViteSetupModule } from '@/types/ViteSetupModule';
import { createRouter, createWebHistory } from '@vue-router';

import { setupLayouts } from 'virtual:generated-layouts';
export let routes: any = null;
export const router = createRouter({
	history: createWebHistory(),
	// You don't need to pass the routes anymore,
	// the plugin writes it for you 🤖
	extendRoutes: routes => {
		routes = setupLayouts(routes);
		return setupLayouts(routes);
	},
});
