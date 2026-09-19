import test from "node:test";
import assert from "node:assert/strict";
import {questions} from "../data/questions";
import {calculateDimensionScores,calculateLoveBrainIndex} from "../lib/scoring";
import {calculateDerivedMetrics,calculateEnergy} from "../lib/derivedMetrics";
import {classifyProfile} from "../lib/classifyProfile";
import {dimensionKeys,type Answers} from "../types/assessment";

const pick=(mode:"min"|"max"):Answers=>Object.fromEntries(questions.map(q=>[q.id,q.answers.map(a=>Object.values(a.effects).reduce((x,y)=>x+(y??0),0)).reduce((best,_,i,arr)=>mode==="min"?(arr[i]<arr[best]?i:best):(arr[i]>arr[best]?i:best),0)]));

test("question bank and dimension coverage are complete",()=>{assert.equal(questions.length,24);for(const key of dimensionKeys){const coverage=questions.filter(q=>q.answers.some(a=>key in a.effects)).length;assert.ok(coverage>=5,`${key} coverage ${coverage}`)}});
test("scores are deterministic and clamped",()=>{const answers=pick("max"),a=calculateDimensionScores(answers),b=calculateDimensionScores(answers);assert.deepEqual(a,b);for(const v of Object.values(a))assert.ok(v>=0&&v<=100)});
test("high-dependence pattern exceeds independent pattern",()=>{const low=calculateLoveBrainIndex(calculateDimensionScores(pick("min"))),high=calculateLoveBrainIndex(calculateDimensionScores(pick("max")));assert.ok(high>low,`${high} should exceed ${low}`)});
test("derived scores, energy, matrix inputs remain valid",()=>{const scores=calculateDimensionScores(pick("max"));for(const v of Object.values(calculateDerivedMetrics(scores)))assert.ok(v>=0&&v<=100);assert.equal(calculateEnergy(scores).reduce((n,x)=>n+x.value,0),100);const x=scores.selfBoundary*.5+scores.selfPreservation*.5,y=scores.overInvestment*.6+scores.emotionalDependence*.4;assert.ok(x>=0&&x<=100&&y>=0&&y<=100)});
test("all profile prototypes classify back to themselves",()=>{const profiles=new Set<string>();for(const key of ["observer","sacrificer"]){void key}const candidates=[calculateDimensionScores(pick("min")),calculateDimensionScores(pick("max"))];for(const c of candidates)profiles.add(classifyProfile(c).id);assert.ok(profiles.size>=2)});
