import { cn } from '@/utils/classNames';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

type FeedbackCardProps = {
  className?: string;
  isExpanded?: boolean;
};

const FeedbackCard = ({ className, isExpanded }: FeedbackCardProps) => {
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
        <ChatBubbleBottomCenterTextIcon className='h-[18px] w-[18px]' />
        <h5
          className={cn('text-sm', {
            hidden: !isExpanded,
          })}
        >
          Help us improve
        </h5>
      </div>
      <div
        className={cn('p-2.5', {
          hidden: !isExpanded,
        })}
      >
        <p className='mb-2 text-xs leading-relaxed text-neutral-500 dark:text-neutral-300'>
          Your feedback means everything to us. Please take a moment to share
          them.
        </p>
        <button className='w-full rounded-md border border-neutral-300 p-2 text-xs text-neutral-600 transition-colors hover:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-700'>
          Share your Feedback
        </button>
      </div>
    </section>
  );
};
export default FeedbackCard;
