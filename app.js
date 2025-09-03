// Application IA & Études - JavaScript

// ========== Données de l'application ==========
const appData = {
  tools: [
    {
      id: 1,
      name: "ChatGPT",
      category: "Rédaction & Correction",
      description: "Assistant conversationnel polyvalent pour la rédaction, l'explication de concepts et le brainstorming",
      video: {
        type: "video",
        url: "videos/chatgpt-demo.mp4",
        alt: "Démonstration de ChatGPT : aide à la rédaction et explication de concepts"
      },
      useCases: ["Aide à la rédaction de dissertations", "Explication de concepts complexes", "Brainstorming d'idées", "Génération de plans de travail"],
      advantages: ["Disponible 24h/24", "Polyvalent", "Interface intuitive", "Réponses rapides"],
      icon: "💬",
      link: "https://chat.openai.com",
      presentationPoints: [
        "Montrer la différence entre GPT-3.5 et GPT-4",
        "Démontrer l'importance des prompts précis",
        "Expliquer les limites et l'importance de la vérification"
      ],
      demoScenarios: [
        {
          title: "Aide à la rédaction",
          prompt: "Peux-tu m'aider à structurer une dissertation sur [sujet] ?",
          keyPoints: ["Montrer comment l'IA aide à organiser les idées", "Insister sur la nécessité de reformuler"]
        },
        {
          title: "Explication de concept",
          prompt: "Explique-moi le concept de [concept] comme si j'avais 15 ans",
          keyPoints: ["Montrer l'adaptation du niveau", "Insister sur la clarté des explications"]
        }
      ],
      faq: [
        {
          question: "Est-ce que ChatGPT peut faire mon travail à ma place ?",
          answer: "Non, ChatGPT est un outil d'aide qui doit être utilisé de manière éthique. Il peut vous assister dans votre travail mais ne doit pas le remplacer."
        },
        {
          question: "Comment savoir si les informations sont fiables ?",
          answer: "Toujours vérifier les informations fournies par ChatGPT avec des sources fiables. L'IA peut parfois faire des erreurs ou fournir des informations obsolètes."
        }
      ],
      difficulty: {
        level: "Débutant",
        learningTime: "30 minutes pour les bases",
        learningCurve: "Courbe d'apprentissage rapide, maîtrise progressive des prompts"
      },
      alternatives: [
        {
          name: "Claude",
          comparison: "Plus précis mais moins accessible, meilleur pour l'analyse"
        },
        {
          name: "Bard",
          comparison: "Meilleur accès à l'information en temps réel, moins bon pour la créativité"
        }
      ],
      learningResources: [
        {
          type: "Tutoriel officiel",
          link: "https://platform.openai.com/docs/guides/gpt-best-practices",
          description: "Guide des meilleures pratiques pour les prompts"
        },
        {
          type: "YouTube",
          link: "https://www.youtube.com/watch?v=MxvWGMPJnfQ",
          description: "Tutoriel complet sur l'utilisation de ChatGPT"
        },
        {
          type: "Communauté",
          link: "https://www.reddit.com/r/ChatGPT/",
          description: "Subreddit actif avec astuces et exemples"
        }
      ],
      tips: [
        "Utiliser des prompts spécifiques et détaillés",
        "Diviser les questions complexes en sous-questions",
        "Demander des exemples concrets",
        "Utiliser le mode 'Continue' pour les réponses longues"
      ],
      integrations: [
        {
          name: "Notion",
          description: "Extension pour intégrer ChatGPT directement dans Notion",
          link: "https://www.notion.so/chatgpt"
        },
        {
          name: "Google Docs",
          description: "Add-ons pour utiliser ChatGPT dans Google Docs/Sheets/Forms/etc.",
          link: "https://workspace.google.com/marketplace/search/chatgpt"
        }
      ]
    },
    {
      id: 2,
      name: "Perplexity AI",
      category: "Recherche & Documentation",
      description: "Assistant de recherche avec citations de sources fiables pour la recherche documentaire",
      video: {
        type: "video",
        url: "videos/perplexity-demo.mp4",
        alt: "Démonstration de l'outil"
      },
      useCases: ["Recherche académique avec sources", "Vérification d'informations", "Synthèse de sujets complexes"],
      advantages: ["Sources citées", "Informations actualisées", "Synthèse intelligente"],
      icon: "🔍",
      link: "https://www.perplexity.ai",
      presentationPoints: [
        "Montrer la différence avec ChatGPT (sources citées)",
        "Démontrer la recherche en temps réel",
        "Expliquer l'importance des sources fiables"
      ],
      demoScenarios: [
        {
          title: "Recherche documentée",
          prompt: "Quelles sont les dernières avancées en [domaine] ?",
          keyPoints: ["Montrer les sources citées", "Expliquer comment vérifier les sources"]
        }
      ],
      faq: [
        {
          question: "Comment Perplexity trouve-t-il ses sources ?",
          answer: "Perplexity utilise le web en temps réel et cite ses sources, ce qui permet de vérifier l'information et d'approfondir le sujet."
        }
      ],
      difficulty: {
        level: "Débutant",
        learningTime: "15 minutes pour les bases",
        learningCurve: "Interface intuitive, maîtrise rapide des fonctionnalités de recherche"
      },
      alternatives: [
        {
          name: "Google Scholar",
          comparison: "Plus académique mais moins interactif, meilleur pour les articles scientifiques"
        },
        {
          name: "Elicit",
          comparison: "Spécialisé dans la recherche académique, plus technique"
        }
      ],
      learningResources: [
        {
          type: "YouTube",
          link: "https://www.youtube.com/watch?v=pzpwKiguRmU",
          description: "Tutoriel sur l'utilisation de Perplexity pour la recherche"
        }
      ],
      tips: [
        "Utiliser des questions précises pour des réponses plus ciblées",
        "Vérifier les dates des sources citées",
        "Croiser les informations entre plusieurs sources",
        "Utiliser les filtres de recherche pour affiner les résultats"
      ]
    },
    {
      id: 3,
      name: "StudyFetch",
      category: "Apprentissage & Révision",
      description: "Génération automatique de fiches de révision et quiz à partir de documents",
      video: {
        type: "video",
        url: "videos/studyfetch-demo.mp4",
        alt: "Démonstration de l'outil"
      },
      useCases: ["Création de fiches de révision", "Génération de quiz", "Synthèse de cours"],
      advantages: ["Automatisation des révisions", "Quiz interactifs", "Gain de temps"],
      icon: "📚",
      link: "https://www.studyfetch.com",
      presentationPoints: [
        "Montrer comment importer des documents",
        "Démontrer la génération de fiches",
        "Expliquer l'utilité des quiz générés"
      ],
      demoScenarios: [
        {
          title: "Création de fiche de révision",
          prompt: "Importer un document de cours et générer une fiche de révision",
          keyPoints: ["Montrer l'import de document", "Expliquer la structure de la fiche générée"]
        },
        {
          title: "Génération de quiz",
          prompt: "Créer un quiz à partir d'un document",
          keyPoints: ["Montrer les différents types de questions", "Expliquer l'utilité pour les révisions"]
        }
      ],
      faq: [
        {
          question: "Est-ce que les fiches générées sont fiables ?",
          answer: "Les fiches sont générées à partir de vos documents, mais il est important de les relire et de les compléter si nécessaire."
        },
        {
          question: "Quels types de documents peuvent être importés ?",
          answer: "StudyFetch accepte les PDF, les documents Word, et les textes. La qualité de la génération dépend de la clarté du document source."
        }
      ],
      difficulty: {
        level: "Débutant",
        learningTime: "20 minutes pour les bases",
        learningCurve: "Interface simple, focus sur la qualité des documents importés"
      },
      alternatives: [
        {
          name: "Quizlet",
          comparison: "Plus de fonctionnalités sociales, moins de génération automatique"
        },
        {
          name: "Anki",
          comparison: "Plus puissant pour la mémorisation, moins intuitif"
        }
      ],
      learningResources: [
        {
          type: "Tutoriel",
          link: "https://www.studyfetch.com/tutorial",
          description: "Guide de démarrage rapide"
        },
        {
          type: "Blog",
          link: "https://www.studyfetch.com/blog",
          description: "Conseils pour optimiser vos révisions"
        }
      ],
      tips: [
        "Préparer des documents bien structurés pour de meilleurs résultats",
        "Personnaliser les fiches générées",
        "Utiliser les quiz pour tester sa compréhension",
        "Combiner avec d'autres méthodes de révision"
      ]
    },
    {
      id: 4,
      name: "NotebookLM",
      category: "Productivité",
      description: "Assistant IA Google pour organiser et synthétiser les notes de cours",
      video: {
        type: "video",
        url: "videos/notebooklm-demo.mp4",
        alt: "Démonstration de l'outil"
      },
      useCases: ["Organisation des notes", "Synthèse de documents", "Création de résumés"],
      advantages: ["Intégration Google", "Organisation intelligente", "Synthèse automatique"],
      icon: "📝",
      link: "https://notebooklm.google.com",
      presentationPoints: [
        "Montrer l'intégration avec Google Drive",
        "Démontrer la synthèse de documents",
        "Expliquer l'organisation intelligente des notes"
      ],
      demoScenarios: [
        {
          title: "Synthèse de documents",
          prompt: "Synthétiser les points clés de plusieurs documents",
          keyPoints: ["Montrer l'import multiple", "Expliquer la synthèse intelligente"]
        },
        {
          title: "Organisation de notes",
          prompt: "Organiser mes notes par thème",
          keyPoints: ["Montrer l'organisation automatique", "Expliquer la navigation"]
        }
      ],
      faq: [
        {
          question: "Est-ce que mes documents sont sécurisés ?",
          answer: "Oui, NotebookLM est un produit Google et respecte les standards de sécurité de Google. Vos documents restent dans votre Google Drive."
        },
        {
          question: "Comment l'IA comprend-elle le contexte de mes notes ?",
          answer: "L'IA analyse le contenu de vos documents et crée des connexions entre les différentes notes pour une meilleure compréhension du contexte."
        }
      ],
      difficulty: {
        level: "Intermédiaire",
        learningTime: "45 minutes pour les bases",
        learningCurve: "Interface Google familière, apprentissage des fonctionnalités avancées"
      },
      alternatives: [
        {
          name: "Obsidian",
          comparison: "Plus de fonctionnalités de liens, moins d'IA"
        },
        {
          name: "Notion",
          comparison: "Plus de fonctionnalités de collaboration, moins de synthèse automatique"
        }
      ],
      learningResources: [
        {
          type: "YouTube",
          link: "https://www.youtube.com/watch?v=YmgKqTFhZ5k",
          description: "Tutoriel sur l'utilisation de NotebookLM"
        }
      ],
      tips: [
        "Organiser les documents par projet ou matière",
        "Utiliser les tags pour une meilleure organisation",
        "Exploiter les connexions automatiques entre les notes",
        "Personnaliser les synthèses générées"
      ]
    },
    {
      id: 5,
      name: "Lingua",
      category: "Apprentissage & Langues",
      description: "Assistant IA pour l'apprentissage des langues, traduction contextuelle et exercices personnalisés",
      video: {
        type: "video",
        url: "videos/lingua-demo.mp4",
        alt: "Démonstration de l'outil"
      },
      useCases: ["Apprentissage des langues", "Traduction contextuelle", "Exercices personnalisés", "Préparation aux examens de langues"],
      advantages: ["Gratuit", "IA intégrée", "Exercices personnalisés", "Support multilingue"],
      icon: "🗣️",
      link: "https://lingua.com",
      presentationPoints: [
        "Montrer l'apprentissage personnalisé",
        "Démontrer la traduction contextuelle",
        "Expliquer les exercices adaptatifs"
      ],
      demoScenarios: [
        {
          title: "Apprentissage personnalisé",
          prompt: "Créer un plan d'apprentissage personnalisé",
          keyPoints: ["Montrer l'adaptation au niveau", "Expliquer la progression"]
        },
        {
          title: "Traduction contextuelle",
          prompt: "Traduire un texte avec contexte",
          keyPoints: ["Montrer la précision contextuelle", "Expliquer les alternatives"]
        }
      ],
      faq: [
        {
          question: "Peut-on personnaliser les présentations générées ?",
          answer: "Oui, vous pouvez modifier tous les éléments de la présentation après sa génération, y compris le texte, les images et le style."
        },
        {
          question: "Combien de langues sont supportées ?",
          answer: "Lingua supporte plus de 20 langues avec des exercices adaptatifs et une traduction contextuelle précise."
        }
      ],
      difficulty: {
        level: "Débutant",
        learningTime: "25 minutes pour les bases",
        learningCurve: "Interface intuitive, focus sur la personnalisation"
      },
      alternatives: [
        {
          name: "Duolingo",
          comparison: "Plus de gamification, moins d'IA personnalisée"
        },
        {
          name: "Babbel",
          comparison: "Plus de cours structurés, moins d'adaptation automatique"
        }
      ],
      tips: [
        "Définir ses objectifs d'apprentissage",
        "Pratiquer régulièrement avec l'IA",
        "Utiliser la traduction contextuelle",
        "Suivre sa progression personnalisée"
      ]
    },
    {
      id: 6,
      name: "LanguageTool",
      category: "Rédaction & Correction",
      description: "Correcteur orthographique et grammatical gratuit, excellent support du français et style",
      video: {
        type: "video",
        url: "videos/languagetool-demo.mp4",
        alt: "Démonstration de l'outil"
      },
      useCases: ["Correction de mémoires", "Amélioration du style", "Vérification orthographique"],
      advantages: ["Gratuit", "Support multilingue", "Extensions navigateurs et suites bureautiques"],
      icon: "✏️",
      link: "https://languagetool.org/fr/",
      presentationPoints: [
        "Montrer la correction en temps réel dans le navigateur",
        "Démontrer les suggestions de style et de ton",
        "Expliquer l'intégration Google Docs et Word"
      ],
      demoScenarios: [
        {
          title: "Correction de texte",
          prompt: "Corriger un texte universitaire avec des erreurs",
          keyPoints: ["Afficher les fautes détectées", "Montrer les reformulations proposées"]
        },
        {
          title: "Amélioration de style",
          prompt: "Rendre un paragraphe plus fluide et concis",
          keyPoints: ["Mettre en avant le style", "Comparer avant/après"]
        }
      ],
      faq: [
        {
          question: "LanguageTool est-il gratuit ?",
          answer: "Oui, LanguageTool est gratuit pour la majorité des usages. Une version premium existe pour des suggestions avancées."
        },
        {
          question: "Fonctionne-t-il bien en français ?",
          answer: "Oui, le français est très bien supporté avec grammaire, orthographe et style."
        }
      ],
      difficulty: {
        level: "Débutant",
        learningTime: "10 minutes pour les bases",
        learningCurve: "Interface intuitive, prise en main rapide"
      },
      alternatives: [
        {
          name: "Antidote",
          comparison: "Plus de ressources linguistiques, mais payant"
        },
        {
          name: "ProWritingAid",
          comparison: "Analyses détaillées, interface en anglais"
        }
      ],
      learningResources: [
        {
          type: "Guide",
          link: "https://dev.languagetool.org",
          description: "Guide et documentation LanguageTool"
        },
      ],
      tips: [
        "Activer l'extension navigateur pour corriger partout",
        "Choisir la variante de français (FR/CA/BE)",
        "Utiliser le mode formel selon le contexte",
        "Relire malgré tout les textes importants"
      ]
    },
    {
      id: 7,
      name: "ChatPDF",
      category: "Recherche & Documentation", 
      description: "Chatbot IA pour résumer et analyser des documents PDF",
      video: {
        type: "video",
        url: "videos/chatpdf-demo.mp4",
        alt: "Démonstration de l'outil"
      },
      useCases: ["Résumé d'articles scientifiques", "Analyse de documents longs", "Questions sur le contenu"],
      advantages: ["Analyse de PDF", "Résumés intelligents", "Questions-réponses"],
      icon: "📄",
      link: "https://www.chatpdf.com",
      presentationPoints: [
        "Montrer l'analyse de PDF",
        "Démontrer les résumés automatiques",
        "Expliquer le système de questions-réponses"
      ],
      demoScenarios: [
        {
          title: "Résumé de document",
          prompt: "Résumer un article scientifique",
          keyPoints: ["Montrer l'import de PDF", "Expliquer le résumé généré"]
        },
        {
          title: "Questions sur le document",
          prompt: "Poser des questions sur le contenu",
          keyPoints: ["Montrer les questions-réponses", "Expliquer la précision"]
        }
      ],
      faq: [
        {
          question: "Quels types de PDF peuvent être analysés ?",
          answer: "ChatPDF peut analyser la plupart des PDF, mais la qualité de l'analyse dépend de la clarté du texte et de la structure du document."
        },
        {
          question: "Est-ce que les résumés sont fiables ?",
          answer: "Les résumés sont générés automatiquement et doivent être vérifiés. Ils sont utiles comme point de départ pour comprendre un document."
        }
      ],
      difficulty: {
        level: "Débutant",
        learningTime: "20 minutes pour les bases",
        learningCurve: "Interface simple, focus sur la qualité des PDF"
      },
      alternatives: [
        {
          name: "Adobe Acrobat",
          comparison: "Plus de fonctionnalités d'édition, moins d'IA"
        },
        {
          name: "ChatPDF",
          comparison: "Similaire, interface différente"
        }
      ],
      tips: [
        "Utiliser des PDF de bonne qualité",
        "Vérifier les résumés générés",
        "Poser des questions précises",
        "Utiliser les fonctionnalités de recherche"
      ]
    },
    {
      id: 8,
      name: "WolframAlpha",
      category: "Outils Spécialisés",
      description: "Résolution de problèmes mathématiques et scientifiques",
      video: {
        type: "video",
        url: "videos/wolfram-demo.mp4",
        alt: "Démonstration de l'outil"
      },
      useCases: ["Calculs mathématiques", "Résolution d'équations", "Graphiques scientifiques"],
      advantages: ["Calculs précis", "Visualisations", "Explications étape par étape"],
      icon: "🧮",
      link: "https://www.wolframalpha.com",
      presentationPoints: [
        "Montrer les calculs mathématiques",
        "Démontrer les visualisations",
        "Expliquer les explications détaillées"
      ],
      demoScenarios: [
        {
          title: "Résolution d'équation",
          prompt: "Résoudre une équation complexe",
          keyPoints: ["Montrer la résolution", "Expliquer les étapes"]
        },
        {
          title: "Création de graphique",
          prompt: "Créer un graphique de fonction",
          keyPoints: ["Montrer la visualisation", "Expliquer les options"]
        }
      ],
      faq: [
        {
          question: "Est-ce que WolframAlpha peut résoudre n'importe quelle équation ?",
          answer: "WolframAlpha peut résoudre une grande variété d'équations, mais certaines équations très complexes peuvent nécessiter des approches spécifiques."
        },
        {
          question: "Comment utiliser WolframAlpha pour l'apprentissage ?",
          answer: "WolframAlpha est excellent pour comprendre les étapes de résolution et visualiser les concepts mathématiques."
        }
      ],
      difficulty: {
        level: "Intermédiaire",
        learningTime: "1 heure pour les bases",
        learningCurve: "Interface technique, apprentissage de la syntaxe"
      },
      alternatives: [
        {
          name: "Desmos",
          comparison: "Plus intuitif pour les graphiques, moins de calculs avancés"
        },
        {
          name: "Symbolab",
          comparison: "Plus d'explications détaillées, moins de visualisations"
        }
      ],
      learningResources: [
        {
          type: "Guide",
          link: "https://www.wolframalpha.com/tour",
          description: "Guide d'utilisation de WolframAlpha"
        },
        {
          type: "Exemples",
          link: "https://www.wolframalpha.com/examples",
          description: "Exemples de requêtes"
        }
      ],
      tips: [
        "Apprendre la syntaxe de base",
        "Utiliser les exemples fournis",
        "Exploiter les visualisations",
        "Vérifier les étapes de résolution"
      ],
    },
    {
      id: 9,
      name: "DeepL",
      category: "Outils Spécialisés",
      description: "Traduction de haute qualité en 29 langues",
      video: {
        type: "video",
        url: "videos/deepl-demo.mp4",
        alt: "Démonstration de l'outil"
      },
      useCases: ["Traduction d'articles", "Compréhension de textes étrangers", "Rédaction multilingue"],
      advantages: ["Traduction précise", "29 langues", "Préservation du contexte"],
      icon: "🌐",
      link: "https://www.deepl.com",
      presentationPoints: [
        "Montrer la qualité de traduction",
        "Démontrer la préservation du contexte",
        "Expliquer les différentes options de traduction"
      ],
      demoScenarios: [
        {
          title: "Traduction de texte",
          prompt: "Traduire un texte académique",
          keyPoints: ["Montrer la précision", "Expliquer les alternatives"]
        },
        {
          title: "Traduction de document",
          prompt: "Traduire un document complet",
          keyPoints: ["Montrer l'import de document", "Expliquer les options de format"]
        }
      ],
      faq: [
        {
          question: "Est-ce que DeepL est meilleur que Google Translate ?",
          answer: "DeepL est souvent plus précis pour les textes techniques et académiques, particulièrement pour les paires de langues européennes."
        },
        {
          question: "Comment DeepL préserve-t-il le contexte ?",
          answer: "DeepL utilise un réseau de neurones qui analyse le texte dans son ensemble, permettant de maintenir la cohérence et le style du texte original."
        }
      ],
      difficulty: {
        level: "Débutant",
        learningTime: "10 minutes pour les bases",
        learningCurve: "Interface très intuitive, apprentissage des fonctionnalités avancées"
      },
      alternatives: [
        {
          name: "Google Translate",
          comparison: "Plus de langues, moins précis pour les textes techniques"
        },
        {
          name: "Reverso",
          comparison: "Plus de contextes d'utilisation, moins de fonctionnalités avancées"
        }
      ],
      learningResources: [
        {
          type: "Blog",
          link: "https://www.deepl.com/blog",
          description: "Conseils de traduction"
        }
      ],
      tips: [
        "Utiliser le mode formel pour les textes académiques",
        "Vérifier les alternatives proposées",
        "Utiliser le glossaire personnalisé",
        "Traduire par paragraphes pour plus de cohérence"
      ],
      integrations: [
        {
          name: "Desktop App",
          description: "Application de bureau pour traductions rapides",
          link: "https://www.deepl.com/app"
        }
      ]
    }
  ]
};


