# Guide complet debutant: du nom de domaine a la mise en ligne

Ce guide est ecrit pour ton cas precis: le projet est deja prepare dans:

`/Users/quentin/Documents/New project/pls-lovable`

Objectif: acheter un domaine, deployer le site, connecter le domaine, activer HTTPS, et verifier que tout est propre.

---

## 1. Vue d'ensemble (plan simple)

1. Acheter le nom de domaine chez un registrar (OVHcloud, Gandi, Namecheap, etc.).
2. Mettre le code sur GitHub.
3. Deployer le projet sur Render.
4. Connecter le domaine a Render (DNS).
5. Verifier HTTPS, redirections, et pages.

---

## 2. Acheter le nom de domaine (et eviter les pieges)

### 2.1 Choisir le nom

- Fais simple et memorisable.
- Evite les tirets multiples et orthographes ambigues.
- Choisis l'extension selon ton usage:
- `.fr` si cible principale France.
- `.com` si audience internationale.

### 2.2 Verifier la disponibilite et acheter

- Sur OVHcloud par exemple, le flux est: recherche de disponibilite -> `Acheter` -> `Poursuivre la commande`.
- Prends 1 an minimum, 2 ans si tu veux moins de charge mentale.

### 2.3 Avant de payer: check important

- Verifie le prix de renouvellement annuel (pas seulement le prix promo de 1ere annee).
- Active le renouvellement automatique.
- Active la protection de vie privee des donnees d'enregistrement quand disponible.
- Garde la facture, l'email de confirmation, et les acces au compte registrar.

### 2.4 Securiser le compte registrar

- Active la double authentification (2FA).
- Utilise un mot de passe unique.
- Garde les contacts admin/tech a jour.

---

## 3. Comprendre 2 notions DNS avant de continuer

- `domaine racine` (apex): `example.com`
- `sous-domaine`: `www.example.com`

Regle pratique:

- `www` pointe en general en `CNAME` vers ton hebergeur.
- Le domaine racine peut utiliser:
- `ANAME`/`ALIAS`/`CNAME flattening` si ton DNS le permet.
- Sinon un `A` record vers l'IP de l'hebergeur.

---

## 4. Mettre le code sur GitHub

Depuis le dossier parent:

```bash
cd "/Users/quentin/Documents/New project/pls-lovable"
git init
git add .
git commit -m "Initial deploy-ready site"
```

Ensuite:

1. Cree un repo vide sur GitHub.
2. Connecte le repo local au repo GitHub.
3. Push la branche principale.

Commandes types:

```bash
git branch -M main
git remote add origin https://github.com/<ton-user>/<ton-repo>.git
git push -u origin main
```

---

## 5. Deployer le site sur Render

### 5.1 Creer le service

1. Ouvre Render.
2. `New` -> `Web Service`.
3. Connecte ton repo GitHub.

### 5.2 Parametres essentiels

- Environment: `Node`
- Build Command: `npm install && npm run build`
- Start Command: `npm run start`

Si ton repo contient plusieurs dossiers et que `pls-lovable` est un sous-dossier, renseigne aussi:

- Root Directory: `pls-lovable`

### 5.3 Ce que Render attend techniquement

- Ton service doit ecouter sur `0.0.0.0` et sur le port fourni (`PORT`).
- Avec Nitro/Node, c'est normalement gere automatiquement.

### 5.4 Verifier que le deploy est OK

- Render donne une URL en `*.onrender.com`.
- Ouvre cette URL.
- Confirme que les pages `/gilberte`, `/compagnie`, `/contact`, etc. fonctionnent.

---

## 6. Connecter ton nom de domaine a Render

### 6.1 Ajouter le domaine dans Render

Dans ton service Render:

1. Va dans `Settings` -> `Custom Domains`.
2. Ajoute soit:
- `www.tondomaine.fr` (Render ajoute le root et redirige).
- ou `tondomaine.fr` (Render ajoute `www` et redirige).

### 6.2 Important avant DNS

- Supprime les enregistrements `AAAA` pendant la configuration.
- Les `AAAA` peuvent perturber la validation chez Render (Render IPv4).

---

## 7. Configurer DNS chez ton registrar

Tu as 2 chemins possibles.

### 7.1 Chemin A (souvent le plus simple): Cloudflare DNS

1. SSL/TLS mode: `Full`.
2. Cree un `CNAME` pour `@` vers `tonservice.onrender.com`.
3. Cree un `CNAME` pour `www` vers `tonservice.onrender.com`.
4. Au debut, mets le proxy Cloudflare en `DNS only` (pas proxied) pour la verification Render.
5. Lance la verification dans Render.
6. Quand le certificat est valide, tu peux repasser en `Proxied` si tu veux.

### 7.2 Chemin B (OVH, Gandi, autre DNS provider)

Pour le domaine racine `tondomaine.fr`:

