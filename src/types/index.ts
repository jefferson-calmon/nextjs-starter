export type Children = React.ReactNode | JSX.Element;

export interface LayoutProps {
	children: Children;
}

export interface PageProps {
	params: Record<string, string | string[]>;
	searchParams: Record<string, string | string[]>;
}
