import { BasicColors } from "./basicColors";

interface ISemanticColor {
  // Surface 그룹
  surface: string;
  surfaceDim: string;

  // Generic 그룹
  onGenericDim: string;
  onGeneric: string;
  onGenericVariable: string;

  // Container 그룹
  containerLower: string;
  containerNormal: string;
  containerHigh: string;
  containerHighest: string;

  // Primary 그룹
  onPrimaryDim: string;
  primaryHighest: string;
  onPrimary: string;
  primaryLow: string;
  primaryHigh: string;
  primaryNormal: string;

  // Outline 그룹
  outlineDefault: string;
  outlineActive: string;
  outlineError: string;
}

export const SemanticColors: ISemanticColor = {
  // Surface 그룹
  surface: BasicColors.gray['010'],
  surfaceDim: BasicColors.gray['100'],

  // Generic 그룹
  onGenericDim: BasicColors.gray['500'],
  onGeneric: BasicColors.gray['700'],
  onGenericVariable: BasicColors.gray['800'],

  // Container 그룹
  containerLower: BasicColors.gray['010'],
  containerNormal: BasicColors.gray['100'],
  containerHigh: BasicColors.gray['200'],
  containerHighest: BasicColors.gray['300'],

  // Primary 그룹
  primaryHighest: BasicColors.indigo['400'],
  primaryHigh: BasicColors.indigo['500'],
  primaryNormal: BasicColors.indigo['600'],
  primaryLow: BasicColors.indigo['300'],
  onPrimary: BasicColors.grayFixed['010'],
  onPrimaryDim: BasicColors.gray['500'],

  // Outline 그룹
  outlineDefault: BasicColors.gray['300'],
  outlineActive: BasicColors.blue['500'],
  outlineError: BasicColors.red['500']
}
