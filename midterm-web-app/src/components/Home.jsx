import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";
import Topbar from "../../components/Topbar";
import "./general.css"

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed/>
      </div>
    </>
  );
}