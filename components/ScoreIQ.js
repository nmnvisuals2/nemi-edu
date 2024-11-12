import { Card, CardBody, Progress } from '@nextui-org/react'

const determineIQLevel = (score, totalScore) => {
    const percentage = (score / totalScore) * 100;
  
    if (score >= 0 && score <= 20) return { level: 'Below Average', color: 'danger', percentage };
    if (score >= 21 && score <= 30) return { level: 'Average', color: 'warning', percentage };
    if (score >= 31 && score <= 40) return { level: 'Above Average', color: 'success', percentage };
    if (score >= 41 && score <= 50) return { level: 'Superior', color: 'success', percentage };
  
    return { level: 'Invalid Score', color: 'default', percentage: 0 };
  };
export default function ScoreIQ({ score ,totalScore }) {
  const { level, color, percentage } = determineIQLevel(score,totalScore)

  return (
    <div className="flex items-center justify-center mx-auto bg-white ">
      <Card className="w-96 shadow-xl bg-white ">
        <CardBody className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">IQ Level</h2>
            <div className="flex items-center">
              <span className="text-5xl font-bold mr-1" style={{ color: `var(--nextui-colors-${color})` }}>
                {score}
              </span>
              <span className="text-xl text-gray-500 ">/50</span>
            </div>
          </div>
          <p className="text-xl text-gray-600  mb-6">{level}</p>
          <Progress 
            color={color}
            value={percentage} 
            className="h-3 mb-4"
          />
          <div className="grid grid-cols-4 gap-2 text-center text-xs font-medium text-gray-500 ">
            <div>Below Average</div>
            <div>Average</div>
            <div>Above Average</div>
            <div>Superior</div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}