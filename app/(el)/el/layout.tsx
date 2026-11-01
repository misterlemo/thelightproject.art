import Document from "@/components/Document";
import { buildMetadata, viewport } from "@/lib/metadata";

export const metadata = buildMetadata("el");
export { viewport };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <Document lang="el">{children}</Document>;
}
