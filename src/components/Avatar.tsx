import { ImgHTMLAttributes } from 'react';

import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
	hasBorder?: boolean;
	src: string;
	alt?: string;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
	// props hasBorder is true by default

	return (
		<img
			className={hasBorder ? styles.avatarWithBorder : styles.avatar}
			{...props}
		/>
	);
}
