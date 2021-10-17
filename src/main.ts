import App from '@/App.vue';
import '@/styles/index.css';
import { createHead } from '@vueuse/head';
import { ViteSSG } from 'vite-ssg';
import { createPinia } from 'pinia';

import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';
const routes = setupLayouts(generatedRoutes);

const head = createHead();
export const createApp = ViteSSG(
	App,
	{ routes },
	({ app, router, routes, isClient, initialState }) => {
		const pinia = createPinia();
		app.use(pinia);

		if (import.meta.env.SSR) {
			initialState.pinia = pinia.state.value;
		} else {
			pinia.state.value = initialState.pinia || {};
		}
	}
);
