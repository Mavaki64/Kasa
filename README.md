# Kasa - Application de location immobilière

Application web de location immobilière développée avec React, permettant aux utilisateurs de consulter et explorer des logements disponibles à la location.

## 📋 Table des matières

- [À propos](#à-propos)
- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Structure du projet](#structure-du-projet)
- [Scripts disponibles](#scripts-disponibles)
- [Fonctionnalités techniques](#fonctionnalités-techniques)
- [Auteur](#auteur)

## 🎯 À propos

Kasa est une application web moderne de location immobilière qui permet aux utilisateurs de :
- Parcourir une liste de logements disponibles
- Consulter les détails de chaque logement
- Visualiser les équipements et descriptions
- Naviguer de manière intuitive entre les différentes pages

Ce projet a été développé dans le cadre d'une formation d'intégrateur web, mettant en pratique les concepts de React, de routing et de développement d'interfaces utilisateur modernes.

## ✨ Fonctionnalités

### Page d'accueil
- Affichage d'une sélection de logements avec système de pagination responsive
- Bannière d'accueil avec message de bienvenue
- Affichage adaptatif selon la taille d'écran (mobile, tablette, desktop)
- Sélection aléatoire de logements pour varier le contenu

### Page de détail d'un logement
- **Carrousel d'images** : Navigation entre les différentes photos du logement
- **Informations détaillées** :
  - Titre et localisation
  - Tags de catégorie
  - Note avec système d'étoiles
  - Informations sur l'hôte (nom et photo)
- **Composants accordéon** :
  - Description du logement
  - Liste des équipements disponibles
- **Design responsive** : Adaptation mobile, tablette et desktop

### Navigation
- Système de routing avec React Router
- Navigation entre les pages (Accueil, À propos, Détail logement)
- Gestion des erreurs avec page 404 personnalisée

### Design responsive
- Adaptation automatique à différentes tailles d'écran
- Breakpoints : mobile (375px), tablette (768px), desktop (1024px), large desktop (1440px)
- Optimisation de l'affichage pour chaque format

## 🛠 Technologies utilisées

- **React** ^19.2.0 - Bibliothèque JavaScript pour construire l'interface utilisateur
- **React Router DOM** ^7.11.0 - Routage côté client pour la navigation
- **Vite** ^7.2.4 - Outil de build moderne et serveur de développement ultra-rapide
- **SASS** ^1.97.1 - Préprocesseur CSS pour un style modulaire et maintenable
- **ESLint** ^9.39.1 - Linter pour maintenir la qualité et la cohérence du code
- **Font Awesome** - Bibliothèque d'icônes (via CDN)

## 📦 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (version 18 ou supérieure recommandée)
- **npm** (généralement inclus avec Node.js)

Vous pouvez vérifier vos versions avec :
```bash
node --version
npm --version
```

## 🚀 Installation

1. **Clonez le repository** (ou téléchargez le projet) :
```bash
git clone [url-du-repo]
cd Kasa
```

2. **Installez les dépendances** :
```bash
npm install
```

Cette commande installera toutes les dépendances nécessaires listées dans le `package.json`.

## 💻 Utilisation

### Mode développement

Lancez le serveur de développement :
```bash
npm run dev
```

L'application sera accessible à l'adresse `http://localhost:5173` (ou le port indiqué par Vite dans la console).

### Build de production

Générez une version optimisée pour la production :
```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`. Ce build est optimisé avec :
- Minification du code
- Tree-shaking pour supprimer le code inutilisé
- Optimisation des assets

### Prévisualisation du build

Prévisualisez le build de production localement avant le déploiement :
```bash
npm run preview
```

Cela lance un serveur local pour tester le build de production.

### Linting

Vérifiez la qualité du code avec ESLint :
```bash
npm run lint
```

Corrigez automatiquement les erreurs de formatage si possible.

## 📁 Structure du projet

```
Kasa/
├── public/
│   └── logements.json          # Données JSON des logements (API locale)
├── src/
│   ├── assets/                 # Images et ressources statiques
│   │   ├── BannerSRC1.png
│   │   └── BannerSRC2.png
│   ├── components/             # Composants réutilisables
│   │   ├── Banner/            # Bannière avec image et titre optionnel
│   │   ├── Collapse/          # Composant accordéon animé
│   │   ├── Footer/            # Pied de page
│   │   ├── Header/            # En-tête avec logo et navigation
│   │   ├── LogoKasa/          # Logo de l'application (SVG)
│   │   ├── Nav/               # Navigation principale
│   │   ├── Rating/            # Système de notation avec étoiles
│   │   ├── Slideshow/         # Carrousel d'images
│   │   ├── Tag/               # Tags de catégorie
│   │   └── Thumb/             # Miniature de logement (carte)
│   ├── hooks/                  # Hooks personnalisés React
│   │   └── useBreakpoint.js   # Hook pour détecter le breakpoint actuel
│   ├── layout/                 # Layouts de l'application
│   │   └── App/               # Layout principal avec Header et Footer
│   ├── pages/                  # Pages de l'application
│   │   └── public/
│   │       ├── About/          # Page À propos
│   │       ├── Error/          # Page 404 (erreur)
│   │       ├── Index/          # Page d'accueil
│   │       └── LodgingSheet/   # Page de détail d'un logement
│   ├── services/               # Services API et logique métier
│   │   └── lodgingsService.js # Service de récupération des logements
│   ├── styles/                 # Styles globaux et variables SASS
│   │   ├── _breakpoints.scss  # Points de rupture responsive
│   │   ├── _mixins.scss       # Mixins SASS réutilisables
│   │   ├── _reset.scss        # Reset CSS
│   │   ├── _typographie.scss  # Styles de typographie
│   │   └── _variables.scss    # Variables SASS (couleurs, etc.)
│   └── main.jsx                # Point d'entrée de l'application
├── index.html                  # Fichier HTML principal
├── package.json                # Configuration npm et dépendances
├── vite.config.js              # Configuration Vite
├── eslint.config.js            # Configuration ESLint
└── README.md                   # Ce fichier
```

## 📝 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement avec hot-reload |
| `npm run build` | Crée un build optimisé pour la production dans `dist/` |
| `npm run preview` | Prévisualise le build de production localement |
| `npm run lint` | Vérifie le code avec ESLint |

## 🎨 Fonctionnalités techniques

### Responsive Design

L'application s'adapte automatiquement à différentes tailles d'écran grâce à :

- **Système de breakpoints** :
  - Mobile : 375px
  - Tablet : 768px
  - Desktop : 1024px
  - Large Desktop : 1440px

- **Hook personnalisé `useBreakpoint`** :
  - Détecte automatiquement le breakpoint actuel
  - Réagit aux changements de taille de fenêtre
  - Permet d'adapter le comportement des composants

- **Styles SASS modulaires** :
  - Variables pour les breakpoints
  - Mixins pour les media queries
  - Architecture BEM pour les classes CSS

### Routing

L'application utilise React Router pour la navigation :

- **Route principale** : `/` - Page d'accueil avec liste de logements
- **Route À propos** : `/About` - Page d'informations
- **Route détail logement** : `/Lodging/:id` - Page de détail d'un logement spécifique
- **Route 404** : `/*` - Page d'erreur pour les routes inexistantes

La gestion des erreurs inclut :
- Redirection automatique vers la page 404 si un logement n'existe pas
- Affichage d'un message d'erreur personnalisé

### Composants réutilisables

L'application utilise une architecture modulaire avec des composants réutilisables :

#### Banner
- Affiche une image avec un titre optionnel
- Support d'un masque sombre conditionnel (si titre présent)
- Prop `scale` pour ajuster le zoom de l'image
- Prop `className` pour personnalisation

#### Collapse
- Composant accordéon animé
- Deux tailles disponibles : medium, large (Small automatiquement pour les versions mobiles)
- Animation fluide d'ouverture/fermeture
- Support de contenu varié (texte, listes, etc.)

#### Rating
- Affichage de la notation avec étoiles
- Étoiles colorées pour la note, grises pour le reste
- Système de 5 étoiles maximum

#### Slideshow
- Carrousel d'images avec navigation
- Boutons précédent/suivant
- Boucle infinie (retour au début après la dernière image)

#### Thumb
- Carte de logement pour la liste
- Image, titre et lien vers la page de détail
- Design responsive

### Services

#### lodgingsService
- `fetchLodgings()` : Récupère tous les logements depuis l'API
- `fetchLodgingById(id)` : Récupère un logement spécifique par son ID

### Hooks personnalisés

#### useBreakpoint
- Retourne le breakpoint actuel ('mobile', 'tablet', 'desktop', 'large-desktop')
- Se met à jour automatiquement lors du redimensionnement de la fenêtre
- Utilisé pour adapter l'affichage selon la taille d'écran

#### useIsBelowBreakpoint
- Vérifie si le breakpoint actuel est en dessous d'un breakpoint donné
- Utile pour des conditions conditionnelles dans les composants

## 🎯 Points d'attention

### Données
Les données des logements sont stockées dans `public/logements.json`. Pour utiliser une vraie API, modifiez le service `lodgingsService.js`.

### Styles
Les styles utilisent SASS avec une architecture BEM (Block Element Modifier) pour maintenir la cohérence et éviter les conflits de classes.

## 🐛 Dépannage

### Problème de dépendances
Si vous rencontrez des erreurs lors de l'installation :
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port déjà utilisé
Si le port 5173 est déjà utilisé, Vite proposera automatiquement un autre port.

### Erreurs de linting
Exécutez `npm run lint` pour identifier les problèmes de code et suivez les suggestions.

## 📚 Ressources

- [Documentation React](https://react.dev/)
- [Documentation React Router](https://reactrouter.com/)
- [Documentation Vite](https://vitejs.dev/)
- [Documentation SASS](https://sass-lang.com/)

## 👤 Auteur

Développé dans le cadre d'une formation d'intégrateur web par Killian GAYEZ

## 📄 Licence

Ce projet est un projet de formation.

---

**Note** : Ce projet est une démonstration des compétences en développement React et ne doit pas être utilisé en production sans modifications supplémentaires (sécurité, authentification, etc.).
