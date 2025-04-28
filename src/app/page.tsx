import Link from "next/link";
import AdView from "@/components/AdView";
import Sidebar from "@/components/Sidebar";
import AdFullDetailView from "@/components/AdFullDetailView";
import FullPage from "@/components/FullPage";
export default function Home() {
  return (
<>
<div>
<AdView />
<Sidebar />
<AdFullDetailView />
<FullPage />
</div>
</>
  );
}
