import { useLanyard } from 'react-use-lanyard';

import { DISCORD_STATUS_COLOR } from '~/types';

export function useStatus() {
	const result = useLanyard({
		userId: "442626774841556992",
		socket: true,
	});

	return {
		...result,
		color:
			result.status && !result.loading
				? DISCORD_STATUS_COLOR[result.status.discord_status]
				: null,
	};
}
