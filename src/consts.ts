import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Cristián',
  description:
    'Cristián Maureira-Fredes personal website',
  href: 'https://maureira.dev',
  author: 'jktrn',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 10,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/community',
    label: 'community',
  },
  {
    href: '/speaking',
    label: 'speaking',
  },
  {
    href: '/academia',
    label: 'academia',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://mastodon.social/@cmaureir',
    label: 'Mastodon',
  },
  {
    href: 'https://bsky.app/profile/maureira.dev',
    label: 'Bluesky',
  },
  {
    href: 'https://twitter.com/cmaureir',
    label: 'Twitter',
  },
  {
    href: 'https://discordapp.com/users/328111103923978240',
    label: 'Discord',
  },
  {
    href: 'https://github.com/cmaureir',
    label: 'GitHub',
  },
  {
    href: 'https://gitlab.com/cmaureir',
    label: 'Gitlab',
  },
  {
    href: 'https://linkedin.com/in/cmaureir',
    label: 'LinkedIn',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  Gitlab: 'lucide:gitlab',
  Mastodon: 'simple-icons:mastodon',
  Bluesky: 'simple-icons:bluesky',
  Discord: 'simple-icons:discord',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
