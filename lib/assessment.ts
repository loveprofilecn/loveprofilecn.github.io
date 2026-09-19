import { calculateEnergy, calculateDerivedMetrics } from "./derivedMetrics";
import { classifyProfile } from "./classifyProfile";
import { generateInsights } from "./generateInsights";
import { calculateDimensionScores, calculateLoveBrainIndex, getLoveBrainLevel } from "./scoring";
import type { Answers, AssessmentResult } from "@/types/assessment";
export function createResult(answers:Answers):AssessmentResult{const scores=calculateDimensionScores(answers);const loveBrainIndex=calculateLoveBrainIndex(scores);const derived=calculateDerivedMetrics(scores);const profile=classifyProfile(scores);return{scores,loveBrainIndex,level:getLoveBrainLevel(loveBrainIndex),derived,profile,energy:calculateEnergy(scores),insights:generateInsights(scores,profile,derived),completedAt:new Date().toISOString()}}
