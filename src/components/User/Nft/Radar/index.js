import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis,  ResponsiveContainer } from 'recharts'

export default function RadarRender({ data, color, name }){

  return (
    <ResponsiveContainer width="100%" height="100%" >
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" stroke='#ffffff' size='20px' />
        <Radar name={name}  dataKey="score" stroke={color} fill={color}  fillOpacity={0.6} />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  )
}
