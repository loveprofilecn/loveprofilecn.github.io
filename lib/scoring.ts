import { questions } from "@/data/questions";
import { loveBrainLevels } from "@/data/results";
import { dimensionKeys, type Answers, type DimensionKey, type DimensionScores } from "@/types/assessment";

const clamp=(n:number)=>Math.max(0,Math.min(100,Math.round(n)));

export function normalizeDimensionScore(raw:number,min:number,max:number){return max===min?50:clamp(((raw-min)/(max-min))*100)}

export function calculateDimensionScores(answers:Answers):DimensionScores{
 const raw=Object.fromEntries(dimensionKeys.map(k=>[k,0])) as DimensionScores;
 const min=Object.fromEntries(dimensionKeys.map(k=>[k,0])) as DimensionScores;
 const max=Object.fromEntries(dimensionKeys.map(k=>[k,0])) as DimensionScores;
 for(const q of questions){
  for(const key of dimensionKeys){
   const vals=q.answers.map(a=>a.effects[key]).filter((v):v is number=>typeof v==="number");
   if(vals.length){min[key]+=Math.min(...vals);max[key]+=Math.max(...vals)}
  }
  const option=q.answers[answers[q.id]];
  if(option) for(const [key,value] of Object.entries(option.effects) as [DimensionKey,number][]){raw[key]+=value}
 }
 return Object.fromEntries(dimensionKeys.map(k=>[k,normalizeDimensionScore(raw[k],min[k],max[k])])) as DimensionScores;
}

export function calculateLoveBrainIndex(s:DimensionScores){return clamp(s.attachmentAnxiety*.2+s.emotionalDependence*.2+s.overInvestment*.15+s.rejectionSensitivity*.1+s.fearOfLoss*.15+s.romanticIdealization*.1+(100-s.selfBoundary)*.05+(100-s.selfPreservation)*.05)}
export function getLoveBrainLevel(score:number){return loveBrainLevels.find(l=>score>=l.min&&score<=l.max)??loveBrainLevels[2]}
export {clamp};
