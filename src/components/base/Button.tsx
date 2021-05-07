import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

interface PropsType extends React.PropsWithChildren<any> {
  children: React.ReactNode;
  outline?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  block?: boolean;
  disable?: boolean;
  loading?: boolean;
  loadingText?: string;
}

const color = 'red';
const hoverColor = 'red';

const hasOutline = (classes: string[]) => [
  ...classes,
  `border border-${color}-500 text-${color}-500`,
  `hover:border-${hoverColor}-600 hover:text-${hoverColor}-600`,
];

const hasBackgroundColor = (classes: string[]) => [
  ...classes,
  `bg-${color}-500 text-white`,
  `hover:bg-${hoverColor}-600`,
  `active:bg-${color}-500`,
];

const hasOutlineDisable = (classes: string[]) => [
  ...classes,
  `border border-${color}-400 text-${color}-400 cursor-not-allowed`,
];

const hasBackgroundColorDisable = (classes: string[]) => [
  ...classes,
  `bg-${color}-400 text-white cursor-not-allowed`,
];

const isExtraSmallSize = (classes: string[]) => [
  ...classes,
  `py-0.5 px-2 text-xs`,
];
const isSmallSize = (classes: string[]) => [...classes, `py-1 px-3 text-sm`];
const isMediumSize = (classes: string[]) => [...classes, `py-1.5 px-4`];
const isLargeSize = (classes: string[]) => [...classes, `py-2 px-5 text-lg`];
const isExtraLargeSize = (classes: string[]) => [
  ...classes,
  `py-2.5 px-6 text-2xl`,
];
const chooseSize = (size: string | undefined, classes: string[]) => {
  switch (size) {
    case 'xs':
      return isExtraSmallSize(classes);
    case 'sm':
      return isSmallSize(classes);
    case 'md':
      return isMediumSize(classes);
    case 'lg':
      return isLargeSize(classes);
    case 'xl':
      return isExtraLargeSize(classes);
    default:
      return isMediumSize(classes);
  }
};

const Button: React.FC<PropsType> = (props) => {
  const writableProps = { ...props };
  const {
    children,
    outline,
    size,
    disable,
    className,
    loading,
    loadingText,
    ...rest
  } = props;
  let classes = [
    'rounded-full',
    'transition-all duration-500',
    'focus:outline-none',
    // 'w-auto hover:max-w-full',
  ];

  if (loading) {
    writableProps.disable = true;
  }

  if (writableProps.disable) {
    classes = outline
      ? hasOutlineDisable(classes)
      : hasBackgroundColorDisable(classes);
  } else {
    classes = outline ? hasOutline(classes) : hasBackgroundColor(classes);
  }

  classes = chooseSize(size, classes);

  return (
    <button
      type="button"
      className={classNames([...classes, className])}
      {...rest}
    >
      {loading && <FontAwesomeIcon icon={faSpinner} pulse />}{' '}
      {loadingText !== '' ? loadingText : children}
    </button>
  );
};

Button.defaultProps = {
  loading: false,
  block: false,
  size: 'md',
  outline: false,
  disable: false,
  loadingText: '',
};

export default Button;
