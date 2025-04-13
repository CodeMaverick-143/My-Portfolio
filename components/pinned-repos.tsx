import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, GitFork, ExternalLink, Github } from "lucide-react"

export default function PinnedRepos() {
  const repos = [
    {
      title: "Nexa",
      description: "Web Services Company platform offering design, development and hosting solutions",
      tech: ["Tailwind", "React", "Javascript"],
      stars: 8,
      forks: 2,
      github: "https://github.com/CodeMaverick-143/Nexa",
      demo: "https://nexa-ashen.vercel.app",
      color: "bg-blue-600/20",
    },
    {
      title: "Matrix",
      description: "Advanced Cybersecurity Platform with real-time threat detection and response capabilities",
      tech: ["React", "Node.js", "MongoDB"],
      stars: 2,
      forks: 5,
      github: "https://github.com/CodeMaverick-143/Matrix",
      demo: "https://matrix-nstpune.vercel.app",
      color: "bg-purple-600/20",
    },
    {
      title: "Movie Search App",
      description: "A powerful movie search application with advanced filtering and sorting capabilities",
      tech: ["React", "Node.js", "MongoDB"],
      stars: 19,
      forks: 5,
      github: "https://github.com/CodeMaverick-143/Movie_search",
      demo: "https://github.com/CodeMaverick-143/Movie_search",
      color: "bg-orange-600/20",
    },
    {
      title: "TimePass",
      description: "A collection of fun and engaging mini-games and activities",
      tech: ["React", "Node.js", "MongoDB"],
      stars: 19,
      forks: 5,
      github: "https://github.com/CodeMaverick-143/TimePass",
      demo: "https://gaming-seven-lac.vercel.app",
      color: "bg-pink-600/20",
    },
    {
      title: "PortfolioShowcase",
      description: "A showcase of various portfolio templates and designs",
      tech: ["React", "Node.js", "MongoDB"],
      stars: 19,
      forks: 5,
      github: "https://github.com/CodeMaverick-143/Portfolio_Showcase",
      demo: "https://nstsdc-portfolio.netlify.app/",
      color: "bg-green-600/20",
    },
    {
      title: "NST-SDC Website",
      description: "Un-Official website for the NST Software Development Club with event management",
      tech: ["HTMl", "Tailwind", "CSS3"],
      stars: 19,
      forks: 5,
      github: "https://github.com/CodeMaverick-143/Website",
      demo: "https://nstsdc.vercel.app",
      color: "bg-indigo-600/20",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {repos.map((repo, i) => (
        <Card key={i} className={`border-2 border-border ${repo.color} transition-all hover:shadow-lg flex flex-col h-full`}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${repo.color}`}></div>
                <CardTitle className="text-lg font-semibold">{repo.title}</CardTitle>
              </div>
              <div className="flex gap-2">
                <a href={repo.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-4 w-4" />
                </a>
                <a href={repo.demo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
            <CardDescription className="line-clamp-2 h-10">{repo.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2 py-2">
            {repo.tech.map((tech, i) => (
              <Badge key={i} variant="secondary" className="px-2 py-0.5 text-xs">
                {tech}
              </Badge>
            ))}
          </CardContent>
          <CardFooter className="pt-2 mt-auto flex justify-between">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1" />
                <span>{repo.stars}</span>
              </div>
              <div className="flex items-center">
                <GitFork className="h-4 w-4 mr-1" />
                <span>{repo.forks}</span>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
