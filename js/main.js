// Preuves réutilisées par les modales du tableau de compétences.
const evidenceMap = {
  patrimoine: {
    title: "Recensement des ressources numériques",
    project: "AP Armée / M2L",
    description: "Les ressources ont été identifiées à travers les bases de données, les entités métier et l'organisation des dépôts GitHub. Le MCD AP Armée et le script m2l.sql structurent clairement les informations manipulées.",
    proof: "Schéma relationnel AP Armée, script SQL M2L, dossiers contrôleur / modèle / vue.",
    image: "assets/img/armee-01.png",
    caption: "Modèle de données du projet AP Armée."
  },
  standards: {
    title: "Exploitation de standards applicatifs",
    project: "M2L / AP Armée",
    description: "Les projets s'appuient sur une organisation MVC, une couche DAO pour l'accès aux données, des DTO pour les objets métier et des endpoints REST JSON pour l'API.",
    proof: "Architecture MVC, contrôleurs PHP, DAO, routes REST et réponses JSON.",
    image: "assets/img/m2l-01.png",
    caption: "Interface M2L alimentée par les données MySQL."
  },
  habilitations: {
    title: "Niveaux d'habilitation et authentification",
    project: "AP Armée / M2L",
    description: "AP Armée protège ses routes avec un token Bearer JWT. M2L distingue les profils utilisateur pour afficher les fonctionnalités adaptées aux secrétaires, salariés et responsables.",
    proof: "Classe Token, vérification du header Authorization, sessions PHP et menus conditionnels.",
    image: "assets/img/armee-auth.png",
    caption: "Test Postman d'une route protégée avec authentification Bearer."
  },
  securite: {
    title: "Respect des règles d'utilisation",
    project: "AP Armée",
    description: "Les routes sensibles vérifient la présence et la validité du jeton avant d'autoriser l'accès. Les mots de passe sont hachés lors de l'inscription.",
    proof: "Token JWT, password_hash, password_verify, contrôle des erreurs HTTP.",
    image: "assets/img/armee-register.png",
    caption: "Inscription d'un utilisateur via l'API."
  },
  evolutions: {
    title: "Traitement de demandes applicatives",
    project: "M2L",
    description: "Le projet M2L ajoute des fonctionnalités de gestion des ligues, clubs et formations à partir d'un site initialement statique.",
    proof: "Contrôleurs dédiés, formulaires de création/modification et DAO associés.",
    image: "assets/img/m2l-03.png",
    caption: "Écran applicatif M2L issu des captures de réalisation."
  },
  presence: {
    title: "Évolution d'un site web dynamique",
    project: "M2L",
    description: "La présence en ligne de l'organisation est améliorée par un site dynamique exploitant les données MySQL pour afficher les ligues, clubs, locaux, services et formations.",
    proof: "Pages PHP, vues M2L, navigation et affichage des données de ligue.",
    image: "assets/img/m2l-01.png",
    caption: "Affichage des ligues et clubs dans l'application M2L."
  },
  projet: {
    title: "Analyse des objectifs projet",
    project: "Fiches E6",
    description: "Les fiches descriptives précisent le contexte, les ressources fournies, les résultats attendus et les modalités de réalisation pour M2L et AP Armée.",
    proof: "Fiches descriptives BTS 2026, objectifs, ressources et résultats attendus.",
    image: "assets/img/m2l-02.png",
    caption: "Capture issue de la fiche descriptive M2L."
  },
  planning: {
    title: "Planification des activités",
    project: "M2L / AP Armée",
    description: "Les deux réalisations ont été menées sur cinq semaines, avec une organisation progressive des fonctionnalités et un suivi par dépôt GitHub.",
    proof: "Période de réalisation, commits GitHub, découpage des modules.",
    image: "assets/img/m2l-04.png",
    caption: "Élément de capture M2L utilisé comme preuve de réalisation."
  },
  tests: {
    title: "Tests d'intégration et d'acceptation",
    project: "AP Armée / M2L",
    description: "Les endpoints AP Armée ont été vérifiés avec Postman. Les parcours M2L ont été validés via les interfaces de consultation, création, modification et suppression.",
    proof: "Captures Postman, réponses HTTP 200, interfaces de gestion M2L.",
    image: "assets/img/armee-auth.png",
    caption: "Réponse HTTP 200 sur une route API protégée."
  },
  deploiement: {
    title: "Mise à disposition du service",
    project: "AP Armée / M2L",
    description: "Les projets sont conçus pour un environnement local WAMP avec routage .htaccess pour l'API et publication des sources sur GitHub.",
    proof: ".htaccess, URL localhost, dépôt GitHub, WAMP / phpMyAdmin.",
    image: "assets/img/armee-register.png",
    caption: "Endpoint API accessible en local."
  },
  documentation: {
    title: "Accompagnement utilisateur",
    project: "M2L / AP Armée",
    description: "Les fiches indiquent les modalités d'accès, les identifiants de test et les routes principales nécessaires à l'utilisation des productions.",
    proof: "Fiches descriptives, identifiant secrétaire M2L, documentation des routes API.",
    image: "assets/img/m2l-06.png",
    caption: "Capture complémentaire de l'application M2L."
  },
  environnement: {
    title: "Environnement d'apprentissage",
    project: "Parcours BTS SIO",
    description: "L'environnement de travail s'appuie sur VS Code, WAMP, phpMyAdmin, Looping, GitHub et la documentation PHP/MySQL.",
    proof: "Outils listés dans les fiches descriptives et utilisés dans les projets.",
    image: "assets/img/m2l-header.jpg",
    caption: "Projet M2L exploité dans l'environnement de développement."
  },
  veille: {
    title: "Veille informationnelle",
    project: "Portfolio / Veille technologique",
    description: "La veille technologique du portfolio est maintenant structurée dans une page dédiée sur les différentes attaques informatiques: phishing, ransomware, DDoS, supply chain et zero-day.",
    proof: "Page veille.html, synthèse rédigée et sources officielles ANSSI, Cybermalveillance.gouv.fr, ENISA et CISA consultées le 19 mai 2026.",
    image: "assets/img/veille-cyber.svg",
    caption: "Visuel de la veille technologique sur les cyberattaques."
  },
  identite: {
    title: "Identité professionnelle",
    project: "Portfolio / CV / GitHub",
    description: "L'identité professionnelle est construite via le CV, les dépôts GitHub publics et ce portfolio web responsive publié dans un dépôt dédié.",
    proof: "CV intégré, profil GitHub ZaidMajd, dépôt GitHub portfolioZaid et portfolio web.",
    image: "assets/img/m2l-locaux.png",
    caption: "Ressource visuelle intégrée au portfolio."
  },
  professionnel: {
    title: "Projet professionnel",
    project: "BTS SIO SLAM",
    description: "Le parcours présente une orientation claire vers le développement applicatif, les bases de données et la conception de services web.",
    proof: "CV, projets SLAM, compétences E6, veille techno et dépôt portfolioZaid.",
    image: "assets/img/m2l-05.png",
    caption: "Preuve visuelle complémentaire extraite des ressources M2L."
  },
  "slam-dev": {
    title: "Conception et développement applicatif",
    project: "M2L / AP Armée",
    description: "Les deux projets démontrent la conception de solutions applicatives complètes: application web dynamique pour M2L et API REST pour AP Armée.",
    proof: "Contrôleurs, DAO, DTO, vues PHP, endpoints REST, captures d'interface.",
    image: "assets/img/m2l-01.png",
    caption: "Application M2L avec données dynamiques."
  },
  "slam-maintenance": {
    title: "Maintenance corrective ou évolutive",
    project: "M2L / AP Armée",
    description: "Les évolutions portent sur l'ajout de fonctionnalités métier: gestion de ligues, clubs, formations, utilisateurs, tournois, équipes et matchs.",
    proof: "CRUD, formulaires, endpoints PUT/POST/DELETE, contrôleurs spécialisés.",
    image: "assets/img/armee-auth.png",
    caption: "Test d'une route API après authentification."
  },
  "slam-data": {
    title: "Gestion des données",
    project: "M2L / AP Armée",
    description: "La donnée est modélisée, stockée et manipulée avec MySQL, PDO et des classes DAO dédiées.",
    proof: "MCD, script SQL, requêtes préparées, relations entre tables.",
    image: "assets/img/armee-01.png",
    caption: "Schéma relationnel du projet AP Armée."
  },
  "stage-patrimoine": {
    title: "Recensement et structuration des ressources",
    project: "Stage 1ère année - Directus",
    description: "Le stage s'appuie sur une modélisation claire des ressources métier: utilisateur Directus, page professionnelle, langues disponibles et traductions associées.",
    proof: "Schéma relationnel du stage et collections Directus liées entre elles.",
    image: "assets/img/stage-directus-schema.png",
    caption: "Schéma de données du projet de stage."
  },
  "stage-demandes": {
    title: "Réponse à une demande applicative",
    project: "Stage 1ère année - Directus",
    description: "La solution répond à un besoin concret de saisie et d'organisation du contenu professionnel dans Directus, avec des champs adaptés, des relations et des collections dédiées.",
    proof: "Formulaire d'édition de la page professionnelle, gestion des champs et des relations dans Directus.",
    image: "assets/img/stage-directus-edit-preview.png",
    caption: "Édition d'une fiche dans Directus avec aperçu de la page publique."
  },
  "stage-presence": {
    title: "Développement de la présence en ligne",
    project: "Stage 1ère année - Directus",
    description: "Le projet publie une page professionnelle consultable sur le web, enrichie par un sélecteur de langue et un affichage d'informations adapté aux visiteurs.",
    proof: "Page profil publique, traduction sélectionnable et affichage dynamique du métier et des informations complémentaires.",
    image: "assets/img/stage-directus-translation.png",
    caption: "Rendu public de la page professionnelle avec traduction."
  },
  "stage-projet": {
    title: "Travail en mode projet",
    project: "Stage 1ère année - Directus",
    description: "Le stage suit une progression logique: analyse du besoin, modélisation des tables, paramétrage de Directus, saisie de contenu puis validation du rendu final.",
    proof: "Étapes visibles entre le schéma de données, la configuration des collections et l'interface finale.",
    image: "assets/img/stage-directus-schema.png",
    caption: "Vue d'ensemble de la conception du projet de stage."
  },
  "stage-service": {
    title: "Mise à disposition d'un service",
    project: "Stage 1ère année - Directus",
    description: "Le service livré permet de consulter une fiche publique complète, de changer de langue et d'accéder à des contenus organisés par onglets personnalisés.",
    proof: "Page finale accessible avec traduction, navigation de retour et blocs d'onglets personnalisés.",
    image: "assets/img/stage-directus-translation.png",
    caption: "Service rendu côté utilisateur final."
  },
  "stage-pro": {
    title: "Organisation du développement professionnel",
    project: "Stage 1ère année - Directus",
    description: "Ce stage a permis de monter en compétences sur la modélisation de données, l'utilisation d'un CMS headless et l'intégration entre back-office et page web publique.",
    proof: "Prise en main de Directus, conception relationnelle et structuration d'un contenu multilingue.",
    image: "assets/img/stage-directus-onglets.png",
    caption: "Collection Directus utilisée pour gérer les onglets personnalisés."
  },
  "stage2-patrimoine": {
    title: "Recensement des ressources et des données",
    project: "Stage 2ème année - GLPI",
    description: "Le projet repose sur l'analyse des données GLPI liées aux contrats CPU, aux coûts associés, aux tickets et aux entités. Le travail de stage a demandé d'identifier les tables utiles puis de vérifier les enregistrements manipulés.",
    proof: "Requêtes SQL sur les tables de contrats GLPI, analyse des coûts et des enregistrements par contrat.",
    image: "assets/img/stage-glpi-sql.png",
    caption: "Analyse SQL des données utilisées pour le suivi contractuel dans GLPI."
  },
  "stage2-demandes": {
    title: "Réponse à une demande applicative",
    project: "Stage 2ème année - GLPI",
    description: "La personnalisation répond à un besoin concret de suivi des unités consommées depuis les tickets. Les techniciens peuvent rattacher l'intervention au bon contrat et au bon niveau directement dans l'interface de traitement.",
    proof: "Formulaire GLPI enrichi avec contrat, niveau technicien et planification de la tâche.",
    image: "assets/img/stage-glpi-ticket.png",
    caption: "Ticket GLPI utilisé pour saisir une intervention liée aux unités contractuelles."
  },
  "stage2-presence": {
    title: "Développement de la présence en ligne",
    project: "Stage 2ème année - GLPI",
    description: "Le projet améliore l'interface web interne de l'organisation avec des écrans dédiés au suivi des contrats, des reports et de l'historique des interventions. Les informations deviennent visibles et consultables dans GLPI par les équipes concernées.",
    proof: "Pages GLPI de gestion des unités, d'historique et de synthèse directement intégrées à l'application web.",
    image: "assets/img/stage-glpi-dashboard.png",
    caption: "Vue web de la synthèse de consommation dans GLPI."
  },
  "stage2-projet": {
    title: "Travail en mode projet",
    project: "Stage 2ème année - GLPI",
    description: "Le stage a suivi une progression logique entre compréhension du besoin, analyse des données existantes, adaptation des écrans GLPI et validation du parcours complet entre ticket, historique et contrat.",
    proof: "Chaîne fonctionnelle visible entre la saisie dans le ticket, l'historique des unités et le tableau de bord contrat.",
    image: "assets/img/stage-glpi-history.png",
    caption: "Historique des unités utilisé pour suivre les interventions dans le projet."
  },
  "stage2-service": {
    title: "Mise à disposition d'un service",
    project: "Stage 2ème année - GLPI",
    description: "Le service livré permet de suivre le nombre d'unités du contrat, le pool contractuel, le consommé, le solde et les reports, avec des fonctions d'export et un historique détaillé des actions réalisées.",
    proof: "Tableau de bord GLPI, progression d'usage, avenants et reports, export et historique des unités.",
    image: "assets/img/stage-glpi-dashboard.png",
    caption: "Service de suivi contractuel intégré à GLPI."
  },
  "stage2-pro": {
    title: "Organisation du développement professionnel",
    project: "Stage 2ème année - GLPI",
    description: "Ce stage a renforcé les compétences en compréhension d'un progiciel métier, en analyse SQL, en suivi de tickets et en adaptation d'interfaces professionnelles pour un besoin réel d'exploitation.",
    proof: "Montée en compétences sur GLPI, MySQL, lecture de données métiers et structuration d'une fonctionnalité complète.",
    image: "assets/img/stage-glpi-ticket.png",
    caption: "Environnement métier du stage autour du ticketing et des contrats GLPI."
  }
};

