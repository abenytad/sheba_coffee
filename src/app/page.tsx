import MainComponent from "@/components/MainComponent";
import ServicesComponent from "@/components/ServicesComponent";
import CoffesComponent from "@/components/CoffesComponent";
import VideoComponent from "@/components/VideoComponent";
export default function Home() {
    return (
        <div className="min-h-screen p-0 m-0">
            <MainComponent />
            <ServicesComponent />
            <CoffesComponent />
            <VideoComponent />
        </div>
    );
}
