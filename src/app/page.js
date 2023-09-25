import Articles from "./components/Articles";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function Home() {
    return (
        <>
            <Header />
            <main className="max-w-8xl mx-auto flex">
                <Sidebar />
                <Articles />
            </main>
        </>
    );
}
