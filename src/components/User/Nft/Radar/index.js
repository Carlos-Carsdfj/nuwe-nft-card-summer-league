import { ResponsiveRadar } from '@nivo/radar'

const data =[
  
  {
    'taste': 'fruity',
    'chardonay': 60,
    'carmenere': 44,
    'syrah': 78
  },
  {
    'taste': 'bitter',
    'chardonay': 56,
    'carmenere': 52,
    'syrah': 118
  },
  {
    'taste': 'heavy',
    'chardonay': 20,
    'carmenere': 76,
    'syrah': 83
  },
  {
    'taste': 'strong',
    'chardonay': 105,
    'carmenere': 120,
    'syrah': 96
  },
  {
    'taste': 'sunny',
    'chardonay': 120,
    'carmenere': 68,
    'syrah': 118
  }
]


export default function Radar(){
  return (
    <ResponsiveRadar
      data={data}
      keys={[ 'chardonay', 'carmenere', 'syrah' ]}
      indexBy="taste"
      maxValue="auto"
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      curve="linearClosed"
      borderWidth={2}
      borderColor={{ from: 'color' }}
      gridLevels={5}
      gridShape="circular"
      gridLabelOffset={36}
      enableDots={true}
      dotSize={10}
      dotColor={{ theme: 'background' }}
      dotBorderWidth={2}
      dotBorderColor={{ from: 'color' }}
      enableDotLabel={true}
      dotLabel="value"
      dotLabelYOffset={-12}
      colors={{ scheme: 'nivo' }}
      fillOpacity={0.25}
      blendMode="multiply"
      animate={true}
      motionConfig="wobbly"
      isInteractive={true}
      legends={[
        {
          anchor: 'top-left',
          direction: 'column',
          translateX: -50,
          translateY: -40,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: '#999',
          symbolSize: 12,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000'
              }
            }
          ]
        }
      ]}
    />)
}
