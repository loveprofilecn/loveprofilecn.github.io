"use client";
import {useState} from "react";
import {dimensionKeys,type DimensionKey,type DimensionScores} from "@/types/assessment";
import {dimensionMeta,band} from "@/data/results";
export function DimensionBars({scores}:{scores:DimensionScores}){const[open,setOpen]=useState<DimensionKey|null>(dimensionKeys[0]);return <div className="dimension-list">{dimensionKeys.map((k,i)=>{const m=dimensionMeta[k],active=open===k;return <button key={k} className={`dimension-row ${active?"open":""}`} onClick={()=>setOpen(active?null:k)} aria-expanded={active}><div className="dimension-head"><span>{String(i+1).padStart(2,"0")}</span><b>{m.name}<small>{m.english}</small></b><div className="bar-track"><i style={{width:`${scores[k]}%`}}/></div><strong>{scores[k]}</strong><em>{active?"−":"+"}</em></div>{active&&<div className="dimension-detail"><span>{band(scores[k])} · {m.positive?"保护性指标":"关注指标"}</span><p>{m.description}</p><p>{scores[k]>=55?m.high:m.low}</p></div>}</button>})}</div>}
