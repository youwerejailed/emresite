import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Navigation
          home: 'Home',
          about: 'About',
          projects: 'Projects',
          skills: 'Skills',
          contact: 'Contact',

          // Home Page
          greeting: 'Hi, I\'m Emre Sevim',
          role: 'Security Engineer & Full Stack Developer',
          description: 'I am a detail-oriented DevOps and Cloud Security enthusiast specializing in offensive security and cloud-native infrastructures. With hands-on expertise in deploying secure, containerized environments using Docker, Terraform, and advanced monitoring tools like Falco, Wazuh, and ELK Stack, I focus on building resilient systems that mitigate threats in real time.',
          viewMyWork: 'View My Work',
          webDev: 'Web Development',
          webDevDescription: 'Creating responsive and modern web applications using the latest technologies.',
          webSecurity: 'Web Application Security',
          webSecurityDescription: 'Specializing in penetration testing, secure coding practices, and cloud-native security, I leverage tools like Burp Suite, Nmap, and Metasploit to identify and address critical vulnerabilities.',
          backendDev: 'Backend Development',
          backendDevDescription: 'Building robust and scalable backend systems with modern technologies.',

          // About Page
          aboutTitle: 'About Me',
          aboutDescription: 'Security engineer with expertise in cloud infrastructure and web development. Passionate about creating secure and scalable solutions.',

          // Projects Page
          projectsTitle: 'My Projects',
          viewProject: 'View Project',
          allProjects: 'All',
          security: 'Security',
          blockchain: 'Blockchain',
          cloud: 'Cloud',
          tools: 'Tools',

          // Skills Page
          skillsTitle: 'Skills & Expertise',
          cloudInfra: 'Cloud & Infrastructure',
          securityTools: 'Security Tools',
          development: 'Development',
          webTech: 'Web Technologies',
          certifications: 'Certifications',

          // Contact Page
          contactTitle: 'Get in Touch',
          name: 'Name',
          email: 'Email',
          message: 'Message',
          send: 'Send Message',

          // Footer
          rights: 'All rights reserved.'
        }
      },
      de: {
        translation: {
          // Navigation
          home: 'Startseite',
          about: 'Über mich',
          projects: 'Projekte',
          skills: 'Fähigkeiten',
          contact: 'Kontakt',

          // Home Page
          greeting: 'Hallo, ich bin Emre Sevim',
          role: 'Sicherheitsingenieur & Full-Stack-Entwickler',
          description: 'Ich bin ein detailorientierter DevOps- und Cloud-Security-Enthusiast, spezialisiert auf offensive Sicherheit und Cloud-native Infrastrukturen. Mit praktischer Erfahrung in der Bereitstellung sicherer, containerisierter Umgebungen mit Docker, Terraform und fortschrittlichen Überwachungstools wie Falco, Wazuh und ELK Stack konzentriere ich mich darauf, widerstandsfähige Systeme aufzubauen, die Bedrohungen in Echtzeit minimieren.',
          viewMyWork: 'Meine Arbeit ansehen',
          webDev: 'Webentwicklung',
          webDevDescription: 'Entwicklung responsiver und moderner Webanwendungen mit den neuesten Technologien.',
          webSecurity: 'Webanwendungssicherheit',
          webSecurityDescription: 'Spezialisiert auf Penetrationstests, sichere Codierungspraktiken und Cloud-native Sicherheit, nutze ich Tools wie Burp Suite, Nmap und Metasploit zur Identifizierung und Behebung kritischer Schwachstellen.',
          backendDev: 'Backend-Entwicklung',
          backendDevDescription: 'Entwicklung robuster und skalierbarer Backend-Systeme mit modernen Technologien.',

          // About Page
          aboutTitle: 'Über Mich',
          aboutDescription: 'Sicherheitsingenieur mit Expertise in Cloud-Infrastruktur und Webentwicklung. Leidenschaftlich engagiert für sichere und skalierbare Lösungen.',

          // Projects Page
          projectsTitle: 'Meine Projekte',
          viewProject: 'Projekt ansehen',
          allProjects: 'Alle',
          security: 'Sicherheit',
          blockchain: 'Blockchain',
          cloud: 'Cloud',
          tools: 'Werkzeuge',

          // Skills Page
          skillsTitle: 'Fähigkeiten & Expertise',
          cloudInfra: 'Cloud & Infrastruktur',
          securityTools: 'Sicherheitstools',
          development: 'Entwicklung',
          webTech: 'Webtechnologien',
          certifications: 'Zertifizierungen',

          // Contact Page
          contactTitle: 'Kontakt aufnehmen',
          name: 'Name',
          email: 'E-Mail',
          message: 'Nachricht',
          send: 'Nachricht senden',

          // Footer
          rights: 'Alle Rechte vorbehalten.'
        }
      },
      tr: {
        translation: {
          // Navigation
          home: 'Ana Sayfa',
          about: 'Hakkımda',
          projects: 'Projeler',
          skills: 'Yetenekler',
          contact: 'İletişim',

          // Home Page
          greeting: 'Merhaba, Ben Emre Sevim',
          role: 'Güvenlik Mühendisi & Full Stack Geliştirici',
          description: 'Saldırı odaklı güvenlik ve bulut-native altyapılar konusunda uzmanlaşmış, detay odaklı bir DevOps ve Bulut Güvenliği tutkunuyum. Docker, Terraform ve Falco, Wazuh ve ELK Stack gibi gelişmiş izleme araçlarını kullanarak güvenli, konteynerize ortamlar oluşturma konusunda pratik deneyime sahibim ve tehditleri gerçek zamanlı olarak azaltan dayanıklı sistemler kurmaya odaklanıyorum.',
          viewMyWork: 'Projelerimi Görüntüle',
          webDev: 'Web Geliştirme',
          webDevDescription: 'En son teknolojileri kullanarak duyarlı ve modern web uygulamaları oluşturma.',
          webSecurity: 'Web Uygulama Güvenliği',
          webSecurityDescription: 'Sızma testleri, güvenli kodlama uygulamaları ve bulut-native güvenlik konularında uzmanlaşmış olarak, kritik güvenlik açıklarını belirlemek ve gidermek için Burp Suite, Nmap ve Metasploit gibi araçları kullanıyorum.',
          backendDev: 'Backend Geliştirme',
          backendDevDescription: 'Modern teknolojilerle sağlam ve ölçeklenebilir backend sistemleri geliştirme.',

          // About Page
          aboutTitle: 'Hakkımda',
          aboutDescription: 'Bulut altyapısı ve web geliştirme konularında uzmanlığa sahip güvenlik mühendisi. Güvenli ve ölçeklenebilir çözümler oluşturma konusunda tutkulu.',

          // Projects Page
          projectsTitle: 'Projelerim',
          viewProject: 'Projeyi Görüntüle',
          allProjects: 'Tümü',
          security: 'Güvenlik',
          blockchain: 'Blockchain',
          cloud: 'Bulut',
          tools: 'Araçlar',

          // Skills Page
          skillsTitle: 'Yetenekler & Uzmanlık',
          cloudInfra: 'Bulut & Altyapı',
          securityTools: 'Güvenlik Araçları',
          development: 'Geliştirme',
          webTech: 'Web Teknolojileri',
          certifications: 'Sertifikalar',

          // Contact Page
          contactTitle: 'İletişime Geç',
          name: 'İsim',
          email: 'E-posta',
          message: 'Mesaj',
          send: 'Mesaj Gönder',

          // Footer
          rights: 'Tüm hakları saklıdır.'
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 