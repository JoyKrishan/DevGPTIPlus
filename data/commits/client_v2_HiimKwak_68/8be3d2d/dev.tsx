import { ElementType, MouseEvent, forwardRef } from 'react';
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onOpenChange(false);
    if (props.onClick) props.onClick(e);
  };

      <Component ref={ref} {...props} onClick={handleClick}>
      onClick={handleClick}