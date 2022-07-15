
import { createRouter, createWebHistory } from '@vue-router'

import { setupLayouts } from 'virtual:generated-layouts'
export const router = createRouter({
	history: createWebHistory(),
	// You don't need to pass the routes anymore,
	// the plugin writes it for you 🤖
	extendRoutes: (routes) => setupLayouts(routes),
  })
