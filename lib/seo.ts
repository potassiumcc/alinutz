import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'alinutz - seller';
	const description = "Hey 👋 I'm Alinutz, seller";

	return {
		title,
		description,
		canonical: `https://alinutz.xyz/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'enviroment',
			url: `https://alinutz.xyz/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: ' ',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@alinutz',
			site: '@alinutz',
		},
		...props,
	};
}
