import WebsiteTopNav from "./particles/WebsiteTopNav";

export default function WebsiteLayout({children}) {
  return (
    <>
    <WebsiteTopNav/>
    {children}
    </>
  )
}
