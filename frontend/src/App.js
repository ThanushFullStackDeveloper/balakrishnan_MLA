import { useState } from "react";
import "@/App.css";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroductionSection from "@/components/IntroductionSection";
import VisionSection from "@/components/VisionSection";
import IssuesSection from "@/components/IssuesSection";
import AchievementsSection from "@/components/AchievementsSection";
import EmotionalAppealSection from "@/components/EmotionalAppealSection";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Footer from "@/components/Footer";
import { translations } from "@/utils/mock";

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <div className="App">
      <Header 
        language={language} 
        setLanguage={setLanguage} 
        translations={translations} 
      />
      
      <main>
        <HeroSection 
          language={language} 
          translations={translations} 
        />
        
        <IntroductionSection 
          language={language} 
          translations={translations} 
        />
        
        <VisionSection 
          language={language} 
          translations={translations} 
        />
        
        <IssuesSection 
          language={language} 
          translations={translations} 
        />
        
        <AchievementsSection 
          language={language} 
          translations={translations} 
        />
        
        <EmotionalAppealSection 
          language={language} 
          translations={translations} 
        />
        
        <LeadCaptureSection 
          language={language} 
          translations={translations} 
        />
      </main>
      
      <Footer language={language} />
      
      <WhatsAppWidget 
        language={language} 
        translations={translations} 
      />
    </div>
  );
}

export default App;
