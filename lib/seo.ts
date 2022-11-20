import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'bhop ─ developer';
	const description = "Hey 👋 I'm bhop, a developer";

	return {
		title,
		description,
		canonical: `https://enviroment.cloud/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'nuro',
			url: `https://enviroment.cloud/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://enviroment.cloud/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@vawnaire',
			site: '@vawnaire',
		},
		...props,
	};
}
