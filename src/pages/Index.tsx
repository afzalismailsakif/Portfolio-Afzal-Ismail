
import HeroSection from "../components/HeroSection";
import ExperienceTimeline from "../components/ExperienceTimeline";
import EducationSection from "../components/EducationSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import HighlightsSection from "../components/HighlightsSection";
import PublicationsSection from "../components/PublicationsSection";
import TrainingSection from "../components/TrainingSection";
import AcademicProjectsSection from "../components/AcademicProjectsSection";
import AcademicAwardsSection from "../components/AcademicAwardsSection";
import AchievementsSection from "../components/AchievementsSection";
import BlogSection from "../components/BlogSection";

const Index = () => {
  return (
    <div className="animate-fade-in">
      <HeroSection />
      <HighlightsSection />
      <SkillsSection />
      <ExperienceTimeline />
      <EducationSection />
      <ProjectsSection />
      <PublicationsSection />
      <TrainingSection />
      <AcademicProjectsSection />
      <AcademicAwardsSection />
      <AchievementsSection />
      <BlogSection />
    </div>
  );
};

export default Index;
