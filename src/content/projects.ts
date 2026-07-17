export interface Project {
  id: string
  title: string
  tagline: string
  category: string
  era: string
  image: string
  techStack: string[]
  githubUrl?: string // optional — not every project has a public repo
  liveUrl?: string
  status?: 'in-progress' // omit entirely for finished projects
  problem: string
  motivation: string
  architecture: string
  challenges: string
  lessons: string
  themes: string[]
}

export const projects: Project[] = [
  {
    id: 'planora',
    title: 'Planora',
    tagline: 'University society event management, from proposal to budget close-out',
    category: 'Desktop Application',
    era: '2025',
    image: '/assets/projects/planora.png',
    techStack: ['Java', 'JavaFX', 'SQL Server', 'JDBC', 'Maven'],
    githubUrl: 'https://github.com/Sawaira-Fareed/Planora',
    problem:
      'University societies had no single system to submit event proposals, get multi-level approvals, book resources, or track budgets — everything ran through scattered emails and spreadsheets, with no visibility into approval status or budget overruns until it was too late.',
    motivation:
      'I wanted to build something with real organizational complexity: multiple user roles, a genuine approval workflow, and business rules that actually matter (conflict detection, budget flags) rather than a simple CRUD app.',
    architecture:
      'Structured into four layers — presentation (JavaFX), business logic, data access (JDBC), and domain — so the system stays maintainable as features grow. Role-based dashboards for Admin, President, and Mentor each surface only what that role needs.',
    challenges:
      "Real-time conflict detection for resource booking was the hardest part — making sure two societies couldn't double-book the same hall or equipment required careful transaction handling at the data access layer, not just UI-level validation.",
    lessons:
      'Layered architecture pays for itself the moment requirements change — I could swap approval rules or add a new role without touching the UI layer at all.',
    themes: ['Java', 'Desktop', 'Layered Architecture', 'JavaFX'],
  },
  {
    id: 'disaster-response-mis',
    title: 'Smart Disaster Response MIS',
    tagline: 'An operations platform coordinating emergency response teams in real time',
    category: 'Web Application',
    era: '2025',
    image: '/assets/projects/disaster-response.png',
    techStack: ['ASP.NET Web Forms', 'C#', 'SQL Server', 'Chart.js', 'Bootstrap 5'],
    githubUrl: 'https://github.com/Sawaira-Fareed/Smart-Disaster-Response-MIS',
    problem:
      "Disaster response involves administrators, field officers, warehouse managers, and finance officers who all need coordinated, real-time visibility — emergency reporting, rescue team coordination, resource tracking, and hospital bed monitoring can't live in silos when minutes matter.",
    motivation:
      'I wanted to build an enterprise-style MIS with genuine multi-role coordination rather than a single-user tool — modeling how a real operations center would need five different roles to see different slices of the same live data.',
    architecture:
      'ASP.NET Web Forms frontend with ADO.NET handling all data access directly (no ORM), giving fine-grained control over queries against SQL Server. Chart.js dashboards visualize operational metrics like resource allocation and response times in real time.',
    challenges:
      'Designing approval workflows and audit logging that stayed consistent across five different roles, each with different permissions, without the logic turning into a tangle of role-check conditionals scattered through the codebase.',
    lessons:
      "ADO.NET without an ORM forces you to think explicitly about every query — slower to write initially, but it taught me exactly what's happening at the database layer instead of hiding it behind abstraction.",
    themes: ['C#', 'ASP.NET', 'Enterprise MIS', 'Real-time Dashboards'],
  },
  {
    id: 'mystical-archive',
    title: 'The Mystical Archive',
    tagline: 'A dark-academia digital sanctuary for world folklore and oral tradition',
    category: 'Web Application',
    era: '2025 – ongoing',
    image: '/assets/projects/mystical-archive.png',
    techStack: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'Figma'],
    githubUrl: 'https://github.com/Sawaira-Fareed/The-Mystical-Archive',
    liveUrl: 'https://sawaira-fareed.github.io/The-Mystical-Archive/',
    problem:
      'Folklore and oral tradition are usually presented as plain text on generic archive sites — nothing about the experience matches the atmosphere or cultural weight of the stories themselves.',
    motivation:
      'I wanted to prove that a front-end project could carry a genuine visual identity, not just function — treating each story like a historical artifact worth preserving, inspired by the atmosphere of ancient libraries and dark academia.',
    architecture:
      'Prototyped the entire visual identity in Figma before writing a line of CSS. Built as a single-page application with custom CSS Grid and Flexbox layouts, browsing by culture, full-text search, and localStorage-backed favorites — no backend, everything client-side.',
    challenges:
      "Getting the dark-academia aesthetic to stay readable and accessible across devices — heavy atmospheric design can easily tip into poor contrast or cramped mobile layouts if you're not deliberate about it.",
    lessons:
      'Designing in Figma first, before any code, meant far fewer mid-build redesigns — decisions about mood and hierarchy were already made by the time implementation started.',
    themes: ['Frontend', 'UI/UX Design', 'Dark Academia', 'Figma-to-Code'],
  },
  {
    id: 'brick-breaker-masm',
    title: 'Brick Breaker (x86 Assembly)',
    tagline: 'A complete 3-level arcade game built from scratch in MASM Assembly',
    category: 'Systems Programming',
    era: '2024',
    image: '/assets/projects/brick-breaker.png',
    techStack: ['x86 Assembly (MASM)', 'DOSBox', 'VGA Mode 13h'],
    githubUrl: 'https://github.com/Sawaira-Fareed/Brick-Breaker-in-MASM-Assembly',
    problem:
      'Building a semester project for Computer Organization and Assembly Language that goes beyond a toy example — something that actually feels like a complete, playable game.',
    motivation:
      "Assembly strips away every abstraction modern languages give you for free — I wanted to understand what's really happening at the hardware level when a game renders and responds to input.",
    architecture:
      'Runs in VGA Mode 13h (320×200, 256 colors) using direct video memory access in Intel 8086 Real Mode for pixel-perfect rendering — no graphics library, every pixel written by hand.',
    challenges:
      'Real-time ball physics and collision detection with zero high-level abstractions — every bounce angle and collision check had to be worked out and implemented directly in Assembly.',
    lessons:
      'Working this close to the hardware made every abstraction I now take for granted in higher-level languages make a lot more sense — I understand *why* those abstractions exist.',
    themes: ['Assembly', 'Systems Programming', 'Game Dev', 'VGA Graphics'],
  },
  {
    id: 'traffic-sync',
    title: 'Traffic-Sync',
    tagline: 'A multithreaded traffic and parking simulator with real IPC-based coordination',
    category: 'Systems Programming',
    era: '2025',
    image: '/assets/projects/traffic-simulation.png',
    techStack: ['C', 'POSIX Threads', 'IPC (Pipes)', 'Semaphores'],
    githubUrl: 'https://github.com/Sawaira-Fareed/Traffic-Sync',
    problem:
      'Simulating realistic traffic coordination — two intersections, 15 vehicles across 6 types, emergency vehicle prioritization, and parking allocation — is fundamentally a concurrency problem, not just a rendering one.',
    motivation:
      'A team project built to get real hands-on practice with OS-level concurrency primitives: mutexes, semaphores, condition variables, and inter-process communication, applied to a scenario complex enough that naive locking would visibly fail.',
    architecture:
      'Each intersection runs its own light-control thread; 15 vehicle threads negotiate access via a directional conflict matrix for collision avoidance. Emergency vehicles (ambulances, firetrucks) communicate via pipe-based IPC to trigger emergency-mode signal overrides across both intersections. Parking uses semaphore-controlled queues with first-come-first-serve promotion.',
    challenges:
      "Coordinating emergency protocol state across two independently-running intersection threads without race conditions — an ambulance approaching one intersection needs to reliably signal the other before its light cycle changes underneath it.",
    lessons:
      "Concurrency bugs at this level don't show up reliably in testing — they show up under load, intermittently. Designing the conflict matrix up front, rather than patching collisions as they appeared, was what actually made the system trustworthy.",
    themes: ['C', 'Concurrency', 'IPC', 'Systems Programming'],
  },
  {
    id: 'zaria',
    title: 'Zaria',
    tagline: 'An AI-powered local service marketplace — describe what you need in Urdu or English, Zaria finds and books a provider',
    category: 'Web Application',
    era: '2026 · In Progress',
    image: '/assets/projects/zaria.png',
    techStack: ['React 19', 'Supabase', 'Zustand', 'Gemini API'],
    githubUrl: 'https://github.com/Sawaira-Fareed/TaskMate', // repo currently still named TaskMate, will be renamed
    liveUrl: 'https://zaria-pk.vercel.app/',
    status: 'in-progress',
    problem:
      'Booking local services in Pakistan — plumbers, electricians, repairs — usually means phone calls and word-of-mouth, with no structured way to describe a need and get matched to an available provider.',
    motivation:
      'Building a bilingual (Urdu/English), AI-assisted marketplace as a team project, with real infrastructure decisions: row-level security, sequential provider contacting with timeouts, and a merit-based provider tier system.',
    architecture:
      'React 19 + Supabase (Postgres, Auth, RLS) with Zustand for state and Gemini/Groq for natural-language intent parsing. Still under active development — full architecture write-up will follow once the core booking flow is stable.',
    challenges: 'This project is still under construction — details will be added as the build progresses.',
    lessons: 'This project is still under construction — details will be added as the build progresses.',
    themes: ['AI', 'Marketplace', 'Supabase', 'In Progress'],
  },
  {
    id: 'ship-route-simulator',
    title: 'Global Ship Route Simulator',
    tagline: 'A graph-based route optimization engine for modeling efficient shipping lanes',
    category: 'Systems / Algorithms',
    era: '2024',
    image: '/assets/projects/ship-route.png',
    techStack: ['C++', 'SFML', 'Graph Algorithms'],
    // No public repo for this one — coursework project, not currently pushed to GitHub.
    problem:
      'Modeling real-world shipping networks efficiently requires more than a basic shortest-path implementation — the graph is large, weighted, and needs to stay performant as the simulation scales.',
    motivation:
      'I wanted hands-on practice with graph algorithms beyond textbook exercises — applying DFS and shortest-path algorithms to a problem with actual geographic and logistical meaning.',
    architecture:
      'Built custom, memory-efficient graph traversal structures rather than relying on a general-purpose library, applying DFS and shortest-path algorithms over a weighted graph with SFML handling the visual simulation layer.',
    challenges:
      "Keeping the simulation performant at scale meant being deliberate about memory layout for the graph structures — naive adjacency representations didn't hold up once the network grew.",
    lessons:
      'Writing custom data structures instead of reaching for a library forced a much deeper understanding of the actual performance trade-offs in graph traversal.',
    themes: ['C++', 'Algorithms', 'SFML', 'Graph Theory'],
  },
]