// ========== État de l'application ==========
let appState = {
  currentSection: 'home',
  currentTool: null,
  demoMode: false,
  filteredTools: [...appData.tools]
};

// ========== Fonctions utilitaires ==========
function showSection(sectionName) {
  // Cacher toutes les sections
  const sections = ['home', 'tools'];
  sections.forEach(section => {
    const element = document.getElementById(section);
    if (element) {
      element.classList.add('hidden');
    }
  });

  // Afficher la section demandée
  const targetSection = document.getElementById(sectionName);
  if (targetSection) {
    targetSection.classList.remove('hidden');
    targetSection.classList.add('fade-in');
    appState.currentSection = sectionName;
  }

  // Mettre à jour l'URL sans recharger la page
  window.history.pushState({section: sectionName}, '', `#${sectionName}`);
}

function incrementView(toolId) {
  if (!appState.views) appState.views = {};
  if (!appState.views[toolId]) {
    appState.views[toolId] = 0;
  }
  appState.views[toolId]++;
  saveViews();
}

function getViewCount(toolId) {
  if (!appState.views) return 0;
  return appState.views[toolId] || 0;
}

function isFavorite(toolId) {
  return appState.favorites.includes(toolId);
}

function toggleFavorite() {
  if (!appState.currentTool) return;
  const toolId = appState.currentTool.id;
  const favoriteIndex = appState.favorites.indexOf(toolId);
  if (favoriteIndex === -1) {
    appState.favorites.push(toolId);
  } else {
    appState.favorites.splice(favoriteIndex, 1);
  }
  saveFavorites();
  updateFavoriteButton();
  renderTools();
}

