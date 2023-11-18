import { cn } from '@/utils/classNames';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

type CardProps = {
  className?: string;
  isExpanded?: boolean;
  title: string;
  description: string;
  icon: React.ReactNode;
  button: {
    title: string;
    onClick: () => void;
  };
};

const Card = ({
  className,
  isExpanded,
  title,
  description,
  icon,
  button,
}: CardProps) => {
  return (
    <section
      className={cn(
        'rounded-lg border border-neutral-300 bg-neutral-50 dark:border-neutral-600 dark:bg-neutral-700/20',
        className
      )}
    >
      <div
        className={cn(
          'flex h-10 items-center gap-2 border-neutral-300 px-2.5 text-neutral-500 dark:border-neutral-600 dark:text-neutral-300',
          {
            'border-b': isExpanded,
            'justify-center': !isExpanded,
          }
        )}
      >
        {icon}
        <h5
          className={cn('text-sm', {
            hidden: !isExpanded,
          })}
        >
          {title}
        </h5>
      </div>
      <div
        className={cn('p-2.5', {
          hidden: !isExpanded,
        })}
      >
        <p className='mb-2 text-xs leading-relaxed text-neutral-500 dark:text-neutral-300'>
          {description}
        </p>
        <button
          className='w-full rounded-md border border-neutral-300 p-2 text-xs text-neutral-600 transition-colors hover:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-700'
          onClick={button.onClick}
        >
          {button.title}
        </button>
      </div>
    </section>
  );
};
export default Card;
