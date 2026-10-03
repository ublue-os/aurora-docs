---
title: Tester les ISO
description: Tests des ISO d'Aurora
---

Notre programme de test des ISO est un moyen simple de contribuer au projet. Ces ISO sont renouvelées le premier jour de chaque mois. Si vous rencontrez des problèmes, veuillez ouvrir un ticket dans le [dépôt des ISO](https://github.com/get-aurora-dev/iso).

## Points à tester {#things-to-test-for}

- L'expérience d'installation
- Le démarrage sécurisé
- L'installation sur du matériel physique, si possible, mais ce n'est pas obligatoire
- Si vous avez le temps, parcourez la documentation et suivez le parcours d'un nouvel utilisateur. Les signalements de ces bogues sont particulièrement précieux : si vous en trouvez un, signalez-le !

## Aurora (ISO stables) {#aurora-stable-isos}

| Version | GPU       | Téléchargement                                                                                             | Somme de contrôle                                                                       |
| ------- | --------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Aurora  | AMD/Intel | [aurora-stable-x86_64.iso](https://dl-test.getaurora.dev/aurora-stable-x86_64.iso)                         | [Vérifier](https://dl-test.getaurora.dev/aurora-stable-x86_64.iso-CHECKSUM)             |
| Aurora  | Nvidia    | [aurora-nvidia-open-stable-x86_64.iso](https://dl-test.getaurora.dev/aurora-nvidia-open-stable-x86_64.iso) | [Vérifier](https://dl-test.getaurora.dev/aurora-nvidia-open-stable-x86_64.iso-CHECKSUM) |

## Vérifier les téléchargements avec des sommes de contrôle {#verifying-downloads-with-checksums}

Les **sommes de contrôle** permettent de vérifier que votre téléchargement s'est terminé correctement et qu'il n'a été ni corrompu ni altéré. Après avoir téléchargé une ISO, vous pouvez comparer sa somme de contrôle à celle du fichier officiel pour vous assurer de son intégrité. Bien que facultative, cette vérification est recommandée pour les installations importantes.

#### Comment vérifier les sommes de contrôle avec sha256sum {#how-to-verify-checksums-using-sha256sum}

1. **Téléchargez le fichier ISO et le fichier CHECKSUM correspondant**
   - Par exemple : `aurora-stable-x86_64.iso` et `aurora-stable-x86_64.iso-CHECKSUM`

2. **Vérifiez que les sommes de contrôle correspondent :**

   ```bash
   sha256sum -c aurora-stable-x86_64.iso-CHECKSUM
   ```

**Exemple :**

```bash

# Check that the checksums match
$ sha256sum -c aurora-stable-x86_64.iso-CHECKSUM
aurora-stable-x86_64.iso: OK
```

## Vérifier le téléchargement avec une attestation {#verify-download-with-attestation}

Toutes les ISO officielles construites via GitHub Actions comprennent des attestations cryptographiques signées de provenance de la construction. Vous pouvez vérifier que l'ISO a été construite et publiée par l'équipe Aurora avec [l'interface en ligne de commande de GitHub (`gh`)](https://cli.github.com/) :

```bash
gh attestation verify <iso-name>.iso --owner get-aurora-dev
```

Ou en indiquant directement le dépôt :

```bash
gh attestation verify <iso-name>.iso --repo get-aurora-dev/iso
```