const initTheme = () => {
  const savedTheme = localStorage.getItem("portfolio-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.dataset.theme = savedTheme || (prefersDark ? "dark" : "light");

  document.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("portfolio-theme", nextTheme);
  });
};

const initNavigation = () => {
  const page = document.body.dataset.page;
  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-nav-toggle]");

  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    const href = link.getAttribute("href") || "";
    if (href.includes(page) || (page === "accueil" && href === "index.html")) {
      link.classList.add("is-active");
    }
  });

  toggle?.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });

  nav?.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      document.body.classList.remove("nav-open");
    }
  });
};

const initReveal = () => {
  const targets = document.querySelectorAll("[data-reveal]");
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach((target) => observer.observe(target));
};

const initEvidenceModal = () => {
  const modal = document.querySelector("[data-evidence-modal]");
  if (!modal) return;

  const fields = {
    title: modal.querySelector("[data-modal-title]"),
    project: modal.querySelector("[data-modal-project]"),
    description: modal.querySelector("[data-modal-description]"),
    detail: modal.querySelector("[data-modal-project-detail]"),
    proof: modal.querySelector("[data-modal-proof]"),
    image: modal.querySelector("[data-modal-image]"),
    caption: modal.querySelector("[data-modal-caption]")
  };

  const openModal = (item) => {
    fields.title.textContent = item.title;
    fields.project.textContent = item.project;
    fields.description.textContent = item.description;
    fields.detail.textContent = item.project;
    fields.proof.textContent = item.proof;
    fields.image.src = item.image;
    fields.image.alt = item.caption;
    fields.caption.textContent = item.caption;

    if (typeof modal.showModal === "function") {
      modal.showModal();
    } else {
      modal.setAttribute("open", "");
    }
  };

  const closeModal = () => {
    if (typeof modal.close === "function") {
      modal.close();
    } else {
      modal.removeAttribute("open");
    }
  };

  document.querySelectorAll("[data-evidence-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = evidenceMap[button.dataset.evidenceId];
      if (item) openModal(item);
    });
  });

  modal.querySelector("[data-modal-close]")?.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
};

