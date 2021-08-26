# Projet Boardgame

Ce projet est un API REST  pour gérer une collection de jeux de sociétés

## Stack technique

- [NodeJS](https://nodejs.org/en/download/) (v12 ou +)
- [PostgreSQL](https://www.postgresql.org/download/) (v12 ou +)
- [Sqitch](https://sqitch.org/download/) (v1 ou +)
- [Git](https://git-scm.com/downloads) ()

Ces outils sont nécessaires à l'installation et au fonctionnement de l'API.

## Installation (démarche)

Cloner le dépot en local

```bash
git clone <url de ce dépôt>
```

Puis dans le dossier local, installer les dépendances NPM

```bash
npm install
```

Enfin créer une base données PostgreSQL et déployer le projet sqitch dessus

```bash
createdb boardgame
sqitch deploy
```

Configurer PostgreSQL (ou fournir les variables d'environnements nécessaires à la connexion) pour que les commandes `createdb` et `sqitch` puissent s'exécuter correctement

## Données de démonstration

## Lancement 

```bash
npm start
```