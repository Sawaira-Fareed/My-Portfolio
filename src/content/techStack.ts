export interface TechItem {
  name: string
  // devicon CDN icon slug — null means no reliable brand logo exists,
  // rendered as a text badge instead so nothing looks broken.
  iconSlug: string | null
  category: 'language' | 'frontend' | 'backend' | 'tool'
}

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

export function iconUrl(slug: string): string {
  return `${DEVICON_BASE}/${slug}.svg`
}

export const techStack: TechItem[] = [
  // Languages
  { name: 'C', iconSlug: 'c/c-original', category: 'language' },
  { name: 'C++', iconSlug: 'cplusplus/cplusplus-original', category: 'language' },
  { name: 'Java', iconSlug: 'java/java-original', category: 'language' },
  { name: 'JavaScript', iconSlug: 'javascript/javascript-original', category: 'language' },
  { name: 'C#', iconSlug: 'csharp/csharp-original', category: 'language' },
  { name: 'x86 Assembly', iconSlug: null, category: 'language' },

  // Web & Frontend
  { name: 'HTML5', iconSlug: 'html5/html5-original', category: 'frontend' },
  { name: 'CSS3', iconSlug: 'css3/css3-original', category: 'frontend' },
  { name: 'React', iconSlug: 'react/react-original', category: 'frontend' },
  { name: 'Bootstrap', iconSlug: 'bootstrap/bootstrap-original', category: 'frontend' },

  // Backend & Databases
  { name: 'Node.js', iconSlug: 'nodejs/nodejs-original', category: 'backend' },
  { name: 'ASP.NET', iconSlug: 'dotnetcore/dotnetcore-original', category: 'backend' },
  { name: 'ADO.NET', iconSlug: null, category: 'backend' },
  { name: 'SQL Server', iconSlug: 'microsoftsqlserver/microsoftsqlserver-plain', category: 'backend' },

  // Tools
  { name: 'Git', iconSlug: 'git/git-original', category: 'tool' },
  { name: 'GitHub', iconSlug: 'github/github-original', category: 'tool' },
  { name: 'VS Code', iconSlug: 'vscode/vscode-original', category: 'tool' },
  { name: 'IntelliJ IDEA', iconSlug: 'intellij/intellij-original', category: 'tool' },
  { name: 'Visual Studio', iconSlug: 'visualstudio/visualstudio-plain', category: 'tool' },
  { name: 'Maven', iconSlug: 'maven/maven-original', category: 'tool' },
  { name: 'JavaFX', iconSlug: 'java/java-original', category: 'tool' },
  { name: 'SFML', iconSlug: null, category: 'tool' },
]
