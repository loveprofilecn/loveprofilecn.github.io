import { dimensionMeta } from "@/data/results";
import { dimensionKeys, type DerivedMetrics, type DimensionKey, type DimensionScores, type InsightReport, type ProfileType } from "@/types/assessment";

const riskValue=(k:DimensionKey,s:DimensionScores)=>dimensionMeta[k].positive?100-s[k]:s[k];
const keywordMap:Record<DimensionKey,[string,string]>= {attachmentAnxiety:["需要确定感","关系松弛"],emotionalDependence:["情绪绑定","情绪独立"],selfBoundary:["边界稳定","容易让步"],overInvestment:["高投入","节奏克制"],rejectionSensitivity:["高敏感","不易过读"],fearOfLoss:["患得患失","敢于取舍"],romanticIdealization:["浪漫滤镜","现实校准"],selfPreservation:["保留自我","重心偏移"]};

export function generateInsights(scores:DimensionScores,profile:ProfileType,derived:DerivedMetrics):InsightReport{
 const ranked=[...dimensionKeys].sort((a,b)=>riskValue(b,scores)-riskValue(a,scores));
 const riskKeys=ranked.filter(k=>riskValue(k,scores)>=48).slice(0,3);
 const protectKeys=[...dimensionKeys].sort((a,b)=>riskValue(a,scores)-riskValue(b,scores)).slice(0,3);
 const [primary,secondary]=riskKeys.length>1?riskKeys:ranked;
 const trigger=primary==="rejectionSensitivity"?"回复变慢、语气变短，或无法确认对方态度时":primary==="attachmentAnxiety"?"联系突然减少、计划不确定，或关系进入暂停时":primary==="fearOfLoss"?"出现比较、距离，或你感觉自己可能被替代时":primary==="overInvestment"?"对方表达需要，而你又有机会证明自己在乎时":primary==="romanticIdealization"?"关系出现强烈心动、承诺和命定感时":"关系状态影响到你的日常情绪与安排时";
 const reason=derived.emotionalRemoteControl>=derived.infatuationVelocity?`你的${dimensionMeta[primary].name}与${dimensionMeta[secondary].name}会互相放大：先捕捉到信号，再让情绪跟着关系状态变化。`:`你的${dimensionMeta[primary].name}与${dimensionMeta[secondary].name}组合，让心动更容易迅速进入投入和意义建构。`;
 return{
  keywords:ranked.slice(0,3).map(k=>`#${keywordMap[k][riskValue(k,scores)>=50?0:1]}`),
  risks:riskKeys.map(k=>dimensionMeta[k].name),
  protections:protectKeys.map(k=>dimensionMeta[k].positive?dimensionMeta[k].name:`较低${dimensionMeta[k].name}`),
  sections:[
   {title:"你的恋爱模式",body:`你更接近“${profile.name}”：${profile.description} 你的综合指数并不是单一标签，而是八个方向共同作用的结果。`},
   {title:"你为什么容易上头",body:reason},
   {title:"什么最容易触发你",body:`${trigger}，你的注意力会自动向关系聚拢。此时先补全事实，比继续推演更能保护你。`},
   {title:"你在关系中的优势",body:`${profile.strengths.join("、")}是你带进关系的核心能力。你不是“太多”，而是需要让这些能力在双向回应中发挥。`},
   {title:"你容易忽略的问题",body:`当${dimensionMeta[primary].name}进入高位，你可能把感受当成结论，或在还没协商前先承担更多。${profile.risks.join("；")}。`},
   {title:"适合你的相处方式",body:`清晰的联系预期、可说出口的个人边界，以及不依靠猜测的沟通，会显著降低你的关系内耗。保留固定的朋友、兴趣与独处时间也很重要。`},
   {title:"给你的恋爱清醒建议",body:profile.advice},
  ]
 }
}