const initContactForm = () => {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const status = document.querySelector("[data-form-status]");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:zzaidmmajd@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    status.textContent = "Votre application mail va s'ouvrir avec le message préparé.";
    form.reset();
  });
};

const initLightbox = () => {
  const lightbox = document.querySelector("[data-lightbox]");
  if (!lightbox) return;

  const image = lightbox.querySelector("[data-lightbox-image]");
  const caption = lightbox.querySelector("[data-lightbox-caption]");
  const closeButton = lightbox.querySelector("[data-lightbox-close]");
  const clickableImages = document.querySelectorAll(".project-media img, .shot-grid img");

  const closeLightbox = () => {
    if (typeof lightbox.close === "function") {
      lightbox.close();
    } else {
      lightbox.removeAttribute("open");
    }
  };

  const openLightbox = (targetImage) => {
    image.src = targetImage.currentSrc || targetImage.src;
    image.alt = targetImage.alt || "Capture du projet";
    caption.textContent = targetImage.alt || "";

    if (typeof lightbox.showModal === "function") {
      lightbox.showModal();
    } else {
      lightbox.setAttribute("open", "");
    }
  };

  clickableImages.forEach((img) => {
    img.tabIndex = 0;
    img.setAttribute("role", "button");
    img.setAttribute("aria-label", `Agrandir: ${img.alt}`);
    img.addEventListener("click", () => openLightbox(img));
    img.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(img);
      }
    });
  });

  closeButton?.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
};

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavigation();
  initReveal();
  initEvidenceModal();
  initContactForm();
  initLightbox();
});