- Si dispo: record `ANAME` ou `ALIAS` vers `tonservice.onrender.com`.
- Sinon: record `A` vers `216.24.57.1` (load balancer Render).

Pour `www`:

- Record `CNAME` vers `tonservice.onrender.com`.

Notes:

- Si ton fournisseur supporte CNAME flattening a l'apex, c'est equivalent a un ANAME/ALIAS en pratique.
- Render fournit aussi une doc specifique Cloudflare et Namecheap si besoin.

---

## 8. Delais normaux et verification

- Un changement DNS peut etre visible en quelques minutes.
- Selon les cas, la propagation peut prendre plus longtemps.
- Chez OVHcloud, ils indiquent jusqu'a 24h pour une modif de zone DNS, et jusqu'a 48h pour un changement de serveurs DNS.

Tests utiles:

```bash
dig +short tondomaine.fr A
dig +short www.tondomaine.fr CNAME
```

Puis dans le navigateur:

- `https://tondomaine.fr`
- `https://www.tondomaine.fr`

Tu dois voir le site et un certificat HTTPS valide.

---

## 9. HTTPS et securite

Sur Render:

- Les certificats TLS sont geres automatiquement.
- Render indique utiliser Let's Encrypt et Google Trust Services.
- Le trafic HTTP est redirige vers HTTPS automatiquement.

Sur ton compte registrar:

- Garde 2FA active.
- Garde l'auto-renouvellement actif.
- Verifie les emails d'alerte de renouvellement.

---

## 10. Checklist de mise en ligne finale

- [ ] Le domaine est achete et actif.
- [ ] Le code est pousse sur GitHub.
- [ ] Le deploy Render est vert (build et start OK).
- [ ] L'URL `onrender.com` fonctionne.
- [ ] Le domaine custom est ajoute dans Render.
- [ ] Les records DNS sont corrects.
- [ ] Les `AAAA` ont ete supprimes pendant la verification.
- [ ] Les certificats sont `issued`/valides dans Render.
- [ ] `https://tondomaine.fr` fonctionne.
- [ ] `https://www.tondomaine.fr` redirige comme attendu.
- [ ] Les pages principales s'ouvrent sans erreur.

---

## 11. Problemes frequents (et correction rapide)

### "Domain not verified" dans Render

- Cause probable: DNS pas encore propage, record incorrect, ou `AAAA` restant.
- Action: corrige records, supprime `AAAA`, attends quelques minutes puis `Verify` a nouveau.

### Certificat HTTPS non emis

- Cause probable: domaine non verifie ou CAA trop restrictif.
- Action: verifier CAA si tu en utilises; sinon laisse Render emettre automatiquement.

### Le site marche en `onrender.com` mais pas sur ton domaine

- Cause probable: records DNS mal pointes.
- Action: recontrole root (`A` ou `ANAME/ALIAS`) + `www` (`CNAME`).

### Tu as un CDN/proxy (Cloudflare) et verification bloquee

- Action: passe temporairement en `DNS only`, verifie sur Render, puis reactive le proxy.

---

## 12. Entretien mensuel (10 minutes)

- Verifier que le domaine est toujours en auto-renouvellement.
- Verifier que le certificat HTTPS est valide.
- Appliquer les mises a jour depandances quand necessaire.
- Verifier que le formulaire contact et les emails fonctionnent.

---

## 13. Sources officielles

- TanStack Start hosting guide (Node/Nitro): https://tanstack.com/start/latest/docs/framework/react/guide/hosting
- Nitro Node deployment: https://nitro-docs.pages.dev/deploy/node/
- Nitro configuration (preset): https://nitro-docs.pages.dev/config/
- Render Web Services: https://render.com/docs/web-services
- Render custom domains: https://render.com/docs/custom-domains
- Render DNS providers (ANAME/ALIAS/A/CNAME): https://render.com/docs/configure-other-dns
- Render + Cloudflare DNS config: https://render.com/docs/configure-cloudflare-dns
- Render managed TLS: https://render.com/docs/tls
- Nitro on Render provider guide: https://nitro-docs.pages.dev/deploy/providers/render/
- OVHcloud domaine/DNS FAQ (achat + propagation): https://docs.ovhcloud.com/fr/guides/web-cloud/domains/faq-domain-dns
- OVHcloud DNS zone creation: https://docs.ovhcloud.com/fr/guides/web-cloud/domains/dns-zone-create
- Gandi liaison domaine/site: https://helpdesk.gandi.net/hc/fr/articles/14000703665948-Comment-lier-votre-nom-de-domaine-%C3%A0-votre-site-internet
- Gandi gestion DNS: https://helpdesk.gandi.net/hc/fr/articles/14000800808220-G%C3%A9rer-les-enregistrements-DNS
- ICANN RDAP (WHOIS transition): https://www.icann.org/en/announcements/details/icann-update-launching-rdap-sunsetting-whois-27-01-2025-en
- ICANN lookup/privacy note: https://www.icann.org/resources/pages/search-2013-03-22-en
