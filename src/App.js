import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import CertificationsSection from "./components/CertificationsSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <ChakraProvider>
        <main>
          <Header />
          <LandingSection />
          <CertificationsSection />
          <ProjectsSection />
          <Footer />
        </main>
    </ChakraProvider>
  );
}

export default App;
