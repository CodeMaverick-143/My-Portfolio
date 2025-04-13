import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Certifications() {
  const certifications = [
    {
      title: "AI For Everyone",
      issuer: "DeepLearning.AI",
      date: "April 2025",
      description: "Introduction to AI concepts, societal impacts, and how to navigate AI-powered transformations",
      link: "https://www.coursera.org/account/accomplishments/verify/E4ZOPSNIVPMP",
    },
    {
      title: "Introduction to Engineering Mechanics",
      issuer: "Georgia Institute of Technology",
      date: "March 2025",
      description: "Fundamentals of engineering mechanics including forces, moments, and equilibrium",
      link: "https://www.coursera.org/account/accomplishments/verify/0LTNERHHBYJ5",
    },
    {
      title: "How Things Work: An Introduction to Physics",
      issuer: "University of Virginia",
      date: "February 2025",
      description: "Basic principles of physics applied to everyday objects and phenomena",
      link: "https://www.coursera.org/account/accomplishments/verify/P04IW5UCQUL2",
    },
    {
      title: "Algorithmia: The ICPC Style Coding Challenge of TantraFiesta'24",
      issuer: "Unstop",
      date: "October 2024",
      description: "Certificate of Participation for competing in an algorithmic coding contest following ICPC standards",
      link: "https://unstop.com/certificate-preview/d844e9f7-3996-42b7-9b0b-c8b151fe2877",
    }
  ]
  
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">Certifications</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                  <CardDescription>{cert.issuer}</CardDescription>
                </div>
                <Badge variant="outline">{cert.date}</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <p className="text-sm text-muted-foreground mb-4 flex-grow">{cert.description}</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="self-end"
                onClick={() => window.open(cert.link, '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Certificate
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
