import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, Code, Palette, Database, Cloud, GitBranch, Shield, Zap } from "lucide-react"

export function SkillsSection() {
  // const skillCategories = [
  //   {
  //     title: "Web Development",
  //     icon: <Monitor className="h-8 w-8" />,
  //     skills: ["React", "Next.js", "TypeScript", "Node.js", "Express.js"],
  //   },
  //   {
  //     title: "Frontend Expertise",
  //     icon: <Code className="h-8 w-8" />,
  //     skills: ["HTML5", "CSS3", "Tailwind CSS", "Shadcn UI", "Responsive Design", "Material UI"],
  //   },
    // {
    //   title: "UI/UX Design",
    //   icon: <Palette className="h-8 w-8" />,
    //   skills: ["Figma", "Wireframing", "Prototyping"],
    // },
    // {
    //   title: "Database Management",
    //   icon: <Database className="h-8 w-8" />,
    //   skills: ["PostgreSQL", "MongoDB", "SQL", "NoSQL", "Prisma ORM"],
    // },
    // {
    //   title: "Cloud & DevOps",
    //   icon: <Cloud className="h-8 w-8" />,
    //   skills: ["AWS", "Docker", "Vercel", "Netlify", "CI/CD"],
    // },
    // {
    //   title: "Version Control",
    //   icon: <GitBranch className="h-8 w-8" />,
    //   skills: ["Git", "GitHub", "GitLab", "Branching Strategies"],
    // },
  //   {
  //     title: "Agile Methodologies",
  //     icon: <Users className="h-8 w-8" />,
  //     skills: ["Scrum", "Kanban", "Sprint Planning", "Team Collaboration"],
  //   },
    // {
    //   title: "Security Best Practices",
    //   icon: <Shield className="h-8 w-8" />,
    //   skills: ["Authentication", "Authorization", "OWASP Top 10", "Data Encryption"],
    // },
  //   {
  //     title: "Performance Optimization",
  //     icon: <Zap className="h-8 w-8" />,
  //     skills: ["Web Vitals", "Code Splitting", "Lazy Loading", "Caching"],
  //   },
  // ]

  const skillCategories = [
    {
      title: "UI/UX Design",
      icon: <Palette className="h-8 w-8" />,
      skills: ["Figma", "Wireframing", "Prototyping"],
    },
    {
      title: "Frontend",
      icon: <Monitor className="h-8 w-8" />,
      skills: ["React.js", "Redux", "Redux-Saga", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Material UI", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: <Code className="h-8 w-8" />,
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "Bcrypt", "Nodemailer"],
    },
    {
      title: "Database",
      icon: <Database className="h-8 w-8" />,
      skills: ["MongoDB", "Mongoose", "PostgreSQL", "MySQL", "Firebase (basic)"],
    },
      {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-8 w-8" />,
      skills: ["AWS", "Docker", "Vercel", "Netlify", "CI/CD"],
    },
    {
      title: "Version Control",
      icon: <GitBranch className="h-8 w-8" />,
      skills: ["Git", "GitHub", "GitLab", "Branching Strategies"],
    },
    {
      title: "Testing & Concepts",
      icon: <Zap className="h-8 w-8" />,
      skills: ["Jest", "MVC Architecture", "Responsive Design", "Error Handling", "Form Validation", "Secure Authentication"],
    },
    {
      title: "Security Best Practices",
      icon: <Shield className="h-8 w-8" />,
      skills: ["Authentication", "Authorization", "OWASP Top 10", "Data Encryption"],
    },
  ];

  return (
    <Section id="skills" className="bg-gray-50">
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-white border border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-3 text-gray-700">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
