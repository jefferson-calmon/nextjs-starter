import { memo } from 'react';

import { icons, LucideProps } from 'lucide-react';

interface IconProps extends LucideProps {
	name: keyof typeof icons;
}

export function Icon({ name, ...props }: IconProps) {
	const LucideIcon = icons[name];

	if (!LucideIcon) {
		console.warn(`Icon ${name} does not exist in lucide-react package.`);
		return null;
	}

	return <LucideIcon {...props} />;
}

export default memo(Icon);
