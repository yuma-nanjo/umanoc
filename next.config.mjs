import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'
import rehypePrettyCode from "rehype-pretty-code";
import { hostname } from 'os';
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  images:{
    remotePatterns:[
      {
      protocol:"https",
      hostname:"avatars.githubusercontent.com"
      }
    ]
  }
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrettyCode],
  },
})
 
// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig)