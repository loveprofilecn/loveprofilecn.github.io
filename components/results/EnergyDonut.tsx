"use client";
import {ResponsiveContainer,PieChart,Pie,Cell,Tooltip} from "recharts";
import type {EnergyItem} from "@/types/assessment";
export function EnergyDonut({data}:{data:EnergyItem[]}){return <div className="energy-layout"><div className="donut"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={data} dataKey="value" nameKey="name" innerRadius="63%" outerRadius="92%" paddingAngle={2}>{data.map(d=><Cell key={d.name} fill={d.color}/>)}</Pie><Tooltip formatter={(v)=>`${v}%`}/></PieChart></ResponsiveContainer><div><b>100%</b><span>LOVE<br/>ENERGY</span></div></div><div className="energy-legend">{data.map((d,i)=><div key={d.name}><span><i style={{background:d.color}}/>{String(i+1).padStart(2,"0")}</span><b>{d.name}</b><strong>{d.value}%</strong></div>)}</div></div>}
