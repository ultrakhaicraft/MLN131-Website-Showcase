import { lazy } from "react";

// Lazy load features (fallback to existing ones if present)
const Home = lazy(() => import("@/features/HomePage").then(m => ({ default: m.default || m })));
const About = lazy(() => import("@/features/About").then(m => ({ default: m.default || m })));
const AIUsage = lazy(() => import("@/features/AIUsage").then(m => ({ default: m.default || m })));
const Post = lazy(() => import("@/features/Post").then(m => ({ default: m.default || m })));
const Post2 = lazy(() => import("@/features/Post2").then(m => ({ default: m.default || m })));

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/ai-usage", element: <AIUsage /> },
  { path: "/post/1", element: <Post /> },
  { path: "/post/2", element: <Post2 /> },
  { path: "/post/3", element: <Post /> },
  { path: "/post/4", element: <Post /> }
];
