// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from '@nivo/line'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const data =
[
    {
      "id": "japan",
      "color": "hsl(189, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 148
        },
        {
          "x": "helicopter",
          "y": 138
        },
        {
          "x": "boat",
          "y": 156
        },
        {
          "x": "train",
          "y": 257
        },
        {
          "x": "subway",
          "y": 161
        },
        {
          "x": "bus",
          "y": 28
        },
        {
          "x": "car",
          "y": 166
        },
        {
          "x": "moto",
          "y": 294
        },
        {
          "x": "bicycle",
          "y": 151
        },
        {
          "x": "horse",
          "y": 115
        },
        {
          "x": "skateboard",
          "y": 158
        },
        {
          "x": "others",
          "y": 107
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(31, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 293
        },
        {
          "x": "helicopter",
          "y": 199
        },
        {
          "x": "boat",
          "y": 144
        },
        {
          "x": "train",
          "y": 160
        },
        {
          "x": "subway",
          "y": 54
        },
        {
          "x": "bus",
          "y": 73
        },
        {
          "x": "car",
          "y": 121
        },
        {
          "x": "moto",
          "y": 253
        },
        {
          "x": "bicycle",
          "y": 49
        },
        {
          "x": "horse",
          "y": 228
        },
        {
          "x": "skateboard",
          "y": 247
        },
        {
          "x": "others",
          "y": 121
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(135, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 202
        },
        {
          "x": "helicopter",
          "y": 25
        },
        {
          "x": "boat",
          "y": 34
        },
        {
          "x": "train",
          "y": 286
        },
        {
          "x": "subway",
          "y": 58
        },
        {
          "x": "bus",
          "y": 92
        },
        {
          "x": "car",
          "y": 61
        },
        {
          "x": "moto",
          "y": 259
        },
        {
          "x": "bicycle",
          "y": 133
        },
        {
          "x": "horse",
          "y": 136
        },
        {
          "x": "skateboard",
          "y": 115
        },
        {
          "x": "others",
          "y": 252
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(13, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 45
        },
        {
          "x": "helicopter",
          "y": 64
        },
        {
          "x": "boat",
          "y": 76
        },
        {
          "x": "train",
          "y": 141
        },
        {
          "x": "subway",
          "y": 285
        },
        {
          "x": "bus",
          "y": 147
        },
        {
          "x": "car",
          "y": 54
        },
        {
          "x": "moto",
          "y": 161
        },
        {
          "x": "bicycle",
          "y": 141
        },
        {
          "x": "horse",
          "y": 192
        },
        {
          "x": "skateboard",
          "y": 130
        },
        {
          "x": "others",
          "y": 95
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(2, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 88
        },
        {
          "x": "helicopter",
          "y": 239
        },
        {
          "x": "boat",
          "y": 188
        },
        {
          "x": "train",
          "y": 97
        },
        {
          "x": "subway",
          "y": 233
        },
        {
          "x": "bus",
          "y": 51
        },
        {
          "x": "car",
          "y": 214
        },
        {
          "x": "moto",
          "y": 126
        },
        {
          "x": "bicycle",
          "y": 11
        },
        {
          "x": "horse",
          "y": 58
        },
        {
          "x": "skateboard",
          "y": 32
        },
        {
          "x": "others",
          "y": 299
        }
      ]
    }
]

export default function MyResponsiveLine(props) {
    return(
        <div style={{ height: "400px" }}>
            <ResponsiveLine
                data={props.data}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false
                }}
                yFormat=" >-.2f"
                curve="natural"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                enableGridX={false}
                lineWidth={3}
                enablePoints={false}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[]}
            />
        </div>
    )
}