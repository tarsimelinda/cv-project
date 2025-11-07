import Navbar from "../components/Navbar";
import HomeSection from "../sections/HomeSection"
import AboutSection from "../sections/AboutSection"
import SkillsSection from "../sections/SkillsSections"
import ProjectsSection from "../sections/ProjectsSection"
import ContactSection from "../sections/ContactSections"
import ContactFormSection from "../sections/ContactFormSection";
import Footer from "../components/Footer";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <HomeSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactFormSection/>
            <ContactSection />
            <Footer />
        </>
    );
}
