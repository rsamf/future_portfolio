type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Wear',
    description:
      'AI Virtual Try-On app for iOS, Android, and Chrome allowing users to virtually try on clothing from any store.',
    link: 'https://github.com/rsamf',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Graphbook',
    description: 'Open-source observability and DAG-execution framework for building highly parallelized AI-driven data processing pipelines.',
    link: 'https://github.com/graphbook/graphbook',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
  {
    name: 'Limelight',
    description: 'iOS app that turns Spotify playlists into a public music queue. Users can vote and add tracks to play on a host device.',
    link: 'https://github.com/rsamf',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project3',
  },
  {
    name: 'WoW Fishing Bot',
    description: 'Fishing automation in World of Warcraft using Computer Vision methods with Python and OpenCV.',
    link: 'https://github.com/rsamf',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project4',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Heddle AI, Inc.',
    title: 'Technical Founder',
    start: 'Aug 2023',
    end: 'Aug 2025',
    link: 'https://github.com/rsamf',
    id: 'work1',
  },
  {
    company: 'Maxar Technologies',
    title: 'Software Development Engineer',
    start: 'Jan 2020',
    end: 'Sep 2022',
    link: 'https://www.maxar.com',
    id: 'work2',
  },
  {
    company: 'Ultimate Software, Inc.',
    title: 'Software Engineer Intern',
    start: 'Jun 2018',
    end: 'Sep 2018',
    link: 'https://www.ukg.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Text-Guided Mixup Towards Long-Tailed Image Categorization',
    description: 'Research paper published at BMVC 2024 on improving long-tailed visual recognition',
    link: 'https://bmvc2024.org',
    uid: 'blog-1',
  },
  {
    title: 'SolarDetector: Transformer-based Neural Network for Solar Panel Detection',
    description:
      'Research paper published at ACM SIGSPATIAL 2023 on detecting and masking solar panels',
    link: 'https://dl.acm.org/conference/sigspatial',
    uid: 'blog-2',
  },
  {
    title: 'Building Graphbook: An Open-Source Framework for AI Pipelines',
    description:
      'How I built a DAG-execution framework for parallelized AI-driven data processing',
    link: 'https://github.com/graphbook/graphbook',
    uid: 'blog-3',
  },
  {
    title: 'From Satellite Telemetry to AI: My Journey at Maxar Technologies',
    description: 'Lessons learned from building distributed systems and ML infrastructure at scale',
    link: '/blog/maxar-journey',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/rsamf',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/rsamf',
  },
]

export const EMAIL = 'rsamfranklin@gmail.com'
