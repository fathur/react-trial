import React from 'react';
import classNames from 'classnames/bind';

interface PropsType extends React.PropsWithChildren<any> {
  children: React.ReactNode;
  className?: string;
}

type CardType = React.FC<PropsType> & {
  Body: React.ElementType;
};
const Card: CardType = ({ children, className }) => (
  <div
    className={classNames([
      'flex flex-col rounded-lg border bg-white',
      className,
    ])}
  >
    {children}
  </div>
);

export const Body: React.FC<PropsType> = ({ children, className }) => (
  <div className={classNames(['px-5 py-5', className])}>{children}</div>
);

Card.Body = Body;

export default Card;