function updateFavoriteButton() {
  const favoriteText = document.getElementById('favoriteText');
  if (favoriteText && appState.currentTool) {
    const isCurrentFavorite = isFavorite(appState.currentTool.id);
    favoriteText.textContent = isCurrentFavorite ? '💔 Retirer des favoris' : '❤️ Ajouter aux favoris';
  }
}

// ========== Rendu des outils ==========
function renderTools(tools = appState.filteredTools) {
  const toolsGrid = document.getElementById('toolsGrid');
  if (!toolsGrid) return;

  toolsGrid.innerHTML = '';

  tools.forEach(tool => {
    const toolCard = createToolCard(tool);
    toolsGrid.appendChild(toolCard);
  });
}

function createToolCard(tool) {
  const card = document.createElement('div');
  card.className = 'card tool-card';
  card.onclick = () => openToolModal(tool);

  // Badge favoris et vues
  const isFav = isFavorite(tool.id);
  const views = getViewCount(tool.id);

  card.innerHTML = `
    <div class="card__body tool-card__body">
      <div class="tool-header">
        <div class="tool-icon">${tool.icon}</div>
        <h3 class="tool-name">${tool.name}</h3>
      </div>
      <div class="tool-category">${tool.category}</div>
      <p class="tool-description">${tool.description}</p>
      <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
        <span class="badge badge--views">${views} vues</span>
        ${isFav ? '<span class="badge badge--favorite">❤️ Favori</span>' : ''}
      </div>
      <div style="margin-top: auto;">
        <button class="btn btn--primary btn--sm tool-btn">Découvrir</button>
      </div>
    </div>
  `;

  return card;
}

