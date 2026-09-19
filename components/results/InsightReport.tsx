import type {InsightReport as Report} from "@/types/assessment";
export function InsightReport({report}:{report:Report}){return <div className="insight-list">{report.sections.map((s,i)=><article key={s.title}><span>{String(i+1).padStart(2,"0")}</span><div><h3>{s.title}</h3><p>{s.body}</p></div></article>)}</div>}
