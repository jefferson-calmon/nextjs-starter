import dynamic from 'next/dynamic';

import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

interface IconProps extends LucideProps {
	name: keyof typeof dynamicIconImports;
}

export function Icon({ name, ...props }: IconProps) {
	const LucideIcon = dynamic(dynamicIconImports[name]);

	if (!LucideIcon) {
		console.warn(`Icon ${name} does not exist in lucide-react package.`);
		return null;
	}

	return <LucideIcon {...props} />;
}

export default Icon;
