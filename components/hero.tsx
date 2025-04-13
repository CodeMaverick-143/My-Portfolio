import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Github, Linkedin, Code2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Hero() {
  return (
    <section className="py-12 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-start">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Avatar className="h-48 w-48 border-4 border-border">
            <AvatarImage src="/myPhoto.jpg" alt="Arpit Sarang" />
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-2 w-full">
            <Button variant="outline" className="w-full">
              Follow
            </Button>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-1">Arpit Sarang</h1>
            <p className="text-xl text-muted-foreground mb-2">@CodeMaverick-143</p>
            <p className="text-lg mb-4">Crafting scalable web apps & exploring the future of tech.</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline" className="px-3 py-1">
                Full-Stack Developer
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                AI/ML Enthusiast
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Open Source Contributor
              </Badge>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com/CodeMaverick-143" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.linkedin.com/in/arpitsarang" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://leetcode.com/u/codemaverick-143/" target="_blank" rel="noopener noreferrer">
                <Code2 className="mr-2 h-4 w-4" />
                LeetCode
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.hackerrank.com/profile/CodeMaverick_143" target="_blank" rel="noopener noreferrer">
                <Code2 className="mr-2 h-4 w-4" />
                HackerRank
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.codechef.com/users/code_maverick0" target="_blank" rel="noopener noreferrer">
                <Code2 className="mr-2 h-4 w-4" />
                CodeChef
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://codeforces.com/profile/CodeMaverick-143" target="_blank" rel="noopener noreferrer">
                <Code2 className="mr-2 h-4 w-4" />
                CodeForces
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <svg className="h-4 w-4 mr-1" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
              <span>16 followers</span>
            </div>
            <div className="flex items-center">
              <svg className="h-4 w-4 mr-1" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path>
              </svg>
              <span>15 stars</span>
            </div>
            <div>Based in India</div>
          </div>
        </div>
      </div>
    </section>
  )
}
