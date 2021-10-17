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
		app.use(createPinia());
	}
);
