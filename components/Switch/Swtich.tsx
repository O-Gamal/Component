import * as SwitchComponent from '@radix-ui/react-switch';

type SwitchProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

const Switch = ({ label, checked, onChange }: SwitchProps) => {
  const id = label.split(' ').join('-').toLowerCase();
  return (
    <form>
      <div className='flex items-center'>
        <label className='px-4 md:text-lg' htmlFor={id}>
          {label}
        </label>
        <SwitchComponent.Root
          dir='ltr'
          className='data-[state=checked]:bg-success-500 dark:data-[state=checked]:bg-success-500 relative h-5 w-9 cursor-pointer rounded-full bg-gray-300 outline-none dark:bg-neutral-700 md:h-6 md:w-[42px]'
          id={id}
          checked={checked}
          onCheckedChange={onChange}
          style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}
        >
          <SwitchComponent.Thumb className='block h-4 w-4 translate-x-0.5 rounded-full bg-white transition-transform duration-200 will-change-transform data-[state=checked]:translate-x-[18px] md:h-5 md:w-5 md:data-[state=checked]:translate-x-5' />
        </SwitchComponent.Root>
      </div>
    </form>
  );
};

export default Switch;