// ========== Modal des outils ==========
function openToolModal(tool) {
  const modal = document.getElementById('toolModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalIcon = document.getElementById('modalIcon');
  const modalCategory = document.getElementById('modalCategory');
  const modalDescription = document.getElementById('modalDescription');
  const modalVideo = document.getElementById('modalVideo');
  const modalLink = document.getElementById('modalLink');
  const modalContent = modal.querySelector('.modal-content');
  const modalViews = document.getElementById('modalViews');
  const favoriteText = document.getElementById('favoriteText');

  // Clear previous content
  modalVideo.innerHTML = '';

  // Set basic information
  modalTitle.textContent = tool.name;
  modalIcon.textContent = tool.icon;
  modalCategory.textContent = tool.category;
  // Texte de présentation orienté découverte
  modalDescription.innerHTML = `<strong>Découvre ${tool.name}</strong> : ${tool.description}<br><em>Un outil IA pensé pour les étudiants, afin de faciliter : ${tool.useCases.join(', ')}.</em>`;
  modalLink.href = tool.link;

  // Compteur de vues
  incrementView(tool.id);
  modalViews.textContent = `${getViewCount(tool.id)} vues`;

  // Favoris
  appState.currentTool = tool;
  updateFavoriteButton();

  // Handle video/gif if present
  if (tool.video) {
    if (tool.video.type === 'video') {
      if (tool.video.url.startsWith('http')) {
        // YouTube video
        const iframe = document.createElement('iframe');
        iframe.src = tool.video.url + '?autoplay=1&loop=1&playlist=' + tool.video.url.split('/').pop() + '&controls=0';
        iframe.width = '100%';
        iframe.height = '315';
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        iframe.className = 'demo-video';
        modalVideo.appendChild(iframe);
      } else {
        // Local video
        const video = document.createElement('video');
        video.src = tool.video.url;
        video.className = 'demo-video';
        video.alt = tool.video.alt;
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        modalVideo.appendChild(video);

        // S'assurer que la vidéo démarre
        video.play().catch(function(error) {
          console.log("Lecture automatique impossible:", error);
        });
      }
    } else if (tool.video.type === 'gif') {
      const img = document.createElement('img');
      img.src = tool.video.url;
      img.alt = tool.video.alt;
      modalVideo.appendChild(img);
    }
  }

  // Cas d'usage
  const useCasesList = document.getElementById('modalUseCases');
  useCasesList.innerHTML = '';
  tool.useCases.forEach(useCase => {
    const li = document.createElement('li');
    li.textContent = useCase;
    useCasesList.appendChild(li);
  });

  // Avantages
  const advantagesList = document.getElementById('modalAdvantages');
  advantagesList.innerHTML = '';
  tool.advantages.forEach(advantage => {
    const li = document.createElement('li');
    li.textContent = advantage;
    advantagesList.appendChild(li);
  });

  // Points forts de l'outil (anciennement Points à présenter)
  const presentationList = document.getElementById('modalPresentation');
  if (presentationList) {
    presentationList.innerHTML = '';
    tool.presentationPoints.forEach(point => {
      const li = document.createElement('li');
      li.textContent = `• ${point}`;
      presentationList.appendChild(li);
    });
  }

  // Exemples d'utilisation concrets (anciennement Scénarios de démo)
  const demoList = document.getElementById('modalDemo');
  if (demoList) {
    demoList.innerHTML = '';
    tool.demoScenarios.forEach(scenario => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>Exemple : ${scenario.title}</strong> — <em>${scenario.prompt}</em><br>Points clés : ${scenario.keyPoints.join(', ')}`;
      demoList.appendChild(li);
    });
  }

  // FAQ
  const faqList = document.getElementById('modalFaq');
  if (faqList) {
    faqList.innerHTML = '';
    tool.faq.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>Q: ${item.question}</strong><br>
        R: ${item.answer}
      `;
      faqList.appendChild(li);
    });
  }

  // Niveau de difficulté
  const difficultyDiv = document.getElementById('modalDifficulty');
  if (difficultyDiv && tool.difficulty) {
    difficultyDiv.innerHTML = `
      <p><strong>Niveau:</strong> ${tool.difficulty.level}</p>
      <p><strong>Temps d'apprentissage:</strong> ${tool.difficulty.learningTime}</p>
      <p><strong>Courbe d'apprentissage:</strong> ${tool.difficulty.learningCurve}</p>
    `;
  }

  // Alternatives
  const alternativesList = document.getElementById('modalAlternatives');
  if (alternativesList && tool.alternatives) {
    alternativesList.innerHTML = '';
    tool.alternatives.forEach(alt => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${alt.name}:</strong> ${alt.comparison}`;
      alternativesList.appendChild(li);
    });
  }

  // Ressources d'apprentissage
  const resourcesList = document.getElementById('modalLearningResources');
  if (resourcesList) {
    if (tool.learningResources && tool.learningResources.length) {
      resourcesList.innerHTML = '';
      tool.learningResources.forEach(resource => {
        const li = document.createElement('li');
        li.innerHTML = `
          <strong>${resource.type}:</strong> 
          <a href="${resource.link}" target="_blank">${resource.description}</a>
        `;
        resourcesList.appendChild(li);
      });
    } else {
      resourcesList.innerHTML = '<li>Désolé, nous n\'avons pas trouvé de ressources pour cet outil.</li>';
    }
  }

  // Conseils d'utilisation
  const tipsList = document.getElementById('modalTips');
  if (tipsList && tool.tips) {
    tipsList.innerHTML = '';
    tool.tips.forEach(tip => {
      const li = document.createElement('li');
      li.textContent = tip;
      tipsList.appendChild(li);
    });
  }

  // Intégrations
  const integrationsList = document.getElementById('modalIntegrations');
  if (integrationsList) {
    if (tool.integrations && tool.integrations.length) {
      integrationsList.innerHTML = '';
      tool.integrations.forEach(integration => {
        const li = document.createElement('li');
        li.innerHTML = `
          <strong>${integration.name}:</strong> 
          ${integration.description}
          <a href="${integration.link}" target="_blank">Voir l'extension</a>
        `;
        integrationsList.appendChild(li);
      });
    } else {
      integrationsList.innerHTML = '<li>Désolé, nous n\'avons pas trouvé d\'intégrations pour cet outil.</li>';
    }
  }

  // Afficher le modal
  modal.classList.remove('hidden');
  modal.classList.add('fade-in');

  // Scroll le contenu du modal vers le haut
  modalContent.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function closeModal() {
  const modal = document.getElementById('toolModal');
  modal.classList.remove('fade-in');
  modal.classList.add('fade-out');
  
  // Attendre la fin de l'animation avant de cacher le modal
  setTimeout(() => {
    modal.classList.add('hidden');
    modal.classList.remove('fade-out');
    
    // Réinitialiser le contenu du modal
    const modalVideo = document.getElementById('modalVideo');
    if (modalVideo) {
      const video = modalVideo.querySelector('video');
      const iframe = modalVideo.querySelector('iframe');
      
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
      if (iframe) {
        iframe.src = '';
      }
    }
  }, 300);
}

// ========== Système de filtrage et recherche ==========
function setupFilters() {
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');

  if (searchInput) {
    searchInput.addEventListener('input', filterTools);
  }

  if (categoryFilter) {
    categoryFilter.addEventListener('change', filterTools);
  }
}

function filterTools() {
  const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
  const selectedCategory = document.getElementById('categoryFilter')?.value || '';

  appState.filteredTools = appData.tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm) ||
                         tool.description.toLowerCase().includes(searchTerm) ||
                         tool.category.toLowerCase().includes(searchTerm);
    
    const matchesCategory = !selectedCategory || tool.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  renderTools();
}

// ========== Mode démo ==========
function toggleDemoMode() {
  appState.demoMode = !appState.demoMode;
  const demoBtn = document.getElementById('demoModeBtn');
  
  if (appState.demoMode) {
    demoBtn.textContent = 'Arrêter la démo';
    demoBtn.classList.add('btn--primary');
    demoBtn.classList.remove('btn--outline');
    startDemoTour();
  } else {
    demoBtn.textContent = 'Mode Démo';
    demoBtn.classList.add('btn--outline');
    demoBtn.classList.remove('btn--primary');
    stopDemoTour();
  }
}

function startDemoTour() {
  showSection('tools');
  
  // Simuler une recherche après 2 secondes
  setTimeout(() => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.value = 'ChatGPT';
      filterTools();
      
      // Ouvrir le modal du premier outil après 1 seconde
      setTimeout(() => {
        const firstTool = appState.filteredTools[0];
        if (firstTool) {
          openToolModal(firstTool);
        }
      }, 1000);
    }
  }, 2000);
}

function stopDemoTour() {
  closeModal();
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');
  
  if (searchInput) searchInput.value = '';
  if (categoryFilter) categoryFilter.value = '';
  
  filterTools();
}

// ========== Gestion des événements ==========
function setupEventListeners() {
  // Bouton principal "Découvrir les outils"
  const discoverBtn = document.querySelector('.discover-btn');
  if (discoverBtn) {
    discoverBtn.addEventListener('click', () => showSection('tools'));
  }

  // Mode démo
  const demoBtn = document.getElementById('demoModeBtn');
  if (demoBtn) {
    demoBtn.addEventListener('click', toggleDemoMode);
  }

  // Fermeture du modal avec Échap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  // Gestion des liens de navigation dans l'URL
  window.addEventListener('popstate', (e) => {
    if (e.state && e.state.section) {
      showSection(e.state.section);
    }
  });
}

// ========== Initialisation de l'application ==========
function initApp() {
  loadPersistedState();
  console.log('🚀 Initialisation de l\'application IA & Études');
  // Configuration initiale basée sur l'URL
  const hash = window.location.hash.substring(1);
  if (hash && ['home', 'tools'].includes(hash)) {
    showSection(hash);
  } else {
    showSection('home');
  }
  // Rendu initial des outils
  renderTools();
  // Configuration des filtres
  setupFilters();
  // Configuration des événements
  setupEventListeners();
  console.log('✅ Application initialisée avec succès');
  console.log(`📊 ${appData.tools.length} outils chargés`);
}

// ========== Fonctions globales pour l'HTML ==========
// Ces fonctions doivent être accessibles depuis l'HTML
window.showSection = showSection;
window.closeModal = closeModal;
window.toggleFavorite = toggleFavorite;

// ========== Démarrage de l'application ==========
document.addEventListener('DOMContentLoaded', initApp);

// ========== Utilitaires de développement ==========
if (typeof window !== 'undefined') {
  // Exposition de certaines données pour le debugging
  window.appDebug = {
    state: appState,
    data: appData,
    showSection,
    openToolModal,
    filterTools
  };
}

// Fonction pour redémarrer une vidéo
function restartVideo(videoElement) {
    if (videoElement) {
        videoElement.currentTime = 0;
        videoElement.play().catch(function(error) {
            console.log("Redémarrage de la vidéo impossible:", error);
        });
    }
}

// Fonction pour redémarrer une vidéo YouTube
function restartYouTubeVideo(iframe) {
    if (iframe) {
        const currentSrc = iframe.src;
        iframe.src = currentSrc;
    }
}

// Persistance des vues et favoris dans localStorage
function loadPersistedState() {
  const views = localStorage.getItem('toolViews');
  const favorites = localStorage.getItem('toolFavorites');
  appState.views = views ? JSON.parse(views) : {};
  appState.favorites = favorites ? JSON.parse(favorites) : [];
}

function saveViews() {
  localStorage.setItem('toolViews', JSON.stringify(appState.views));
}

function saveFavorites() {
  localStorage.setItem('toolFavorites', JSON.stringify(appState.favorites));
}