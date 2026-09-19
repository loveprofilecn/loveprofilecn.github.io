import {band} from "@/data/results";
import type {DerivedMetrics as Metrics} from "@/types/assessment";
const items=[{key:"infatuationVelocity",name:"上头速度",en:"INFATUATION VELOCITY",copy:"从心动进入高投入状态的倾向。"},{key:"emotionalRemoteControl",name:"情绪遥控指数",en:"EMOTIONAL REMOTE CONTROL",copy:"伴侣行为影响你当天情绪的程度。"},{key:"selfLossIndex",name:"自我流失指数",en:"SELF LOSS INDEX",copy:"关系挤压个人边界与生活空间的倾向。"}] as const;
export function DerivedMetrics({metrics}:{metrics:Metrics}){return <div className="derived-grid">{items.map((it,i)=><article key={it.key}><div className="mini-ring" style={{"--score":`${metrics[it.key]*3.6}deg`} as React.CSSProperties}><strong>{metrics[it.key]}</strong></div><span>0{i+1}</span><h3>{it.name}</h3><small>{it.en}</small><p><b>{band(metrics[it.key])}</b> · {it.copy}</p></article>)}</div>}
