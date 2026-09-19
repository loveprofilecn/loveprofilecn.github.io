import type { Answers, AssessmentResult } from "@/types/assessment";
const PROGRESS="love-brain-progress-v1",RESULT="love-brain-result-v1";
export function saveProgress(index:number,answers:Answers){try{localStorage.setItem(PROGRESS,JSON.stringify({index,answers}))}catch{/* Storage may be unavailable. */}}
export function loadProgress():{index:number;answers:Answers}|null{try{const v=JSON.parse(localStorage.getItem(PROGRESS)||"null");return v&&Number.isInteger(v.index)&&v.answers&&typeof v.answers==="object"?v:null}catch{return null}}
export function clearProgress(){try{localStorage.removeItem(PROGRESS)}catch{/* Best-effort cleanup. */}}
export function saveResult(result:AssessmentResult){try{localStorage.setItem(RESULT,JSON.stringify(result))}catch{/* Storage may be unavailable. */}}
export function loadResult():AssessmentResult|null{try{const v=JSON.parse(localStorage.getItem(RESULT)||"null");return v&&v.scores&&typeof v.loveBrainIndex==="number"?v:null}catch{return null}}
export function clearAll(){try{localStorage.removeItem(PROGRESS);localStorage.removeItem(RESULT)}catch{/* Best-effort cleanup. */}}
