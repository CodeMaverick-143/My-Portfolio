import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Timeline() {
  const timelineItems = [
    {
      title: "Matrix Cybersecurity",
      role: "Lead Developer",
      period: "2025 - Present",
      description: "Leading the development of advanced cybersecurity solutions with real-time threat detection",
      tags: ["Cybersecurity", "Python", "React", "Node.js"],
      type: "experience",
    },
    {
      title: "DevOps at NST-SDC",
      role: "DevOps Engineer",
      period: "2024 - 2025",
      description: "Managed CI/CD pipelines and infrastructure for the Software Development Club",
      tags: ["DevOps", "Docker", "Jenkins", "AWS"],
      type: "experience",
    },
    {
      title: "Hacktoberfest 2023",
      role: "Contributor",
      period: "October 2024",
      description: "Contributed to 5 open source projects during Hacktoberfest",
      tags: ["Open Source", "Git", "JavaScript"],
      type: "event",
    },
    {
      title: "GSoC Exploration",
      role: "Applicant",
      period: "November 2024 - present",
      description: "Explored Google Summer of Code opportunities and submitted proposals",
      tags: ["GSoC", "Open Source"],
      type: "event",
    },
    {
      title: "DevFest 2024",
      role: "Participant",
      period: "November 2024",
      description: "Participated in Google Developer Group's annual DevFest event",
      tags: ["GDG", "Conference", "Networking"],
      type: "event",
    },
    {
      title: "Scratchthon",
      role: "top - 5",
      period: "September 2024",
      description: "Won first place in the university hackathon with an innovative solution",
      tags: ["Hackathon", "Innovation", "Team Work"],
      type: "event",
    },
    {
      title: "Tekron Hackathon",
      role: "Top 10 Finalist",
      period: "March 2025",
      description: "Built a smart logistics optimizer during Tekron, securing a spot in the top 10",
      tags: ["Hackathon", "Participant", "Optimization", "Team Project"],
      type: "event",
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "experience":
        return "border-l-blue-500"
      case "event":
        return "border-l-green-500"
      case "project":
        return "border-l-purple-500"
      default:
        return "border-l-gray-500"
    }
  }

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">Timeline Activity</h2>

      <div className="space-y-4">
        {timelineItems.map((item, index) => (
          <Card key={index} className={`border-l-4 ${getTypeColor(item.type)}`}>
            <CardHeader className="pb-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.role}</CardDescription>
                </div>
                <Badge variant="outline" className="self-start sm:self-center">
                  {item.period}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-sm">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="px-2 py-0.5 text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
