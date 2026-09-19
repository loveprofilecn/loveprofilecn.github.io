"use client";
import {ResponsiveContainer,RadarChart,PolarGrid,PolarAngleAxis,PolarRadiusAxis,Radar} from "recharts";
import type { DimensionScores } from "@/types/assessment";

export function RadarProfile({scores}:{scores:DimensionScores}){
 const rawData=[
  {name:"怕被冷落",value:scores.attachmentAnxiety},
  {name:"情绪受 TA 影响",value:scores.emotionalDependence},
  {name:"容易妥协",value:100-scores.selfBoundary},
  {name:"付出过多",value:scores.overInvestment},
  {name:"容易多想",value:scores.rejectionSensitivity},
  {name:"怕失去",value:scores.fearOfLoss},
  {name:"爱情滤镜",value:scores.romanticIdealization},
  {name:"容易丢掉自己",value:100-scores.selfPreservation},
 ];
 // Give the polygon a readable visual base. The report still uses the real
 // tendency score; this only prevents very low axes collapsing into a cross.
 const data=rawData.map(item=>({...item,displayValue:Math.max(18,item.value)}));
 return <div className="chart-box radar-box"><div className="radar-direction">越靠外，说明这个倾向越明显 · 很低代表“倾向较弱”，不代表完全没有</div><ResponsiveContainer width="100%" height="100%"><RadarChart data={data} outerRadius="66%"><PolarGrid stroke="#d5c7c3"/><PolarAngleAxis dataKey="name" tick={{fill:"#3e3536",fontSize:12,fontWeight:600}}/><PolarRadiusAxis domain={[0,100]} tick={false} axisLine={false}/><Radar name="你的倾向" dataKey="displayValue" stroke="#741e37" fill="#a73552" fillOpacity={.38} strokeWidth={3} dot={{r:4,fill:"#741e37",stroke:"#faf7f2",strokeWidth:2}} isAnimationActive={false}/></RadarChart></ResponsiveContainer></div>
}
