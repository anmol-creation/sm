export type Problem = { id: string; title: string; scope: string; category: string; priority: number; evidence: number; contributors: number; status: string; locations: string[]; solution: string; confidence: number; impact: string; difficulty: string; description: string }

export const problems: Problem[] = [
  { id: 'waste', title: 'Market waste is becoming a daily public-health risk', scope: 'Meerut, Delhi, Lucknow', category: 'Sanitation', priority: 82, evidence: 47, contributors: 128, status: 'Solution evolving', locations: ['Meerut', 'Delhi', 'Lucknow', 'Jaipur'], solution: 'Scheduled collection + covered segregation points + local monitoring', confidence: 91, impact: 'High', difficulty: 'Medium', description: 'Uncollected mixed waste around high-footfall markets is creating blocked drains, unsafe streets and avoidable health risks.' },
  { id: 'water', title: 'Irregular water supply leaves neighbourhoods planning around tankers', scope: 'Jaipur, Rajasthan', category: 'Water supply', priority: 76, evidence: 31, contributors: 84, status: 'Implementation', locations: ['Jaipur', 'Sanganer'], solution: 'Publish ward-level supply schedules and track pressure complaints', confidence: 78, impact: 'High', difficulty: 'Low', description: 'Residents receive inconsistent water supply and lack a transparent way to report pressure and timing gaps.' },
  { id: 'potholes', title: 'Potholes near schools make short commutes dangerous', scope: 'Indore, Madhya Pradesh', category: 'Infrastructure', priority: 69, evidence: 22, contributors: 51, status: 'Improving', locations: ['Indore'], solution: 'School-zone road audits with repair SLAs and public progress photos', confidence: 84, impact: 'Medium', difficulty: 'Medium', description: 'Potholes and poor crossings near schools increase risk for children, pedestrians and two-wheelers.' },
]

export const contributions = [
  { type: 'Challenge', author: 'Aarav S.', text: 'Collection points alone will become new dumping zones unless pickup timing is visible and enforced.', time: '18 min ago', tone: 'red' },
  { type: 'Evidence', author: 'Meera K.', text: 'Three ward-level observations show covered bins stayed usable after rain while open cages overflowed.', time: '2 hr ago', tone: 'blue' },
  { type: 'Improve', author: 'Rohan P.', text: 'Add a rotating market committee monitor and a simple missed-pickup escalation path.', time: '5 hr ago', tone: 'green' },
]
