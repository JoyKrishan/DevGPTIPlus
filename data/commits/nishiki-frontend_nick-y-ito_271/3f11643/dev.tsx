import Link, { LinkProps } from 'next/link';
interface IBackButtonProps extends Omit<LinkProps<HTMLAnchorElement>, 'href' | 'className'> {
  /**
   * Additional class names to apply to the Link component.
   */
  className?: string;
  /**
   * Additional props to pass to the Link component.
   * @see {@link LinkProps}
   */
  props?: Omit<LinkProps<HTMLAnchorElement>, 'href' | 'className'>;
export const HeaderBackButton = ({ href, className, ...props }: IBackButtonProps) => {
    <Link
      href={href}
      className={cn('h-full aspect-square pl-4 flex items-center', className)}
      {...props}
    >