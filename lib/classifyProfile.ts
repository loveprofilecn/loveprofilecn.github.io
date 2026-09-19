import { profileTypes } from "@/data/profileTypes";
import { dimensionKeys, type DimensionScores } from "@/types/assessment";
export function classifyProfile(scores:DimensionScores){return profileTypes.map(profile=>({profile,distance:Math.sqrt(dimensionKeys.reduce((sum,k)=>sum+(scores[k]-profile.prototype[k])**2,0))})).sort((a,b)=>a.distance-b.distance)[0].profile}
