import { type ComponentProps, type CSSProperties, forwardRef } from 'react';

type ImgExtras = {
  fill?: boolean;
  priority?: boolean;
  unoptimized?: boolean;
  blurDataURL?: string;
  placeholder?: string;
  quality?: number;
  sizes?: string;
};

export const Image = forwardRef<HTMLImageElement, ComponentProps<'img'> & ImgExtras>(
  (
    {
      fill,
      priority: _priority,
      unoptimized: _unoptimized,
      blurDataURL: _blurDataURL,
      placeholder: _placeholder,
      quality: _quality,
      sizes: _sizes,
      alt,
      style,
      ...props
    },
    ref,
  ) => {
    const resolvedStyle: CSSProperties | undefined = fill
      ? {
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          ...style,
        }
      : style;
    return <img ref={ref} alt={alt ?? ''} style={resolvedStyle} {...props} />;
  },
);
Image.displayName = 'Image';

export const Link = forwardRef<
  HTMLAnchorElement,
  ComponentProps<'a'> & {
    href: string;
    prefetch?: boolean;
    scroll?: boolean;
    replace?: boolean;
  }
>(({ href, prefetch: _prefetch, scroll: _scroll, replace: _replace, ...props }, ref) => (
  <a ref={ref} href={href} {...props} />
));
Link.displayName = 'Link';

export default Image;
