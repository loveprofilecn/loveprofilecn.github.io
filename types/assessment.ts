export const dimensionKeys = ["attachmentAnxiety","emotionalDependence","selfBoundary","overInvestment","rejectionSensitivity","fearOfLoss","romanticIdealization","selfPreservation"] as const;
export type DimensionKey = typeof dimensionKeys[number];
export type DimensionScores = Record<DimensionKey, number>;
export type AnswerEffect = Partial<Record<DimensionKey, number>>;
export interface AnswerOption { text: string; effects: AnswerEffect }
export interface Question { id: number; eyebrow: string; question: string; answers: AnswerOption[] }
export interface LoveBrainLevel { min:number; max:number; name:string; quote:string; description:string }
export interface DerivedMetrics { infatuationVelocity:number; emotionalRemoteControl:number; selfLossIndex:number }
export interface ProfileType { id:string; name:string; english:string; tagline:string; description:string; strengths:string[]; risks:string[]; signs:string[]; advice:string; prototype:DimensionScores }
export interface EnergyItem { name:string; value:number; color:string }
export interface InsightSection { title:string; body:string }
export interface InsightReport { sections:InsightSection[]; keywords:string[]; risks:string[]; protections:string[] }
export interface AssessmentResult { scores:DimensionScores; loveBrainIndex:number; level:LoveBrainLevel; derived:DerivedMetrics; profile:ProfileType; energy:EnergyItem[]; insights:InsightReport; completedAt:string }
export type Answers = Record<number, number>;
