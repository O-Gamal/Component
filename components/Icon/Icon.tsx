import icons from '@/assets/svg';

export type IconType = keyof typeof icons;

type IconProps = {
  name: IconType;
  className?: string;
} & React.SVGProps<SVGSVGElement>;

function Icon({ name, className, ...rest }: IconProps) {
  const SelectedIcon = icons[name];
  return <SelectedIcon className={className} {...rest} />;
}

export default Icon;
