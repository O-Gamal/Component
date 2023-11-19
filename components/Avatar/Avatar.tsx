import { cn } from '@/utils/classNames';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

type AvatarProps = {
  className?: string;
  src: string;
  alt: string;
  name: string;
  title: string;
  isExpanded: boolean;
  isSmallDevice: boolean;
  dir: 'ltr' | 'rtl';
};

const Avatar = ({
  className,
  src,
  alt,
  name,
  title,
  isExpanded,
  isSmallDevice,
  dir,
}: AvatarProps) => {
  return (
    <section
      className={cn(
        'flex cursor-pointer items-center gap-3 rounded-xl transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800',
        {
          'p-1': isExpanded,
        },
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        className='h-12 w-12 rounded-lg object-cover object-top'
      />
      <div
        className={cn('flex w-full items-center justify-between pr-2', {
          hidden: !isExpanded,
        })}
      >
        <div>
          <h5 className=' text-sm font-semibold text-neutral-700 dark:text-neutral-300'>
            {isSmallDevice ? name.split(' ')[0] : name}
          </h5>
          <p className='text-xs text-neutral-500 dark:text-neutral-400'>
            {title}
          </p>
        </div>
        <ChevronRightIcon
          className={cn('h-4 w-4 text-neutral-400', {
            'rotate-180': dir === 'rtl',
          })}
        />
      </div>
    </section>
  );
};
export default Avatar;
