# Observatoire des Transitions de l'Emploi

## Contexte du projet
### Invitation - METRODATA : 48h pour transformer les données en indicateurs clés des transitions économiques

Face aux mutations profondes de l'économie, **Bordeaux Métropole** a organisé **METRODATA**, un datathon de 48 heures, les 22 et 23 janvier 2025.  
Cet événement collaboratif a mobilisé étudiants, experts de la data, acteurs économiques et institutionnels autour d’un défi ambitieux :  
**Créer des indicateurs novateurs pour mesurer les transitions sociales, écologiques et de l'emploi à l'échelle métropolitaine.**

### Objectifs :
Les équipes pluridisciplinaires ont travaillé sur les thématiques suivantes :
1. **Transitions sociales** : innovation sociale, ESS, développement des tiers-lieux…
2. **Transitions écologiques** : économies d'eau et d'énergie, économie circulaire…
3. **Transitions de l’emploi** : travail indépendant, nouvelles formes d'emploi, emplois émergents, métiers en tension…

Les participants, accompagnés de mentors et d'experts, ont produit des visualisations et des indicateurs pour :
- Informer les élus, entreprises et acteurs économiques.
- Favoriser la prise de décisions stratégiques dans le cadre des transitions économiques.

### Restitution
Le projet a été présenté lors de la restitution publique le **23 janvier 2025**, en présence de mentors, d'experts et de jurés.

---

## Installation en local

Ce guide explique comment installer et exécuter ce projet en local.

---

### Prérequis

Avant de commencer, assurez-vous d’avoir les logiciels suivants installés sur votre machine :

1. **Node.js et npm**
    - **Vérifiez si Node.js et npm sont installés** :
      Ouvrez un terminal et exécutez les commandes suivantes :
      ```bash
      node -v
      npm -v
      ```
      Si ces commandes renvoient un numéro de version, Node.js et npm sont correctement installés.  
      Exemple de sortie attendue :
      ```
      v18.16.0
      9.5.1
      ```
      Sinon, téléchargez et installez Node.js en suivant ce guide :  
      [Télécharger et installer Node.js et npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

2. **Git (optionnel)**  
   Vérifiez si Git est installé en exécutant la commande suivante dans un terminal :
   ```bash
   git --version
    ```

Si un numéro de version s'affiche, Git est installé. Sinon, téléchargez-le ici :
[Télécharger Git](https://git-scm.com/downloads).


# Étapes d'installation

## 1. Télécharger le projet
Vous pouvez télécharger le projet de deux manières :

### a. Via Git (recommandé)
1. Ouvrez un terminal :
    - **Windows** : Appuyez sur `Win + R`, tapez `cmd`, puis appuyez sur Entrée.
    - **Mac** : Ouvrez Spotlight (`Cmd + Espace`), tapez `Terminal`, puis appuyez sur Entrée.
2. Clonez le dépôt Git avec la commande suivante :
   ```bash
   git clone git@github.com:HugoD66/MetroData-Hackathon.git
    ```
3. Accédez au dossier du projet :
   ````bash
    cd nom-du-repertoire
   ````
### b.  Télécharger le ZIP
 - Rendez-vous sur la page GitHub ou GitLab du projet.
 - Cliquez sur Code ou Télécharger, puis sélectionnez Download ZIP.
 - Extrayez le fichier ZIP dans un dossier de votre choix.
 - Ouvrez un terminal et naviguez dans le dossier extrait :
    ```bash
    cd MetroData-Hackathon
    ```

---
## 2. Installer les dépendances

Dans le terminal, exécutez la commande suivante pour installer les dépendances du projet :
```bash
  npm install
```
Cette commande installe toutes les bibliothèques nécessaires spécifiées dans le fichier `package.json`.

---
## 3. Exécuter le projet

Démarrez le serveur avec la commande suivante :

```bash
  npm start
``` 
Cette commande démarre l'application. Par défaut, le projet sera accessible à l'adresse suivante dans votre navigateur :

```bash
  http://localhost:5173
```
Si vous ne voyez pas la page ou si une erreur s'affiche, vérifiez les points suivants :
- Le port 5173 est-il occupé ? Si oui, modifiez le port dans le fichier `package.json`.
- Les dépendances sont-elles correctement installées ?

---

### Structure du projet
Voici un aperçu des fichiers et dossiers clés du projet :

```bash
    ├── src/
    │   ├── scripts/        # Scripts JavaScript
    │   ├── styles/         # Fichiers CSS
    │   ├── pictures/       # Images
    ├── index.html          # Page principale
    ├── package.json        # Dépendances du projet
    ├── README.md           # Documentation du projet
```
