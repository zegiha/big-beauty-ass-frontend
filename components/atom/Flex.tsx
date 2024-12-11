import { BasicColors } from '@/shared/constants/colors/basicColors';
import { SemanticColors } from '@/shared/constants/colors/semanticColors';

type BasicColorType = keyof typeof BasicColors;
type BasicColorShadeType = {
  [K in BasicColorType]: keyof typeof BasicColors[K];
};
type SemanticColorType = keyof typeof SemanticColors;

interface IFlex {
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between';
  alignItems?: 'flex-start' | 'flex-end' | 'center';
  gap?: number;
  width?: 'fill' | 'fit-content' | number;
  padding?: number | {horizontal: number, vertical: number};
  borderRadius?: number;
  backgroundColor?: {
    basic?: `${BasicColorType}.${BasicColorShadeType[BasicColorType]}`;
    semantic?: SemanticColorType;
  };
  children: React.ReactNode;
  className?: string;
}

interface IBaseFlex extends IFlex {
  flexDirection: 'row' | 'column';
}

function BaseFlex({
  children,
  className,
  flexDirection,
  justifyContent = 'flex-start',
  alignItems = 'flex-start',
  gap = 0,
  width = 'fill',
  padding = 0,
  borderRadius = 0,
}: IBaseFlex) {
  const style = {
    display: 'flex',
    flexDirection,
    justifyContent,
    alignItems,
    gap,
    width: typeof width === 'number' ? `${width}px` : width === 'fill' ? '100%' : width === 'fit-content' ? 'fit-content' : 'auto',
    padding: typeof padding === 'number' ? `${padding}px` : `${padding.vertical}px ${padding.horizontal}px`,
    borderRadius,
  }
  return <div className={className} style={style}>{children}</div>
}

function Row({children, ...props}: IFlex) {
  return <BaseFlex flexDirection='row' {...props}>{children}</BaseFlex>
}
function Col({children, ...props}: IFlex) {
  return <BaseFlex flexDirection='column' {...props}>{children}</BaseFlex>
}

export {
  Row,
  Col,
}