type CNItem = string | undefined | false | null | CNItem[];

export function cn(...classes: CNItem[]) {
	return [...classes].flat().compact().uniq().join(' ');
}
