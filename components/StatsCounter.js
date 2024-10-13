import { Card, CardBody,CircularProgress,Spacer } from "@nextui-org/react"
import { Brain, BookOpen, Lightbulb, Target } from "lucide-react"


const StatCard = ({ title, value, icon, color }) => (
  <Card className={`${color} w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(50%-0.75rem)]`}>
    <CardBody className="flex flex-row items-center justify-between p-4">
      <div className="flex flex-col">
        <p className="text-sm font-medium text-white/60">{title}</p>
        <Spacer y={2 }></Spacer>
       <CircularProgress size="sm" value={80} classNames={{indicator:"text-white"}}></CircularProgress>
      </div>
      {icon}
    </CardBody>
  </Card>
)

export default function StatsCounter() {
  // Generate random numbers for stats
  const iqScore = Math.floor(Math.random() * 60) + 100 // Random IQ between 100-160
  const courseSuggestions = Math.floor(Math.random() * 20) + 5 // Random number between 5-25
  const insights = Math.floor(Math.random() * 50) + 10 // Random number between 10-60
  const results = Math.floor(Math.random() * 1000) + 100 // Random number between 100-1100

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex flex-wrap gap-4">
        <StatCard
          title="IQ Score"
          value={iqScore}
          icon={<Brain className="w-8 h-8 text-white" />}
          color="bg-purple-600 hover:bg-purple-700"
        />
        <StatCard
          title="Course Suggestions"
          value={courseSuggestions}
          icon={<BookOpen className="w-8 h-8 text-white" />}
          color="bg-blue-600 hover:bg-blue-700"
        />
        <StatCard
          title="Insights"
          value={insights}
          icon={<Lightbulb className="w-8 h-8 text-white" />}
          color="bg-yellow-500 hover:bg-yellow-600"
        />
        <StatCard
          title="Results"
          value={results}
          icon={<Target className="w-8 h-8 text-white" />}
          color="bg-green-600 hover:bg-green-700"
        />
      </div>
    </div>
  )
}