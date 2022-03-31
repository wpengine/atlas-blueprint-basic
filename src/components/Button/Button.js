import Link from 'next/link';
import { classNames as cn } from 'utils';

import styles from './Button.module.scss';

/**
 * Render the Button component.
 *
 * @param {Props} props The props object.
 * @param {string} props.href The href attribute. If provided the button will be an <a> element.
 * @param {primary|secondary} props.styleType The type of the button
 * @param {string} props.className An optional className to be added to the button
 * @return {React.ReactElement} The Button component.
 */
export default function Button({
  href,
  styleType,
  className,
  children,
  ...props
}) {
  let buttonStyle;
  switch (styleType) {
    case 'secondary': {
      buttonStyle = 'secondary';
      break;
    }
    default: {
      buttonStyle = 'primary';
      break;
    }
  }

  let classNames = cn([
    styles.button,
    styles[`button-${buttonStyle}`],
    className,
  ]);

  if (href) {
    return (
      <Link href={href}>
        <a role="button" href={href} className={classNames} {...props}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
}
