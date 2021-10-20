import { ViteSetupModule } from '@/types/ViteSetupModule';
import { createHead } from '@vueuse/head';

export const install: ViteSetupModule = ({ app }) => {
	const head = createHead();
	app.use(head);
};
