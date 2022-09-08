import styles from './Avatar.module.css';

interface AvatarProps {
	hasBorder?: boolean;
	src: string;
	alt?: string;
}

export function Avatar({ hasBorder = true, src, alt }: AvatarProps) {
	// props hasBorder is true by default

	return (
		<img
			className={hasBorder ? styles.avatarWithBorder : styles.avatar}
			src={src}
			alt={alt}
		/>
	);
}