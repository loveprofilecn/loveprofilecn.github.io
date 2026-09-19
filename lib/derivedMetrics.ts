import type { DerivedMetrics, DimensionScores, EnergyItem } from "@/types/assessment";
import { clamp } from "./scoring";

export function calculateDerivedMetrics(s:DimensionScores):DerivedMetrics{return{
 infatuationVelocity:clamp(s.emotionalDependence*.3+s.romanticIdealization*.3+s.overInvestment*.25+s.rejectionSensitivity*.15),
 emotionalRemoteControl:clamp(s.emotionalDependence*.4+s.attachmentAnxiety*.25+s.rejectionSensitivity*.2+s.fearOfLoss*.15),
 selfLossIndex:clamp((100-s.selfBoundary)*.35+(100-s.selfPreservation)*.35+s.overInvestment*.2+s.emotionalDependence*.1),
}}
export function calculateEnergy(s:DimensionScores):EnergyItem[]{
 const raw=[s.overInvestment*.55+s.romanticIdealization*.45,s.overInvestment*.45+s.emotionalDependence*.35+(100-s.selfBoundary)*.2,s.attachmentAnxiety*.35+s.rejectionSensitivity*.35+s.fearOfLoss*.3,s.selfPreservation*.6+s.selfBoundary*.4].map(v=>Math.max(8,v));
 const total=raw.reduce((a,b)=>a+b,0);const values=raw.map(v=>Math.floor(v/total*100));values[3]+=100-values.reduce((a,b)=>a+b,0);
 return ["关注 TA","维护关系","处理焦虑","保留自己"].map((name,i)=>({name,value:values[i],color:["#721f36","#c87382","#d9a967","#302b2c"][i]}));
}
