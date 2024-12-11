import { createElement } from "react";

type TTypoColor = 'onGeneric' | 'onGenericDim' | 'onGenericVariable' | 'onPrimary' | 'onPrimaryDim';

interface ITypo {
  weight?: 'regular' | 'semiBold';
  color?: TTypoColor;
  children: React.ReactNode;
  className?: string;
}

interface IBaseTypo extends ITypo {
  variant: 'caption' | 'contents' | 'body' | 'subTitle' | 'title';
  weight: 'regular' | 'semiBold';
  color: TTypoColor;
}

const getElementByVariant = (variant?: string) => {
  switch (variant) {
    case 'caption':
    case 'contents':
    case 'body':
      return 'pre';
    case 'subTitle':
      return 'h2';
    case 'title':
      return 'h1';
    default:
      return 'pre';
  }
}
const getColorByColorName = (colorName: string) => {
  switch (colorName) {
    case 'onGeneric':
      return 'var(--on-generic)';
    case 'onGenericDim':
      return 'var(--on-generic-dim)';
    case 'onGenericVariable':
      return 'var(--on-generic-variable)';
    case 'onPrimary':
      return 'var(--on-primary)';
    case 'onPrimaryDim':
      return 'var(--on-primary-dim)';
  }
}


function BaseTypo({
  variant,
  weight,
  color,
  children,
  className,
}: IBaseTypo) {
  const style = {
    fontSize: `var(--font-size-${variant.toLowerCase()})`,
    fontWeight: weight === 'regular' ? 400 : 600,
    color: getColorByColorName(color),
  }
  return createElement(
    getElementByVariant(variant),
    {
      className,
      style
    },
    children
  )
}

function Title({
  weight = 'regular',
  color = 'onGeneric',
  children,
  className,
}: ITypo) {
  return <BaseTypo variant="title" weight={weight} color={color} className={className}>{children}</BaseTypo>
}
function SubTitle({
  weight = 'regular',
  color = 'onGeneric',
  children,
  className,
}: ITypo) {
  return <BaseTypo variant="subTitle" weight={weight} color={color} className={className}>{children}</BaseTypo>
}
function Body({
  weight = 'regular',
  color = 'onGeneric',
  children,
  className,
}: ITypo) {
  return <BaseTypo variant="body" weight={weight} color={color} className={className}>{children}</BaseTypo>
}
function Caption({
  weight = 'regular',
  color = 'onGeneric',
  children,
  className,
}: ITypo) {
  return <BaseTypo variant="caption" weight={weight} color={color} className={className}>{children}</BaseTypo>
}
function Contents({
  weight = 'regular',
  color = 'onGeneric',
  children,
  className,
}: ITypo) {
  return <BaseTypo variant="contents" weight={weight} color={color} className={className}>{children}</BaseTypo>
}

const Typo = {
  Title,
  SubTitle,
  Body,
  Caption,
  Contents
}

export default Typo;
