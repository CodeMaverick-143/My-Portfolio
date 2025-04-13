import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiTailwindcss, 
  SiBootstrap, 
  SiHtml5, 
  SiCss3, 
  SiPython, 
  SiMongodb, 
  SiMysql, 
  SiGit, 
  SiLinux, 
  SiVite, 
  SiNextdotjs 
} from "react-icons/si"

export default function Skills() {
  const skills = [
    { 
      name: "JavaScript", 
      color: "#f1e05a", 
      level: 90,
      icon: <SiJavascript className="w-4 h-4" />
    },
    { 
      name: "TypeScript", 
      color: "#3178c6", 
      level: 80,
      icon: <SiTypescript className="w-4 h-4" />
    },
    { 
      name: "React", 
      color: "#61dafb", 
      level: 85,
      icon: <SiReact className="w-4 h-4" />
    },
    { 
      name: "Node.js", 
      color: "#68a063", 
      level: 80,
      icon: <SiNodedotjs className="w-4 h-4" />
    },
    { 
      name: "Express.js", 
      color: "#828282", 
      level: 80,
      icon: <SiExpress className="w-4 h-4" />
    },
    { 
      name: "Tailwind", 
      color: "#38bdf8", 
      level: 90,
      icon: <SiTailwindcss className="w-4 h-4" />
    },
    { 
      name: "Bootstrap", 
      color: "#7952b3", 
      level: 75,
      icon: <SiBootstrap className="w-4 h-4" />
    },
    { 
      name: "HTML", 
      color: "#e44d26", 
      level: 90,
      icon: <SiHtml5 className="w-4 h-4" />
    },
    { 
      name: "CSS", 
      color: "#264de4", 
      level: 85,
      icon: <SiCss3 className="w-4 h-4" />
    },
    { 
      name: "Python", 
      color: "#3572A5", 
      level: 75,
      icon: <SiPython className="w-4 h-4" />
    },
    { 
      name: "MongoDB", 
      color: "#4DB33D", 
      level: 80,
      icon: <SiMongodb className="w-4 h-4" />
    },
    { 
      name: "MySQL", 
      color: "#00758F", 
      level: 75,
      icon: <SiMysql className="w-4 h-4" />
    },
    { 
      name: "GitHub", 
      color: "#6e5494", 
      level: 85,
      icon: <SiGit className="w-4 h-4" />
    },
    { 
      name: "Linux", 
      color: "#ffcc00", 
      level: 70,
      icon: <SiLinux className="w-4 h-4" />
    },
    { 
      name: "Vite", 
      color: "#646CFF", 
      level: 75,
      icon: <SiVite className="w-4 h-4" />
    },
    { 
      name: "Next.js", 
      color: "#005571", 
      level: 65,
      icon: <SiNextdotjs className="w-4 h-4" />
    }
  ]
  
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">Skills & Tech Stack</h2>

      <Card>
        <CardHeader>
          <CardTitle>Technical Proficiency</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    {skill.icon}
                    <span className="font-medium">{skill.name}</span>
                  </div>
                </div>
                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: skill.color,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
