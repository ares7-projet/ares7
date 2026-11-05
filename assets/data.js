/* ARÈS-7 — contenu public du dossier (généré par _public_data.js) */
window.ARES7 = {
 "meta": {
  "name": "ARÈS·7",
  "sub": "Astronef Réticulaire à Énergie Stellaire",
  "version": "v2 — architecture pilotée par les données",
  "tagline": "Dossier de référence · évolutif"
 },
 "groupes": [
  {
   "titre": "Le concept",
   "ids": [
    "manifeste",
    "invention",
    "anatomie",
    "physique",
    "multimodule",
    "habitat"
   ]
  },
  {
   "titre": "Les chiffres",
   "ids": [
    "nombres",
    "calculs",
    "simulateur",
    "bouclier",
    "carburant",
    "capteurs"
   ]
  },
  {
   "titre": "Le bilan honnête",
   "ids": [
    "viabilite",
    "frontiere",
    "precedents",
    "banque",
    "fossiles",
    "aide",
    "sources",
    "lexique"
   ]
  }
 ],
 "filters": [
  {
   "c": "green",
   "label": "Acquis",
   "title": "Acquis / calculé"
  },
  {
   "c": "yellow",
   "label": "Vigilance",
   "title": "Point de vigilance"
  },
  {
   "c": "blue",
   "label": "Non prouvé",
   "title": "Non prouvé mais réel"
  },
  {
   "c": "wall",
   "label": "Mur",
   "title": "Mur / résultat négatif"
  }
 ],
 "sections": [
  {
   "id": "manifeste",
   "num": "00",
   "nav": "Vue d'ensemble",
   "hero": {
    "tagline": "Dossier de référence · évolutif",
    "h1": "ARÈS<span class=\"num\">·7</span>",
    "pitch": "Vaisseau <strong>interplanétaire</strong> — habité ou drone, les deux branches restent ouvertes. Architecture <em>concentrique</em> (des couches emboîtées) dont la coque est une <strong>géodésique fréquence-2</strong> : elle sert à la fois de squelette et d'architecture fonctionnelle.",
    "creed": "« Rien n'existe pour une seule raison. »"
   },
   "blocks": [
    {
     "type": "callout",
     "html": "<b>Par où commencer ?</b> <b>①</b> L'idée : <a href=\"#invention\">l'invention 60/60</a> et <a href=\"#anatomie\">l'anatomie</a> (5 min). <b>②</b> Les chiffres : <a href=\"#nombres\">les nombres</a>, puis <a href=\"#simulateur\">le simulateur</a> pour jouer avec. <b>③</b> Ce qui bloque, honnêtement : <a href=\"#viabilite\">honnêteté &amp; viabilité</a> et <a href=\"#habitat\">l'habitat</a>. <span style=\"color:var(--text-dim)\">Pressé ? <a href=\"index.html\">la version en 1 minute</a> ou <a href=\"index.html#documentaire\">le documentaire (11 min)</a> · pour imprimer : <a href=\"lire.html\">version texte</a> · les mots difficiles : <a href=\"#lexique\">lexique</a>. Les pastilles 🟢🟡🔵⛔ disent ce qui est acquis ou non.</span>"
    },
    {
     "type": "prose",
     "html": "<span style=\"color:var(--text-dim);font-size:13.5px\">Le nom : <strong>ARÈS</strong> = <strong>A</strong>stronef <strong>R</strong>éticulaire à <strong>É</strong>nergie <strong>S</strong>tellaire (« astronef » = vaisseau spatial ; « réticulaire » = construit en réseau — les 120 arêtes) · le « <strong>7</strong> » = le diamètre du tambour de vie, ~7 m. Les mots techniques sont expliqués dans le <a href=\"#lexique\">Lexique</a>.</span>"
    },
    {
     "type": "verdict",
     "h": "blue",
     "value": "≈ 2 %",
     "html": "<b>Viabilité globale de la mission</b> <span class=\"badge blue\">🔵 non prouvé</span> — la mission est le <em>produit</em> des viabilités de chaque module. Le goulot dominant est le <b>réacteur à fusion nette (~15–25 %)</b>, jamais démontré à l'échelle. Produit du tableau (§11-12) : <b>≈ 2 %</b> (1,5 à 2,4 % selon le réacteur, 15 à 25 %) — sans compter le bouclier ni la tenue de l'YBCO aux neutrons, qui le feraient encore baisser. Les pourcentages <b>hiérarchisent les risques — ils ne promettent rien.</b>"
    },
    {
     "type": "heading",
     "html": "Chaîne directrice du design"
    },
    {
     "type": "chain",
     "steps": [
      "circulation plasma",
      "courant",
      "champ magnétique",
      "confinement YBCO",
      "bulle M2P2 (radioprotection)",
      "éjection de plasmoïdes (poussée)"
     ]
    },
    {
     "type": "prose",
     "html": "<strong>Principe fondateur.</strong> Chaque organe cumule plusieurs rôles (biomimétisme : un os = structure + réserve minérale + hématopoïèse). C'est l'<em>application systématique</em> de ce principe à un véhicule spatial qui constitue l'originalité revendiquée — pas un organe isolé."
    }
   ]
  },
  {
   "id": "invention",
   "num": "§3",
   "nav": "L'invention — 60/60",
   "title": "L'invention centrale — la partition 60/60 forcée",
   "lead": "L'actif défendable du projet. La partition n'est pas un choix de design : c'est une <em>conséquence topologique</em> de la symétrie icosaédrique.",
   "blocks": [
    {
     "type": "cards",
     "items": [
      {
       "title": "Le fait topologique",
       "badge": "<span class=\"badge green\">🟢 90 %</span>",
       "h": "green",
       "html": "<p>Après subdivision f2, chaque <strong>sommet d'origine</strong> de l'icosaèdre reste <strong>pentavalent</strong> (ordre 5). Il y a <strong>12 sommets d'origine</strong> = les <strong>nœuds φ</strong> (positionnés selon φ = (1+√5)/2 ≈ 1,618).</p><ul class=\"clean\"><li>12 nœuds φ × 5 arêtes = <strong>60 arêtes radiales</strong></li><li>les 60 restantes (milieu→milieu) = <strong>arêtes intérieures</strong></li></ul><p style=\"margin-bottom:0\"><strong>Vérification par les degrés :</strong> 12×5 + 30×6 = 60 + 180 = 240 = 2×120 ✓ <span style=\"color:var(--text-dim)\">(handshake lemma)</span></p>"
      },
      {
       "title": "La coïncidence métrique = fonctionnelle",
       "h": "green",
       "html": "<p>La partition <strong>fonctionnelle</strong> (radial / intérieur) coïncide avec la partition <strong>métrique</strong> (court / long) :</p><ul class=\"clean\"><li><strong>60 radiales = 60 courtes (3,28 m)</strong> → plasma-primaire</li><li><strong>60 intérieures = 60 longues (3,71 m)</strong> → structure-primaire</li><li>réseau total ≈ <strong>419,2 m</strong></li></ul><p style=\"margin-bottom:0\">La géométrie seule n'est pas protégeable — l'<em>usage fonctionnel</em> du 60/60 (structure vs canal plasma) l'est.</p>"
      }
     ]
    },
    {
     "type": "heading",
     "html": "Topologie du circuit plasma — <span class=\"badge green\">🟢 topologie résolue</span> <span class=\"badge yellow\">🟡 physique ouverte (fuite des cusps ×60, étude 4)</span>"
    },
    {
     "type": "prose",
     "html": "Le plasma doit former une <strong>boucle fermée</strong> (aller/retour) pour entretenir l'ionisation — ce n'est pas optionnel. Or un circuit fermé n'utilisant <strong>que les 60 radiales est topologiquement impossible</strong> (degré impair 5 aux nœuds φ → pas de circuit eulérien)."
    },
    {
     "type": "callout",
     "html": "<strong>Circuit résolu :</strong> <code>24 radiales aller + 60 intérieures (transit) + 36 radiales retour</code> = <strong>réseau fermé distribué</strong> (boucle aller/retour globale, pas un parcours unique : le déséquilibre 2 sorties / 3 entrées aux 12 nœuds φ est exactement compensé aux 30 nœuds hexavalents — vannes, ext. 16 ; capacité de débit des vannes à vérifier <span class=\"badge yellow\">🟡</span>).<br>→ En régime permanent, les <strong>120 arêtes circulent du plasma et émettent toutes une lumière blanche uniforme</strong> (spectre hélium)."
    },
    {
     "type": "callout",
     "variant": "warn",
     "h": "yellow",
     "html": "<b>Précision :</b> la première version du document déposé décrit « 120 arêtes » comme 120 canaux identiques indépendants — cadrage qui <em>précède</em> la résolution du circuit. Formulation correcte : <strong>partition 60/60</strong> + <strong>un circuit fermé unique</strong> qui traverse les deux classes. Ce n'est pas « 120 canaux jumeaux »."
    },
    {
     "type": "heading",
     "html": "Protégeable vs physique connue (§14)"
    },
    {
     "type": "table",
     "head": [
      "Élément",
      "Protégeable ?"
     ],
     "rows": [
      [
       "<strong>Exploitation fonctionnelle du 60/60</strong> (structure ⊕ canal plasma)",
       "✅ <b style=\"color:var(--h-green)\">OUI — actif central</b>"
      ],
      [
       "Intégration bouclier dipolaire ⊕ éjection plasmoïde",
       "✅ oui, à formuler"
      ],
      [
       "Arête 6-fonctions + échange thermique contre-courant",
       "⊕ intégration revendiquée"
      ],
      [
       "Plasma quasi-neutre · dynamo · propulseur FRC/RMF · DFD/PFRC",
       "<span style=\"color:var(--text-dim)\">❌ physique / art antérieur connus</span>"
      ]
     ]
    }
   ]
  },
  {
   "id": "anatomie",
   "num": "§4-6",
   "nav": "Anatomie",
   "title": "Anatomie — coque, arête, circuit",
   "lead": "De la coque géodésique à l'arête à 6 fonctions et au circuit plasma fermé.",
   "blocks": [
    {
     "type": "table",
     "h": "green",
     "numLast": true,
     "head": [
      "Coque géodésique f2",
      "Valeur"
     ],
     "rows": [
      [
       "Type",
       "icosaèdre géodésique fréquence-2"
      ],
      [
       "Diamètre",
       "Ø 12,0 m (R 6,0 m)"
      ],
      [
       "Sommets / Arêtes / Faces",
       "42 / 120 / 80 (Euler = 2 ✓)"
      ],
      [
       "Nœuds φ",
       "12 sommets pentavalents (distributeurs)"
      ],
      [
       "Arêtes",
       "60 radiales 3,28 m + 60 intérieures 3,71 m"
      ],
      [
       "Pôles",
       "FACE-pôle (axe d'ordre 3) — pas vertex-pôle"
      ],
      [
       "Accès (sas)",
       "2 <strong>faces-sas</strong> équatoriales opposées : la porte = le panneau d'une face centrale, écoutille ≤ Ø 2,1 m — <strong>aucune arête coupée</strong>"
      ]
     ]
    },
    {
     "type": "heading",
     "html": "L'arête à 6 fonctions <span class=\"badge green\">🟢 cœur du Soleau</span>"
    },
    {
     "type": "table",
     "head": [
      "#",
      "Couche (cœur → extérieur)",
      "Rôle"
     ],
     "rows": [
      [
       "1",
       "Plasma He²⁺ (Ø 1–2 mm)",
       "transport + source lumineuse"
      ],
      [
       "2",
       "Céramique YBCO (~92 K)",
       "confine le champ + blindage magnétique"
      ],
      [
       "3",
       "Fenêtre silice/saphir",
       "laisse sortir la ligne blanche — interrompt localement l’écran YBCO (courants azimutaux coupés) → YBCO segmenté et isolé de part et d’autre, champ axial porté par les bobinages dans cette zone"
      ],
      [
       "4",
       "Isolant MLI",
       "découplage thermique"
      ],
      [
       "5",
       "Bouclier B₄C",
       "neutrons résiduels + micro-débris"
      ],
      [
       "6",
       "Structure B₄C–SiC",
       "reprise des efforts, peau externe"
      ]
     ]
    },
    {
     "type": "callout",
     "h": "green",
     "html": "Chaque arête est <strong>un organe unique à 6 fonctions simultanées</strong> (structure · canal plasma · blindage · anti-débris · lumière · modulation PZT). Échange thermique à <strong>contre-courant</strong> (biomimétique) → l'YBCO reste sous 92 K."
    },
    {
     "type": "heading",
     "html": "Circuit plasma 24 / 60 / 36 — viewer 3D <span class=\"badge yellow\">🟡 candidat</span>"
    },
    {
     "type": "embed",
     "src": "viewers/circuit_plasma.html",
     "height": 470,
     "title": "Circuit plasma 24/60/36",
     "caption": "glisser pour tourner · face-pôle vérifié · rendu réel = blanc constant, couleurs = rôles (pédagogique)"
    },
    {
     "type": "heading",
     "html": "La face-sas & les 10 axes — viewer 3D <span class=\"badge yellow\">🟡 proposition</span>"
    },
    {
     "type": "embed",
     "src": "viewers/sas.html",
     "height": 470,
     "title": "Face-sas et axes d'assemblage",
     "caption": "les 2 faces-sas (vertes) + les 2 pôles plats (bleus) · bouton « axes » = les 10 axes d'ordre 3 (1 poussée + 9 assemblage) · bouton « module » = amarrage sas-contre-sas"
    }
   ]
  },
  {
   "id": "physique",
   "num": "§7-9",
   "nav": "Physique & lumière",
   "title": "La physique qui force le design",
   "lead": "Le vaisseau se lit comme une conséquence, pas un catalogue.",
   "interactive": "mix-blanc",
   "blocks": [
    {
     "type": "table",
     "head": [
      "Loi / symétrie",
      "Ce qu'elle force"
     ],
     "rows": [
      [
       "Symétrie icosaédrique",
       "la coque f2 + la partition 60/60"
      ],
      [
       "Conservation quantité de mvt",
       "« loi des lacets » : une boucle fermée ne propulse pas → ouvrir la coque"
      ],
      [
       "Neutralité de charge (Gauss)",
       "plasma quasi-neutre ; jet neutralisé"
      ],
      [
       "Loi d'Ampère",
       "la dynamo : circulation ≡ champ (même phénomène)"
      ],
      [
       "Topologie du dipôle",
       "2 pôles / 2 cusps → réacteur au cusp sacrifié"
      ]
     ]
    },
    {
     "type": "callout",
     "html": "<b>Le dipôle est bouclier + faiblesse + moteur en un objet :</b> les boucles fermées font bouclier/lumière/chaleur mais <strong>poussée nulle</strong> ; les <strong>cusps polaires</strong> sont les seuls points d'ouverture (poussée) et de vulnérabilité (habitat)."
    },
    {
     "type": "heading",
     "html": "Lumière des arêtes <span class=\"badge green\">🟢 nette, sans halo</span> <span class=\"badge yellow\">🟡 vive, couleur blanche à mesurer</span>"
    },
    {
     "type": "prose",
     "html": "Les ions α ne rayonnent pas de visible ; en se thermalisant ils reforment de l'<strong>hélium neutre excité</strong> qui se désexcite selon le spectre He I : 587,6 (jaune) · 667,8 + 706,5 (rouges) · 471,3 + 492,2 (bleues) · 501,6 nm (verte)."
    },
    {
     "type": "callout",
     "h": "yellow",
     "html": "<b>Ce qui est acquis 🟢 :</b> dans le vide, rien ne diffuse la lumière → <strong>aucun halo</strong>, des arêtes nettes. <b>Plausible 🟡 :</b> une lumière vive (1 % des 3 MW ≈ 70 W par mètre d'arête). <b>À démontrer 🔵 :</b> la couleur — les intensités ci-dessous sont un réglage, pas le résultat d'un modèle du plasma ; le cœur à 100 eV est ionisé, la lumière viendrait des zones qui se recombinent. <b>Mélange recalculé (01/07) :</b> l'addition additive des 6 raies, avec les intensités relatives <strong>100 / 60 / 40 / 50 / 40 / 50 %</strong> (587,6 / 667,8 / 706,5 / 471,3 / 492,2 / 501,6 nm — réglage « spectre réel » du mélangeur interactif), donne <strong>R/G/B ≈ 0,95 / 1,00 / 0,51</strong> — une lumière claire et chaude, plutôt jaune pâle, <strong>pas un blanc pur</strong>. Un vrai tube d'hélium pur paraît même rose-orangé. <b>Piste pour un vrai blanc 🟡 :</b> une couche de luminophore sur la fenêtre, comme dans un tube fluorescent — l'hélium émet aussi beaucoup d'ultraviolet, que le luminophore convertit en lumière blanche. <strong>Aucune raie ne domine</strong> → réfute les anciennes idées « arêtes vertes » / « raie jaune ». La fente nanométrique 50–200 nm est <span class=\"badge wall\">⛔ écartée</span> (diffracte → détruit le blanc) au profit d'une fenêtre silice/saphir sub-mm."
    },
    {
     "type": "heading",
     "html": "Le diagramme — ce que ça fait, ce que ça produit"
    },
    {
     "type": "prose",
     "html": "<div style=\"overflow-x:auto\"><svg viewBox=\"0 0 780 400\" xmlns=\"http://www.w3.org/2000/svg\" style=\"min-width:700px;width:100%\"><defs><marker id=\"fl\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L7,3 L0,6 Z\" fill=\"#5b9dff\"/></marker></defs><style>.bx{fill:#14161f;stroke:#2a3350;rx:8}.pr{fill:#0f2018;stroke:#35d39a}.ht{fill:#221c0f;stroke:#f3c44a}.tt{fill:#c7ccdb;font:12px sans-serif}.tb{fill:#eef1fa;font:bold 12.5px sans-serif}.ts{fill:#767c90;font:10.5px sans-serif}.ln{stroke:#5b9dff;stroke-width:1.6;fill:none;marker-end:url(#fl)}</style><rect class=\"bx\" x=\"10\" y=\"165\" width=\"112\" height=\"52\" rx=\"8\"/><text class=\"tb\" x=\"20\" y=\"186\">D + ³He</text><text class=\"ts\" x=\"20\" y=\"202\">0,45 g/jour</text><rect class=\"bx\" x=\"160\" y=\"158\" width=\"130\" height=\"66\" rx=\"8\"/><text class=\"tb\" x=\"172\" y=\"180\">RÉACTEUR fusion</text><text class=\"tt\" x=\"172\" y=\"196\">~3 MW</text><text class=\"ts\" x=\"172\" y=\"211\">au cusp polaire</text><path class=\"ln\" d=\"M122,191 L158,191\"/><path class=\"ln\" d=\"M290,175 C330,120 330,80 368,68\"/><text class=\"ts\" x=\"298\" y=\"105\">ions α He²⁺</text><rect class=\"bx\" x=\"370\" y=\"34\" width=\"150\" height=\"60\" rx=\"8\"/><text class=\"tb\" x=\"382\" y=\"56\">12 nœuds φ →</text><text class=\"tt\" x=\"382\" y=\"72\">circuit 24/60/36</text><text class=\"ts\" x=\"382\" y=\"86\">120 arêtes, vannes ×30</text><path class=\"ln\" d=\"M520,50 L620,32\"/><path class=\"ln\" d=\"M520,72 L620,110\"/><rect class=\"pr\" x=\"622\" y=\"12\" width=\"148\" height=\"42\" rx=\"8\"/><text class=\"tb\" x=\"632\" y=\"30\" fill=\"#35d39a\">LUMIÈRE blanche</text><text class=\"ts\" x=\"632\" y=\"45\">spectre He I (gratuite)</text><rect class=\"pr\" x=\"622\" y=\"92\" width=\"148\" height=\"56\" rx=\"8\"/><text class=\"tb\" x=\"632\" y=\"111\" fill=\"#35d39a\">BOUCLIER</text><text class=\"tt\" x=\"632\" y=\"126\">courant ≡ champ</text><text class=\"ts\" x=\"632\" y=\"141\">→ bulle M2P2 (vent, GCR)</text><path class=\"ln\" d=\"M290,191 L368,191\"/><text class=\"ts\" x=\"298\" y=\"184\">η ≈ 37 %</text><rect class=\"bx\" x=\"370\" y=\"164\" width=\"150\" height=\"54\" rx=\"8\"/><text class=\"tb\" x=\"382\" y=\"184\">plasmoïdes FRC</text><text class=\"ts\" x=\"382\" y=\"200\">10 µg × 10 kHz</text><text class=\"ts\" x=\"382\" y=\"212\">tuyère-cusp, auto-détachés</text><path class=\"ln\" d=\"M520,191 L620,191\"/><rect class=\"pr\" x=\"622\" y=\"168\" width=\"148\" height=\"46\" rx=\"8\"/><text class=\"tb\" x=\"632\" y=\"187\" fill=\"#35d39a\">POUSSÉE 15 N</text><text class=\"ts\" x=\"632\" y=\"203\">jet 1,125 MW · Isp 15 300 s</text><path class=\"ln\" d=\"M290,210 C330,270 330,296 368,300\"/><text class=\"ts\" x=\"296\" y=\"268\">~63 % chaleur</text><rect class=\"ht\" x=\"370\" y=\"278\" width=\"150\" height=\"50\" rx=\"8\"/><text class=\"tb\" x=\"382\" y=\"298\">RADIATEURS</text><text class=\"ts\" x=\"382\" y=\"314\">85–320 m² · 700–500 K</text><path class=\"ln\" d=\"M520,303 L620,303\"/><rect class=\"ht\" x=\"622\" y=\"272\" width=\"148\" height=\"60\" rx=\"8\"/><text class=\"tb\" x=\"632\" y=\"291\" fill=\"#f3c44a\">IR évacué</text><text class=\"ts\" x=\"632\" y=\"306\">(+ option TPV → électricité)</text><text class=\"ts\" x=\"632\" y=\"321\">signature visible ⚠</text><text class=\"ts\" x=\"12\" y=\"385\">Un carburant, quatre produits : poussée · lumière · bouclier · chaleur — « rien n\\u2019existe pour une seule raison ».</text></svg></div>"
    }
   ]
  },
  {
   "id": "nombres",
   "num": "§10",
   "nav": "Les nombres",
   "title": "Les nombres — jeu canonique verrouillé",
   "lead": "Propulsion plasmoïde, variante B. Liens physiques : <strong>F = ṁ·v</strong> et <strong>P = ½·ṁ·v²</strong>. Recoupé : calcul interne + 2ᵉ IA + Wolfram Alpha.",
   "blocks": [
    {
     "type": "callout",
     "html": "Jeu auto-cohérent, vérifié indépendamment par une seconde IA le 22/06 — <em>aucun chiffre ne cloche</em>, et <strong>t &amp; conso tiennent ensemble</strong> via le duty cycle (propergol = conso × temps calendaire, invariant). <span class=\"badge green\">🟢</span>"
    },
    {
     "type": "table",
     "head": [
      "Grandeur",
      "Formule",
      "Valeur canonique"
     ],
     "numLast": true,
     "rows": [
      [
       "Masse plasmoïde",
       "hypothèse",
       "10 µg"
      ],
      [
       "Cadence",
       "hypothèse",
       "10 kHz"
      ],
      [
       "Débit massique",
       "ṁ = mₚ·f",
       "0,1 g/s"
      ],
      [
       "Vitesse d'éjection",
       "v = F/ṁ",
       "150 km/s"
      ],
      [
       "Poussée",
       "F = mₚ·v·f",
       "15 N"
      ],
      [
       "Énergie / plasmoïde",
       "E = ½mₚv²",
       "112,5 J"
      ],
      [
       "Puissance <em>jet</em> (faisceau)",
       "P = ½·F·v = E·f",
       "1,125 MW"
      ],
      [
       "Impulsion spécifique",
       "Isp = v/g₀",
       "≈ 15 300 s"
      ],
      [
       "Consommation (duty 15 %)",
       "ṁ × duty × an",
       "≈ 473 kg/an"
      ],
      [
       "Accélération (m = 150 t)",
       "a = F/m",
       "1,0×10⁻⁴ m/s²"
      ],
      [
       "Temps de <em>combustion</em> (Δv = 10 km/s)",
       "t = Δv/a (tir continu)",
       "≈ 3,2 ans"
      ],
      [
       "Temps <em>calendaire</em> @ duty 15 %",
       "t_comb / duty",
       "≈ 21 ans"
      ],
      [
       "Fréquences de pilotage magnétique (B = 0,1 T)",
       "cyclotron ; RMF",
       "ions 0,77 MHz · RMF ~1–50 MHz · e⁻ 2,8 GHz"
      ]
     ]
    },
    {
     "type": "callout",
     "h": "green",
     "html": "<b>Cohérence duty cycle — clarifié (22/06).</b> Le temps de <em>combustion</em> (tir continu) et la consommation (moteur allumé une fraction du temps) décrivaient <strong>deux régimes contradictoires</strong> dans le §10 d'origine. Résolu par un seul paramètre — le <strong>duty cycle</strong> : temps calendaire = combustion ÷ duty, conso = ṁ × duty × an. Pilotable dans le simulateur. <span class=\"badge yellow\">🟡 à valider au canon</span>"
    },
    {
     "type": "callout",
     "h": "green",
     "html": "<b>Jet ⊂ fusion — les deux couches du moteur.</b> Les 1,125 MW ci-dessus sont la <strong>puissance du jet</strong> (½·F·v). La <strong>source</strong> est le réacteur DFD/PFRC à fusion (~3 MW), dont seule une fraction η (cible ≈ 37 % <span class=\"badge blue\">🔵</span> ; études DFD publiées plutôt ~20–25 %) devient du jet — le reste part en chaleur (radiateurs 1–3 t). Le simulateur relie les deux : <strong>le vrai mur, c'est la puissance de fusion</strong>."
    },
    {
     "type": "callout",
     "variant": "wall",
     "h": "wall",
     "html": "<b>Le verdict décisif :</b> ≈ 3,2 ans de tir <em>effectif</em> (≈ 21 ans calendaire à 15 % de duty) pour seulement 10 km/s. Le vrai mur n'est pas l'arithmétique — c'est le <strong>rapport poussée/masse</strong>, donc la <strong>puissance du réacteur</strong>. Tout est plafonné par lui."
    },
    {
     "type": "callout",
     "variant": "warn",
     "h": "yellow",
     "html": "<b>Nuance plasma :</b> la densité <code>n = P_B/kT = 2,48×10²⁰ m⁻³</code> (β=1, T=100 eV) suppose une pression <strong>mono-espèce</strong>. En convention plasma électrons+ions (P = n·k(Te+Ti)), n tomberait à ~1,24×10²⁰ (facteur 2). Le doc est cohérent avec son résultat — il faut juste <em>écrire explicitement la convention</em>, sinon c'est un futur fossile."
    },
    {
     "type": "heading",
     "html": "⚠️ Ne pas confondre avec les anciens arrondis d’un premier document"
    },
    {
     "type": "table",
     "head": [
      "Fossile (PDF §6)",
      "Valeur verrouillée"
     ],
     "numLast": true,
     "rows": [
      [
       "<span class=\"foss\">v = 1,54×10⁵ m/s</span>",
       "1,50×10⁵"
      ],
      [
       "<span class=\"foss\">Isp ≈ 15 700 s</span>",
       "≈ 15 300 s"
      ],
      [
       "<span class=\"foss\">ṁ ≈ 0,085 g/s</span>",
       "0,1 g/s"
      ],
      [
       "<span class=\"foss\">~400 kg/an</span>",
       "~473 kg/an"
      ],
      [
       "<span class=\"foss\">a = 8,67×10⁻⁵ / t = 3,66 ans (F=13 N)</span>",
       "1,0×10⁻⁴ / ≈3,2 ans (F=15 N)"
      ]
     ]
    }
   ]
  },
  {
   "id": "calculs",
   "num": "Σ",
   "nav": "Les calculs (fermés)",
   "title": "Le laboratoire — tous les calculs dérivables, fermés",
   "lead": "Chaque nombre est <em>recalculé</em> avec les vraies constantes (mesuré, pas récité), croisé avec les études antérieures du projet. Formule + valeur + honnêteté.",
   "blocks": [
    {
     "type": "callout",
     "h": "blue",
     "html": "<b>🎯 Mission de référence : Mars direct (aller-retour).</b> Objectif premier du projet, sans étape lunaire ; toutes destinations ensuite. Les tableaux ci-dessous sont calculés pour un budget de vitesse de base <strong>Δv = 10 km/s</strong>. Pour Mars A/R : <strong>Δv ≈ 15 km/s</strong> (scénario prudent tout-propulsif, sans aérocapture) → <strong>≈ 5 ans de poussée cumulée</strong> à 15 N (15,8 t ÷ 0,1 g/s ; 4,75 ans = calcul simplifié à masse constante) (≈ 33 ans calendaires au duty 15 %) · propergol <strong>15,8 t</strong> · hélium-3 <strong>≈ 0,8 kg</strong>. Avec aérocapture à Mars et à la Terre (Δv ≈ 8,5 km/s) : <strong>≈ 2,7 ans de poussée</strong>, ³He ≈ 0,4 kg. Pour Mars A/R tout-propulsif en 3,2 ans de poussée (comme la base) : ≈ 23 N et fusion ≈ 4,7 MW <span class=\"badge yellow\">🟡 au-delà du repère DFD 2–3 MW</span>. <span class=\"badge green\">🟢 calcul recoupé</span>"
    },
    {
     "type": "callout",
     "variant": "wall",
     "h": "wall",
     "html": "<b>§17 fermé — le transit rapide est hors d'atteinte.</b> Un transit < 1 an exige <strong>10–20 MW de fusion</strong> (contre 2–3 MW pour un DFD). À 10⁻⁵ g, ARÈS-7 est un <em>marathonien</em> : atteindre 10 km/s = 3,2 ans de tir effectif. Le fossile « Mars en 64 jours / mois » est <strong>faux</strong> — Mars se compte en années."
    },
    {
     "type": "heading",
     "html": "A. Transit ↔ puissance <span class=\"badge blue\">🔵 le verrou</span>"
    },
    {
     "type": "table",
     "head": [
      "Objectif (Δv = 10 km/s)",
      "Poussée F",
      "Fusion requise",
      "Verdict"
     ],
     "rows": [
      [
       "Canon — 3,2 ans (tir)",
       "15 N",
       "3,0 MW",
       "<span class=\"badge green\">🟢 tenable, au bord</span>"
      ],
      [
       "2 ans",
       "24 N",
       "4,8 MW",
       "<span class=\"badge yellow\">🟡 au-delà du repère DFD</span>"
      ],
      [
       "1 an",
       "48 N",
       "9,6 MW",
       "<span class=\"badge wall\">⛔ hors DFD</span>"
      ],
      [
       "6 mois",
       "95 N",
       "19,3 MW",
       "<span class=\"badge wall\">⛔ irréaliste</span>"
      ]
     ]
    },
    {
     "type": "prose",
     "h": "yellow",
     "html": "<span style=\"color:var(--text-dim)\">Loi : pour diviser le temps par k, il faut ×k sur la poussée → ×k sur le jet → ×k sur la fusion (à v constant). Mars A/R (Δv ≈ 15 km/s) = ×1,5 de plus. Le simulateur ci-dessous pilote cette table en direct.</span>"
    },
    {
     "type": "heading",
     "html": "B. Gravité artificielle (tambour R = 3,69 m) <span class=\"badge green\">🟢</span>"
    },
    {
     "type": "table",
     "h": "green",
     "numLast": true,
     "head": [
      "Grandeur",
      "Valeur"
     ],
     "rows": [
      [
       "ω à 9,6 tr/min",
       "1,005 rad/s"
      ],
      [
       "Gravité a = ω²R",
       "3,73 m/s² = <strong>0,380 g</strong> (≈ Mars)"
      ],
      [
       "Vitesse jante",
       "3,71 m/s"
      ],
      [
       "Coriolis @ marche 1 m/s",
       "2,0 m/s² (~0,2 g latéral)"
      ],
      [
       "tr/min pour 1 g",
       "15,6 → trop haut ⇒ 0,38 g assumé"
      ]
     ]
    },
    {
     "type": "heading",
     "html": "C. Évacuation thermique — radiateurs <span class=\"badge green\">🟢</span>"
    },
    {
     "type": "table",
     "h": "green",
     "head": [
      "Température",
      "Flux (2 faces, ε=0,85)",
      "Surface pour Q = 0,3–0,8 MW"
     ],
     "rows": [
      [
       "500 K",
       "6,0 kW/m²",
       "50–133 m²"
      ],
      [
       "700 K",
       "23,1 kW/m²",
       "13–35 m²"
      ]
     ]
    },
    {
     "type": "prose",
     "html": "<span style=\"color:var(--text-dim)\">Au tir plein canon (3,04 MW fusion, η 37 %) la chaleur fatale monte à <strong>1,92 MW → 85–320 m²</strong> (700–500 K). Masse ≈ 1–3 t : le défi est la <strong>surface à déployer</strong> autour d'un Ø12 m, pas le poids.</span>"
    },
    {
     "type": "heading",
     "html": "D. Bulle magnétique M2P2 <span class=\"badge yellow\">🟡</span>"
    },
    {
     "type": "table",
     "h": "yellow",
     "head": [
      "Rayon bulle",
      "Poussée = P_vent·πR²",
      "t → 10 km/s (150 t)"
     ],
     "rows": [
      [
       "12 km",
       "0,77 N",
       "~62 ans"
      ],
      [
       "40 km",
       "8,55 N",
       "~5,6 ans"
      ],
      [
       "100 km",
       "53,4 N",
       "~0,9 an"
      ]
     ]
    },
    {
     "type": "prose",
     "h": "blue",
     "html": "<span style=\"color:var(--text-dim)\">Champ au bord requis = √(2μ₀·P_vent) = <strong>65 nT</strong> (trivial pour du YBCO). Le verrou n'est pas le champ mais le <strong>gonflage 1/r</strong> par injection de plasma <span class=\"badge blue\">🔵 contesté, jamais démontré</span>. Rôle : complément + bouclier, <strong>jamais moteur principal</strong>.</span>"
    },
    {
     "type": "heading",
     "html": "E. Carburant hélium-3 <span class=\"badge green\">🟢 calcul</span> <span class=\"badge yellow\">🟡 filière</span>"
    },
    {
     "type": "table",
     "numLast": true,
     "head": [
      "Grandeur",
      "Valeur"
     ],
     "rows": [
      [
       "Consommation @ 2 MW fusion",
       "3,4 µg/s = 0,29 g/jour"
      ],
      [
       "Consommation @ 3,04 MW (canon)",
       "5,2 µg/s = 0,45 g/jour de tir"
      ],
      [
       "Mission de base Δv 10 km/s (3,2 ans de tir)",
       "≈ 0,5 kg"
      ],
      [
       "Mars A/R Δv 15 km/s (≈ 5 ans de tir)",
       "≈ 0,8 kg"
      ],
      [
       "Réserve embarquée (Mars A/R, hors marge)",
       "≈ 0,8 kg ≈ <strong>16 M$</strong> (à 20 M$/kg) — corrigé : l’ancienne réserve de 0,1 kg ne couvrait qu’environ 224 jours de tir <span class=\"badge yellow\">🟡</span>"
      ],
      [
       "Stock mondial terrestre",
       "< 15 kg — <span class=\"badge yellow\">🟡 filière dédiée à bâtir</span>"
      ]
     ]
    },
    {
     "type": "heading",
     "html": "F. Propergol — Tsiolkovski (Isp 15 300 s) <span class=\"badge green\">🟢</span>"
    },
    {
     "type": "table",
     "h": "green",
     "numLast": true,
     "head": [
      "Δv",
      "Propergol (masse finale 150 t)"
     ],
     "rows": [
      [
       "10 km/s",
       "10,3 t"
      ],
      [
       "15 km/s (Mars A/R)",
       "15,8 t"
      ]
     ]
    },
    {
     "type": "heading",
     "html": "G. Neutrons D-D → YBCO (durée de vie du liner) <span class=\"badge wall\">⛔ / 🟡 selon l'écran</span>"
    },
    {
     "type": "table",
     "h": "yellow",
     "head": [
      "Taux D-D",
      "Fluence 6 mois @ r = 1 m",
      "vs seuil YBCO (6×10¹⁷)"
     ],
     "rows": [
      [
       "10¹⁶ n/s",
       "1,3×10¹⁸ n/cm²",
       "<span class=\"badge yellow\">🟡 ×2 au-dessus du seuil</span>"
      ],
      [
       "10¹⁷ n/s (≈ 1 % de 3 MW : 7,6×10¹⁶ — le cas réaliste)",
       "1,3×10¹⁹ n/cm²",
       "<span class=\"badge wall\">⛔ mort en quelques mois</span>"
      ]
     ]
    },
    {
     "type": "prose",
     "h": "blue",
     "html": "<span style=\"color:var(--text-dim)\">Terme source corrigé par l'étude 3 : ~1 % de 3 MW en neutrons D-D → <strong>10¹⁶–10¹⁷ n/s</strong> (l'ancien 10¹⁵ était trop bas). Sans écran B₄C d'ombre suffisant, le liner YBCO meurt en mois. Pas fermé. 🔵</span>"
    },
    {
     "type": "heading",
     "html": "H. Mélange des raies He I <span class=\"badge yellow\">🟡 intensités supposées</span>"
    },
    {
     "type": "prose",
     "html": "Addition additive des 6 raies (intensités relatives 100/60/40/50/40/50 %) → <strong>R/G/B ≈ 0,95 / 1,00 / 0,51</strong> : blanc large-bande, aucune raie ne domine (détail en <a href=\"#physique\">Physique &amp; lumière</a>)."
    },
    {
     "type": "callout",
     "h": "green",
     "html": "<b>Recoupé numériquement (01/07)</b> avec les constantes réelles (g₀, σ, μ₀, u). <b>Revu le 23/10 :</b> tableaux G (neutrons) et H (couleur) corrigés ci-dessus. Le propergol F concorde avec le simulateur (propergol = ṁ × temps de combustion). <span class=\"badge green\">🟢</span>"
    }
   ]
  },
  {
   "id": "simulateur",
   "num": "▶",
   "nav": "Simulateur propulsion",
   "title": "Simulateur de propulsion <span class=\"badge blue\" style=\"font-size:11px\">bac à essai</span>",
   "lead": "Bouge les curseurs et regarde le système réagir. Le mécanisme d'honnêteté : <strong>si la puissance de fusion requise dépasse celle du réacteur, le mur s'allume rouge.</strong> Le vaisseau canonique s'affiche déjà « au bord » de son réacteur.",
   "interactive": "sim-propulsion",
   "after": "<p style=\"color:var(--text-dim);font-size:13px\">Essaie : <strong>doubler la poussée double au moins la puissance</strong> (P = ½·F·v) — et si tu le fais en montant <em>v</em>, elle grimpe en v². Et baisse η vers la valeur DFD réaliste (~20–25 %) : la fusion requise crève vite le réacteur. C'est le verdict §10/§12 rendu tangible.</p>",
   "blocks": []
  },
  {
   "id": "bouclier",
   "num": "Poste",
   "nav": "Bouclier (radiations)",
   "title": "Bouclier — SPE + GCR",
   "lead": "Deux menaces, deux logiques. Sources : littérature peer-reviewed (Consensus, juin 2026).",
   "blocks": [
    {
     "type": "table",
     "head": [
      "Point",
      "Verdict"
     ],
     "rows": [
      [
       "SPE vs GCR",
       "deux logiques : magnétique/masse pour SPE ; GCR seulement réduite"
      ],
      [
       "Matériau par kilo",
       "hydrogéné &gt; métal (PE, eau, consommables)"
      ],
      [
       "Sur-blindage Al",
       "réel au-delà de ~20–30 g/cm² (pions/neutrons secondaires) → éviter l'alu épais"
      ],
      [
       "M2P2",
       "top SPE, ~×2 sur GCR, conceptuel → complément"
      ],
      [
       "Budget masse",
       "8–15 t (eau + vivres comptent double)"
      ]
     ]
    },
    {
     "type": "callout",
     "h": "yellow",
     "html": "<b>Principe tenu :</b> la dose GCR est <em>réduite, jamais supprimée</em> — aucun vaisseau réaliste ne la ramène au niveau du sol. Config = multicouche (structure dehors, couche hydrogénée dedans) + storm-shelter eau/vivres. <span class=\"badge yellow\">🟡 55 %</span>"
    }
   ]
  },
  {
   "id": "carburant",
   "num": "Poste",
   "nav": "Carburant (D-³He)",
   "title": "Carburant — deutérium–hélium-3",
   "lead": "Produits chargés (poussée directe), neutrons réduits — mais deux contraintes assumées.",
   "blocks": [
    {
     "type": "table",
     "head": [
      "Point",
      "Verdict"
     ],
     "rows": [
      [
       "Cycle D-³He",
       "retenu : D + ³He → ⁴He (3,6 MeV) + p (14,7 MeV)"
      ],
      [
       "Aneutronique ?",
       "NON strictement — réactions parasites D-D → neutrons résiduels"
      ],
      [
       "Conséquence",
       "justifie le B₄C + le bouclier (voir calcul G)"
      ],
      [
       "Besoin ³He",
       "≈ 0,8 kg/mission Mars A/R ≈ 16 M$ (voir calcul E)"
      ],
      [
       "Stock mondial",
       "&lt; 15 kg → filière (minage lunaire ~2027) à bâtir"
      ]
     ]
    },
    {
     "type": "callout",
     "h": "yellow",
     "html": "<b>Le mur n'est pas la mission unique</b> (≈ 0,8 kg, ~5 % du stock) <b>mais la répétition/flotte.</b> Repli p-¹¹B (aneutronique, bore abondant) mais physique plus dure (ignition 200–400 keV, bremsstrahlung serré). <span class=\"badge yellow\">🟡</span>"
    }
   ]
  },
  {
   "id": "capteurs",
   "num": "Poste",
   "nav": "Capteurs & magnétisme",
   "title": "Capteurs — navigation & attitude",
   "lead": "Navigation inertielle sans GPS, attitude, note magnétosome.",
   "blocks": [
    {
     "type": "table",
     "head": [
      "Sujet",
      "Verdict"
     ],
     "rows": [
      [
       "Nav inertielle levitée (SQUID)",
       "✅ perfs largement suffisantes (~10⁻¹⁰ g/√Hz) — mais cryo 4 K, PAS 77 K"
      ],
      [
       "Magnétorquer",
       "🟡 appoint d'attitude près des planètes seulement"
      ],
      [
       "Propulsion/orientation magnétique en croisière",
       "🔴 close (pousser sur le champ AMBIANT : trop faible) — ne vise PAS la tuyère magnétique, qui éjecte de la masse embarquée"
      ],
      [
       "Magnétosome",
       "🔵 inspiration matériau, écart d'échelle (nm vs µm)"
      ]
     ]
    },
    {
     "type": "callout",
     "h": "yellow",
     "html": "<b>Correction actée :</b> partager la cryo 77 K de l'YBCO est <em>insuffisant</em> pour la nav de pointe → étage 4 K / sub-K dédié à trancher (budget masse cryo)."
    }
   ]
  },
  {
   "id": "precedents",
   "num": "Annexe",
   "nav": "Précédents & état de l'art",
   "title": "Précédents réels (déclassés / publics)",
   "lead": "Aucune découverte magique — un ancrage de crédibilité et ses limites documentées.",
   "blocks": [
    {
     "type": "table",
     "head": [
      "Programme",
      "Apport",
      "Statut"
     ],
     "rows": [
      [
       "M2P2 (NIAC / Winglee)",
       "bulle 10–20 km → 1–3 N pour quelques kW",
       "🔵 gonflage 1/r = « caractéristique innovante » ET « principale difficulté »"
      ],
      [
       "Project Orion",
       "vaisseau nucléaire habité pris au sérieux (gouvernemental)",
       "🔴 voie écartée (illégale, retombées) — mais ancre le concept"
      ],
      [
       "DFD/PFRC (Princeton)",
       "électrons 300–500 eV, plasma stable ~300 ms",
       "🔵 fusion PAS atteinte en 2026 ; + approvisionnement He-3"
      ],
      [
       "AARO 2024",
       "—",
       "aucune techno non-humaine : rien à récupérer"
      ]
     ]
    },
    {
     "type": "heading",
     "html": "Les formes à angles ont un pedigree"
    },
    {
     "type": "table",
     "head": [
      "Précédent",
      "Le bénéfice des angles",
      "Statut"
     ],
     "rows": [
      [
       "Vickers Wellington (1936)",
       "fuselage en <strong>treillis géodésique</strong> (Barnes Wallis) — volait avec des trous énormes",
       "🟢 a volé en escadrilles"
      ],
      [
       "F-117 Nighthawk (1981)",
       "<strong>facettes planes</strong> = renvoi du radar (furtivité)",
       "🟢 opérationnel"
      ],
      [
       "Laser OMEGA (Rochester)",
       "<strong>60 faisceaux en symétrie icosaédrique</strong> — la même que le 60/60",
       "🟢 en service (fusion)"
      ],
      [
       "Polywell (Bussard)",
       "réacteur fusion <strong>polyédrique à cusps magnétiques</strong>",
       "🔵 expérimental"
      ],
      [
       "NASA SUPERball",
       "atterrisseur-treillis anguleux (tensegrité) pour Titan",
       "🔵 prototype"
      ],
      [
       "CubeSats",
       "la forme la plus répandue de l'espace = un cube — <strong>les angles sont gratuits dans le vide</strong>",
       "🟢 des milliers en orbite"
      ]
     ]
    },
    {
     "type": "callout",
     "h": "green",
     "html": "<b>Chacun a pris UN bénéfice des angles</b> (structure, furtivité, symétrie, amortissement). <strong>Personne n'a câblé les arêtes elles-mêmes</strong> — structure ⊕ plasma ⊕ lumière avec partition topologique forcée : l'originalité 60/60 tient (confirmée par audit croisé)."
    },
    {
     "type": "callout",
     "h": "green",
     "html": "<b>Le meilleur takeaway stratégique :</b> la brique la plus <em>buildable</em> n'est ni le moteur ni la bulle — c'est le <strong>prototype de palier maglev 1:10</strong>. La physique (lévitation YBCO) est <span class=\"badge green\">🟢 démontrée en labo</span> ; le prototype reste <strong>à construire</strong> (porte d'entrée vers une école d'ingé). Le moteur fusion et la voile = les paris spéculatifs 🔵."
    }
   ]
  },
  {
   "id": "multimodule",
   "num": "§15",
   "nav": "Multi-module (assemblage)",
   "title": "Multi-module — assembler plusieurs vaisseaux",
   "lead": "Plusieurs coques f2 accrochées ensemble par leurs champs magnétiques. Étude comparative des 7 configurations (issue du viewer <code>ares7_configs</code>).",
   "blocks": [
    {
     "type": "table",
     "head": [
      "Configuration",
      "Maintien",
      "Poussée",
      "Verdict"
     ],
     "rows": [
      [
       "① Paire N↔S (2 modules face-à-face)",
       "🟢 N attire S, très stable",
       "🟡 1 seul réacteur libre",
       "le minimum viable — un module protège l'autre"
      ],
      [
       "② Chaîne alternée",
       "🟢 chaque maillon attire le suivant",
       "🟡 seul le bout pousse",
       "⛔ fléchit (flambage) — souple comme un collier"
      ],
      [
       "③ Anneau fermé",
       "🟢 flux en boucle, auto-stable",
       "⛔ nulle (loi des lacets)",
       "une station, pas un vaisseau"
      ],
      [
       "④ <strong>Anneau ouvert (forme C)</strong>",
       "🟢 même couplage, moins 1 maillon",
       "🟢 le flux s'échappe par la brèche",
       "<strong>🟢 LA forme probable</strong> — tient par magnétisme, pousse par la brèche"
      ],
      [
       "⑤ Halbach (champ dirigé)",
       "🟡 forces latérales complexes",
       "🟡 pas de brèche naturelle",
       "bouclier directionnel puissant, dur à maintenir"
      ],
      [
       "⑥ Parallèle (radeau)",
       "⛔ les dipôles se repoussent",
       "🟢 poussée cohérente max",
       "exige des attaches mécaniques — le magnétisme travaille contre soi"
      ],
      [
       "⑦ Toroïdal",
       "🟡 partiel",
       "⛔ nulle (symétrie)",
       "excellent confinement/bouclier, ne va nulle part"
      ]
     ]
    },
    {
     "type": "callout",
     "html": "<b>Règles retenues :</b> docking <strong>face-à-face</strong> · première coquille = <strong>12 modules</strong> (13 au total = premier nombre de Mackay) · la valeur d'ingénierie du multi-module = la <strong>couverture mutuelle des cusps</strong> (les points faibles polaires), pas la compacité."
    },
    {
     "type": "callout",
     "h": "green",
     "html": "<b>Résolution — l'assemblage passe par les FACES :</b> l'icosaèdre a <strong>10 axes d'ordre 3</strong> (paires de faces centrales opposées, plates) → <strong>1 axe = poussée, 9 axes = amarrage</strong> (18 ports, sas contre sas). <b>Capacité calculée :</b> en contact direct, max <strong>8 modules simultanés</strong> autour d'un central (voisins à 41,8° &lt; 64,7° requis → collision) ; avec des <strong>tunnels ~5,6 m</strong>, les <strong>18 ports</strong> marchent ensemble = grappe de 19. Et <strong>la croissance continue de proche en proche</strong> (simulée par réflexions exactes) : couronne 2 +23, couronne 3 +46 → 77 modules en 3 couronnes, type corail. L'ancienne idée « 12 modules par sommets (Mackay-13) » est <em>remplacée</em> mais gardée en banque."
    },
    {
     "type": "heading",
     "html": "Les 7 configurations — viewer 3D <span class=\"badge green\">🟢 face-pôle corrigé</span>"
    },
    {
     "type": "embed",
     "src": "viewers/multi_configs.html",
     "height": 460,
     "title": "Configurations magnétiques inter-modules",
     "caption": "clique ①→⑦ pour comparer · verdicts maintien/poussée/cusps par configuration"
    },
    {
     "type": "heading",
     "html": "Croissance 1 → 100 000 modules — viewer 3D <span class=\"badge yellow\">🟡 étude</span>"
    },
    {
     "type": "embed",
     "src": "viewers/assemblage.html",
     "height": 460,
     "title": "Assemblage corail",
     "caption": "curseur ou boutons ±1/±10k · croissance par faces réelles (corail) · face-pôle corrigé"
    }
   ]
  },
  {
   "id": "viabilite",
   "num": "§11-12",
   "nav": "Honnêteté & viabilité",
   "title": "Bilan de viabilité — la logique en produit",
   "lead": "La mission = produit des viabilités des modules → plafonnée par le maillon faible.",
   "blocks": [
    {
     "type": "table",
     "h": "green",
     "numLast": true,
     "head": [
      "Module",
      "Viabilité"
     ],
     "rows": [
      [
       "Géométrie & structure (60/60)",
       "~90 %"
      ],
      [
       "Plasma quasi-neutre & champ",
       "~85 %"
      ],
      [
       "Gravité artificielle (rotation)",
       "~85 %"
      ],
      [
       "Thermique / radiateurs",
       "~60 %"
      ],
      [
       "Détachement plasma",
       "~50 %"
      ],
      [
       "Propulsion plasmoïde (mécanisme)",
       "~50 %"
      ],
      [
       "<strong>Réacteur fusion nette</strong>",
       "<strong>~20 % ← dominant</strong>"
      ],
      [
       "<strong>MISSION GLOBALE (produit)</strong>",
       "<strong>🔵 ≈ 2 % (1,5–2,4 %)</strong>"
      ]
     ]
    },
    {
     "type": "callout",
     "variant": "wall",
     "h": "wall",
     "html": "<b>Cadrage honnête à préserver :</b> ≈ 2 %, goulot = réacteur ~15–25 %. Les pourcentages <strong>hiérarchisent les risques — ils ne promettent rien.</strong>"
    },
    {
     "type": "heading",
     "html": "Bilan de masse"
    },
    {
     "type": "table",
     "numLast": true,
     "head": [
      "Poste",
      "Masse"
     ],
     "rows": [
      [
       "Sous-total sec",
       "61–122 t"
      ],
      [
       "+ marge conception (+30 %)",
       "≈ 79–159 t"
      ],
      [
       "Propergol (Isp 10 000–20 000, Δv 15 km/s)",
       "6–26 t"
      ],
      [
       "<strong>Total au départ (Mars A/R)</strong>",
       "<strong>≈ 85–185 t</strong> · référence du dossier : 150 t à vide + 15,8 t ≈ 166 t"
      ]
     ]
    }
   ]
  },
  {
   "id": "frontiere",
   "num": "∂",
   "nav": "Études ouvertes (frontière)",
   "title": "Le front de recherche — 6 études ouvertes",
   "lead": "Les questions encore vivantes, par priorité physique. Chiffrées en première passe — hypothèses affichées. Elles se nourrissent l'une l'autre.",
   "blocks": [
    {
     "type": "callout",
     "html": "<b>Carte des dépendances</b> (améliorer une étude en fait bouger une autre) : <strong>2 thermique → 3 neutrons</strong> (flux paroi ↔ tolérance YBCO) · <strong>3 ← carburant</strong> (taux D-D) · <strong>5 habitabilité → masse → transit &amp; 6 palier</strong> (le gros levier). ⚠ <b>Recoupement croisé :</b> l'insight « 1 ≡ 4 » <strong>ne ferme pas</strong> (×60 sur le débit) ; et les arêtes côté pôle réacteur <strong>cumulent</strong> chaud (2) + irradié (3) + sans ombre B₄C = <strong>l'arête pire-cas</strong>, pas trois risques séparés."
    },
    {
     "type": "heading",
     "html": "1. Détachement du plasma <span class=\"badge blue\">🔵 le nœud</span>"
    },
    {
     "type": "prose",
     "html": "<b>Question :</b> le plasmoïde éjecté doit se décrocher des lignes de champ. <b>Critère corrigé :</b> ce n'est PAS « r_L ≥ R » (faux), mais un critère <strong>dynamique super-Alfvénique</strong> : v_A = B/√(µ₀ρ) ≈ <strong>70 km/s</strong> → le jet à 150 km/s est déjà à <strong>Mach_A ≈ 2,1</strong>, il étire les lignes de champ → détachement plausible <em>plus tôt</em> que le seuil retenu auparavant. <b>Mais le vrai nœud = les électrons :</b> r_L(e⁻) ≈ 0,3 mm (100 eV, 0,1 T) → tournent ~3600× plus vite que les He²⁺ autour des lignes de champ (fréquence de giration) → champ ambipolaire qui <strong>rappelle le jet</strong>. Il faut un jet <strong>quasi-neutre</strong> (électrons emportés, zéro charge d'espace) — LE problème ouvert des tuyères magnétiques. <b>Piste de résolution :</b> le <strong>plasmoïde (FRC)</strong> est quasi-neutre <em>par construction</em> (il emporte ses électrons) → il s'auto-détache ; c'est <strong>pourquoi on choisit le plasmoïde plutôt qu'un faisceau d'ions nu</strong> (qui, lui, subit le rappel ambipolaire). Démontré à petite échelle (ELF/FRC), TRL bas. <span class=\"badge blue\">🔵 plausible — plus un mur net</span>. <b>→ lié à 4.</b>"
    },
    {
     "type": "heading",
     "html": "2. Thermique de l'arête <span class=\"badge yellow\">🟡</span>"
    },
    {
     "type": "prose",
     "html": "<b>Question :</b> l'YBCO (80 K) tient-il à ~1 mm du plasma chaud ? <b>Calcul (fuite radiative, MLI ×11) :</b> paroi 800→1200 K ⇒ cryo 0,6→2,8 kW ⇒ <strong>~15 à 80 kW électriques</strong>. <b>Correction :</b> « 100 eV » (= 1,16 M K en énergie) ne fixe PAS la temp de paroi — c'est le <strong>bilan de flux de chaleur, conditionné par le confinement</strong> (le champ doit garder le plasma décollé de la paroi). Tenable &lt; 1200 K <strong>ssi</strong> le plasma ne touche pas ; aux <strong>points d'injection (nœuds)</strong> il touche → pic local qui crève 1200 K. <span class=\"badge yellow\">🟡</span> <b>Furtif partiel :</b> coque 80 K = 0,23 W/m² (noire IR), radiateurs 500 K = 0,2–0,5 MW (visibles). <b>→ marge YBCO (étude 3).</b>"
    },
    {
     "type": "heading",
     "html": "3. Durée de vie YBCO sous neutrons <span class=\"badge yellow\">🟡</span>"
    },
    {
     "type": "prose",
     "html": "<b>Question :</b> combien de temps le liner survit aux neutrons D-D ? <b>Seuils YBCO :</b> onset ~3×10¹⁸, mort ~1–2×10¹⁹ n/cm² (bon ordre). <b>Correction — terme source élargi :</b> ~1 % de 3 MW en neutrons D-D → <strong>10¹⁶–10¹⁷ n/s</strong> (le poste carburant cite JET ~10¹⁶). À 10¹⁷, fluence 6 mois @ r=1 m = <strong>1,3×10¹⁹</strong> → <strong>mort de l'YBCO en ~mois</strong> sur les arêtes côté pôle réacteur (pas « 4–40 ans » : c'était un source term trop bas qui <em>enterrait</em> le risque). <span class=\"badge yellow\">🟡→🔵</span> <b>→ dépend du taux D-D réel.</b>"
    },
    {
     "type": "heading",
     "html": "4. Pertes aux cusps du dipôle <span class=\"badge blue\">🔵</span>"
    },
    {
     "type": "prose",
     "html": "<b>Question :</b> combien de plasma fuit par les 2 cusps ? <b>Calcul :</b> aire ~2·(r_L/R)² ≈ 5×10⁻⁵ (idéal <em>wiffle-ball</em>, <strong>borne basse</strong> — les vrais cusps fuient plus : cône de perte, β&lt;1, gyro-rayon hybride ~0,5 mm). <b>Le recoupement qui CASSE « 1 ≡ 4 » :</b> cette aire (0,024 m²) à n,v canon donne un débit de fuite <strong>ṁ ≈ 6 g/s</strong> — soit <strong>×60 le canon</strong> (0,1 g/s). Fuite stationnaire ≠ plasmoïde pulsé = <strong>deux mécanismes différents</strong>, budgets de masse incompatibles → à réconcilier avant de dire « même physique ». <b>Et les 2 cusps ne sont pas symétriques :</b> un seul est la tuyère (pôle réacteur) ; l'autre fuit vers le <strong>pôle habitat</strong> = perte parasite + rayonnement vers l'équipage. <b>Résolution (piste) :</b> les 6 g/s sont une <strong>perte parasite</strong>, PAS la poussée — le plasmoïde (0,1 g/s) est un blob pulsé <em>séparé</em>. Pour ramener la fuite au budget : cusp ~<strong>0,8 T</strong> (√60× le champ, faisable YBCO) ou densité au col /60. <span class=\"badge blue\">🔵</span>"
    },
    {
     "type": "heading",
     "html": "5. Habitabilité — 9,6 tr/min tolérable ? <span class=\"badge yellow\">🟡 le gros levier</span>"
    },
    {
     "type": "prose",
     "h": "yellow",
     "html": "<b>Calcul :</b> gradient tête-pieds sur 1,8 m = <strong>49 %</strong> (pieds 0,38 g / tête 0,19 g) ; Coriolis 0,20 g latéral ; 9,6 tr/min ≫ confort classique 2–4 tr/min (0,38 g confortable demanderait R ≈ 21 m, pas 3,69). <b>Verdict :</b> à Ø7,38 m l'habité est <strong>marginal → penche DRONE</strong>. <b>→ LE GROS levier :</b> passer en drone ne largue pas que la rotation (20–35 t) mais aussi ECLSS, blindage GCR équipage, storm-shelter, vivres → <strong>~40–70 t largués</strong> → transit nettement meilleur, ET ça rend les études <strong>2, 3 et 5 caduques</strong> (plus d'YBCO ni d'équipage à protéger côté pôle). IP intacte : le 60/60 est <em>agnostique à l'équipage</em>."
    },
    {
     "type": "heading",
     "html": "6. Palier maglev 1:10 <span class=\"badge green\">🟢 le buildable</span>"
    },
    {
     "type": "prose",
     "html": "<b>Calcul :</b> I_tambour ≈ 1,0×10⁵ kg·m² ; couple gyroscopique à un slew de 0,001 rad/s = <strong>103 N·m</strong> (gérable en CMG — c'est ce qui a tué l'Architecture A rigide, ×3 au-dessus ; l'Archi B flottante le résout) ; énergie de mise en rotation = 52 kJ (triviale). <b>Résultat :</b> physique éprouvée (lévitation YBCO en labo) → <strong>maquette 1:10 réellement constructible</strong> (spin + mesure de raideur). 🟢 <b>→ conditionné par l'étude 5</b> (si drone, palier non requis)."
    },
    {
     "type": "heading",
     "html": "★ Bifurcation : habité vs drone — la décision qui cascade"
    },
    {
     "type": "table",
     "head": [
      "Branche",
      "Masse",
      "Fusion / transit (Δv=10)",
      "Conséquences"
     ],
     "rows": [
      [
       "<strong>Habité</strong> (Ø7,38 m)",
       "~150 t",
       "3,04 MW / 3,2 ans <span class=\"badge yellow\">au bord</span>",
       "confort marginal (gradient 49 %) → 0,38 g confortable exige R ≈ 21 m = <em>un autre vaisseau</em>"
      ],
      [
       "<strong>Drone</strong>",
       "~90 t",
       "<strong>~1,8 MW</strong> / 3,2 ans (poussée réduite à 9 N, ṁ 0,06 g/s → a = 10⁻⁴ m/s² comme le 150 t, même Δv de mission) <span class=\"badge green\">dans l'enveloppe</span>, ou <strong>1,9 an</strong> @ 3 MW",
       "supprime le problème GCR équipage ; rend 2/3/5 caducs ; palier optionnel ; <strong>IP (60/60) intacte</strong>"
      ]
     ]
    },
    {
     "type": "callout",
     "h": "green",
     "html": "<b>Le chiffre qui tranche :</b> le drone fait <strong>rentrer la propulsion DANS l'enveloppe du réacteur</strong> (1,8 MW &lt; 2–3 MW du DFD) — la mission passe de « au bord » à réaliste, ou devient ~40 % plus rapide. <b>Recommandation ingénieur :</b> à Ø7,38 m, le <strong>drone/sonde est la branche cohérente</strong> ; l'habité reste possible mais impose un vaisseau bien plus grand. Choix réversible, l'IP ne dépend pas de l'équipage."
    },
    {
     "type": "callout",
     "variant": "wall",
     "h": "wall",
     "html": "<b>Recoupement croisé (02/07).</b> Corrections appliquées : #1 critère faux → super-Alfvénique + neutralisation des électrons ; #3 terme source neutrons élargi (mort YBCO possible en <em>mois</em>) ; #4 « 1≡4 » ne ferme pas (×60). À propager : le <strong>duty 15 %</strong> pondère aussi les charges thermiques/neutron (2/3/4). <b>⚠ Les tags §12 « détachement 50 % / mécanisme 50 % » sont peut-être trop généreux :</b> tant que le détachement net n'est pas prouvé, la propulsion est un <strong>MUR potentiel</strong>, pas un 50 %. À trancher : <strong>habité/drone</strong> (la direction) + le <strong>×60</strong> (y a-t-il une mission tout court)."
    }
   ]
  },
  {
   "id": "habitat",
   "num": "⌂",
   "nav": "Habitat & équipage (étude)",
   "title": "Habitat & équipage — peut-on embarquer des humains ?",
   "lead": "Étude du 21-22/10/2026, <strong>hors document déposé à l'INPI</strong> (proposition). Chiffres recoupés par une 2ᵉ IA. Règle de l'auteur : <em>rien n'est fait pour une seule raison</em>, et rien d'inventé : chaque élément est classé 🟢🟡🔵⛔.",
   "blocks": [
    {
     "type": "callout",
     "h": "yellow",
     "html": "<b>Verdict :</b> la <strong>place</strong> existe 🟢 (2 personnes, 3 au plus) — mais la <strong>dose de rayons cosmiques</strong> ⛔ : avec ARÈS-7 tel quel, même en poussée <em>continue</em> (2,7 à 5 ans), un équipage recevrait <strong>×2 à ×5</strong> la limite NASA de carrière — et au duty de 15 % du jeu de chiffres de référence (≈ 33 ans calendaires) ce serait encore ~7 fois pire. → ARÈS-7 vole en <strong>drone</strong> tant que le réacteur ne fait pas ×3 à ×5,5. Le verrou reste la densité de puissance. <b>Reste à faire 🟡 :</b> un bilan de survie complet (masses et consommations) et le détail des hypothèses du calcul de dose."
    },
    {
     "type": "embed",
     "src": "viewers/habitat.html",
     "height": 540,
     "title": "Habitat 3D",
     "caption": "boutons : coque ouverte · « Scène » vie à bord / alerte éruption · « Mode » croisière / posé sur Mars (vaisseau visé seulement)"
    },
    {
     "type": "heading",
     "html": "La logique : la gravité là où le corps en a besoin, l'apesanteur pour le reste"
    },
    {
     "type": "table",
     "head": [
      "Élément",
      "Rôles (jamais un seul)",
      "Statut"
     ],
     "rows": [
      [
       "Tambour tournant (sol R 3,69 m, 9,6 tr/min)",
       "0,38 g pour dormir, manger, se laver, le sport, les soins",
       "🟢 physique · 🟡 confort"
      ],
      [
       "Anneau d'eau autour (tourne à l'envers, 3,6 tr/min)",
       "2ᵉ roue anti-gyroscope + bouclier + réserve d'eau + tampon thermique",
       "🟡 à dimensionner"
      ],
      [
       "Bulle centrale fixe (idée de l'auteur)",
       "poste de commande + abri anti-éruption (le coin le mieux protégé)",
       "🟢 géométrie · 🟡 charge du moyeu"
      ],
      [
       "Pont haut fixe (2,13 m)",
       "atelier, air/eau ; étage de vie une fois posé",
       "🟢"
      ],
      [
       "Pont bas fixe = soute + labo d'analyse",
       "fret sur l'axe (symétrique) + blindage entre réacteur et équipage ; échantillons en boîte à gants",
       "🟢 / 🟡"
      ],
      [
       "Couchettes dans l'axe · douche fermée · tapis dans l'axe",
       "gravité uniforme · l'eau part de 3 m de biais (Coriolis) · courir dans le sens de rotation changerait le poids",
       "🟢 vérifié"
      ],
      [
       "Déchets compactés en tuiles (NASA HMC)",
       "moins de volume + blindage qui grandit en route",
       "🟢"
      ],
      [
       "Se poser / repartir",
       "seulement le vaisseau visé (2 MN) — jet ~110 GW au sol : Lune/Mars, pas la Terre habitée",
       "🔵 / ⛔ Terre"
      ]
     ]
    },
    {
     "type": "heading",
     "html": "Les planches (dossier « ingénieur »)"
    },
    {
     "type": "prose",
     "html": "<p style=\"margin-bottom:10px\"><a href=\"assets/habitat/ARES7-habitat-planches-A-E.pdf\" target=\"_blank\" rel=\"noopener\"><strong>↓ Télécharger les 5 planches (PDF)</strong></a> — cotes, nomenclature, cartouche.</p><a href=\"assets/habitat/croquis-1-coupe.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/habitat/croquis-1-coupe.png\" alt=\"Planche A — coupe générale\" loading=\"lazy\" style=\"width:100%;border:1px solid var(--line);border-radius:10px;margin:6px 0 14px\"></a><a href=\"assets/habitat/croquis-5-poste-de-commande.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/habitat/croquis-5-poste-de-commande.png\" alt=\"Planche D — poste de commande\" loading=\"lazy\" style=\"width:100%;border:1px solid var(--line);border-radius:10px;margin:6px 0 14px\"></a><a href=\"assets/habitat/croquis-4-amenagement.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/habitat/croquis-4-amenagement.png\" alt=\"Planche C — élévation développée du tambour\" loading=\"lazy\" style=\"width:100%;border:1px solid var(--line);border-radius:10px;margin:6px 0 14px\"></a><a href=\"assets/habitat/croquis-3-dose.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/habitat/croquis-3-dose.png\" alt=\"Planche E — la dose\" loading=\"lazy\" style=\"width:100%;border:1px solid var(--line);border-radius:10px;margin:6px 0 14px\"></a>"
    }
   ]
  },
  {
   "id": "banque",
   "num": "⌘",
   "nav": "Banque d'idées",
   "title": "Banque d'idées — on ne jette rien d'exploitable",
   "lead": "Chaque idée du corpus, gardée avec son statut : pour ne jamais perdre une piste ni re-tenter une impasse. Les branches concurrentes (ex. habité/drone) restent <strong>toutes deux ouvertes</strong>. <strong>Toute idée est bonne à prendre</strong> — les neuves aussi.",
   "blocks": [
    {
     "type": "heading",
     "html": "🆕 Idées neuves — générées 02/07, à explorer"
    },
    {
     "type": "table",
     "head": [
      "Idée neuve",
      "Angle / ce que ça multiplexe"
     ],
     "rows": [
      [
       "Vectorisation de poussée par tir asymétrique des nœuds φ",
       "propulsion ⊕ attitude, sans propulseurs séparés 🔵"
      ],
      [
       "Cusp régénératif",
       "recapturer la fuite parasite (pôle habitat) → alimente la bulle M2P2 : <strong>perte → ressource</strong> 🔵"
      ],
      [
       "Neutrons → tritium",
       "couche Li derrière le B₄C : breeding + chaleur → <strong>le problème #3 devient du carburant</strong> 🔵"
      ],
      [
       "Carburant D-³He spin-polarisé",
       "+~50 % de section efficace ET oriente l'émission neutronique loin des arêtes (booste le réacteur, soulage #3) 🔵"
      ],
      [
       "TPV dans le gap de l'arête",
       "récupérer une part des 15–80 kW de chaleur fatale en électricité 🅿️"
      ],
      [
       "La coque 60/60 = antenne géodésique",
       "le réseau conducteur = réseau phasé comms lointaine : <strong>la structure EST l'antenne</strong> 🅿️"
      ],
      [
       "Métrologie par les raies He I",
       "longueurs d'onde connues = règle optique embarquée (nav / mesure de déformation) 🅿️"
      ],
      [
       "Tether électrodynamique — près des planètes",
       "Δv sans propergol (Lorentz) ; planètes SEULEMENT (le mur croisière tient) 🅿️"
      ],
      [
       "Tuyère magnétique à produits de fusion D-³He — <em>intuition de l’auteur, 21/10/2026</em>",
       "éjecter directement une partie des produits de fusion (He-4 ≈ 13 000 km/s, protons ≈ 53 000 km/s) par une tuyère magnétique → vₑ de 10³ à 10⁴ km/s (concept Direct Fusion Drive / PFRC, Princeton). Permis : l’impulsion vient de la masse embarquée (≠ « champ ambiant »). <strong>Prix :</strong> P_jet = ½·F·vₑ → à 2 MN (1,36 g) il faut ≥ 1,5 TW (~10× le canon) ; compatible 50–150 GW seulement vers ~0,14 g → <strong>Mars au plus près en ~5 jours</strong>. Le verrou « vitesse d’éjection » ramène au verrou « densité de puissance » (recoupé par une 2ᵉ IA, 21/10). 🔵"
      ],
      [
       "Drone-porteur",
       "essaim de sondes déployées via les faces ouvertes (radiolaires) 🅿️"
      ],
      [
       "Plasma-aéro / MHD en atmosphère — <em>la vision de l’auteur</em>",
       "ioniser l'air avec les arêtes 60/60 → enveloppe de plasma qui remodèle le choc, coupe la traînée, adoucit le bruit. « La forme est la clé » = réseau générateur de plasma, PAS profil métallique (la coque nue est un corps émoussé à grosse traînée). Mécanisme (formulation de l’auteur) : l'air est écarté/chauffé EN AMONT → poche raréfiée où le son local est plus rapide → le véhicule reste subsonique dans sa poche → AUCUNE onde de choc ne se forme (pas de bang). <strong>Lien avec le déplacement (vision de l’auteur) :</strong> le silence (ni choc ni bruit) et la façon de se déplacer sont liés — soit un seul et même mécanisme, soit deux solutions distinctes qui se complètent ; c’est peut-être la clé.Apparenté au dépôt d'énergie en amont (labo : Ajax, plasma aerodynamics). 🔵 non démontré à l'échelle véhicule ; coût énergétique de l'enveloppe = le verrou"
      ],
      [
       "<strong>Le principe de la bulle universelle</strong> — <em>convergence de l’auteur</em>",
       "ne jamais toucher le milieu : fabriquer une enveloppe qui l'écarte. Eau = <strong>supercavitation</strong> (🟢 opérationnel, ×1000 sur la traînée) · air = plasma-aéro (🔵 labo) · espace = M2P2 (🔵 NIAC). Trois milieux, un concept — et ARÈS-abysses le connecte"
      ],
      [
       "Rockoon — montée par ballon (Archimède)",
       "la seule « antigravité » réelle : ballon → 35 km (99,3 % de l'air en dessous, feu/traînée ÷150) puis allumage. 🟢 réel depuis 1952 (Van Allen). Module 2-3 t = 1 ballon NASA existant ; vaisseau entier = méga-ballon ~12 M m³ 🟡. Logistique de montée des pièces"
      ],
      [
       "Collerette IDSS dans la face-sas",
       "standard mondial d'amarrage (passage ~0,8 m ≪ écoutille 2,1 m) → compatible Dragon/Starliner/stations commerciales (l'ISS elle-même désorbitée ~2030) 🟢 choix de conception"
      ],
      [
       "<strong>Continuité inter-modules — amarrage « arête sur arête »</strong>",
       "la réflexion miroir fixe le plan de la face-sas → les 3 arêtes + 3 nœuds des deux faces amarrées COÏNCIDENT exactement (fait géométrique) → cette coïncidence permet des raccords arête-à-arête (plasma/courant/chaleur/données) en contact direct ; en amarrage par tunnel, la continuité passe par des lignes dans le tunnel (l’écoutille ne perce aucune arête) → les réseaux 60/60 de la grappe = UN seul système circulatoire (plasma/courant/chaleur/données), vannes hexavalentes = douanes ; un module au réacteur mort est nourri par ses voisins. Soleau ext. 17"
      ],
      [
       "<strong>Nœuds hexavalents actifs = réseau auto-cicatrisant</strong> — <em>trouvaille de l’auteur (« les flux se croisent »)</em>",
       "les 30 sommets milieux = carrefours 2R+4I où les flux se croisent ; 24 aller / 36 retour sur 30 nœuds → flux inégaux → VANNES actives : équilibrage + reroutage (réseau 4-régulier connexe après perte de toute arête, vérifié 60/60) + mécanisme vectorisation + re-ionisation. Monter en fréquence casse le 60/60 (f3=3 longueurs, f4=6) → f2 unique. Soleau ext. 16"
      ],
      [
       "Se poser : OUI sur les petits corps",
       "F=15 N porte 150 t si g ≤ 1e-4 : <strong>Bennu ✓, Itokawa ✓, 67P en drone ✓</strong> (amarrage doux type Philae) = exactement les stations-service ISRU ; gros corps ✗ (Terre ×98 000, structure ×10 000) → navettes 🟢 calculé"
      ]
     ]
    },
    {
     "type": "heading",
     "html": "🟢 Exploitables — acquis ou actif"
    },
    {
     "type": "table",
     "h": "green",
     "head": [
      "Idée",
      "Note"
     ],
     "rows": [
      [
       "Partition 60/60 forcée (structure ⊕ canal plasma)",
       "l'actif IP central"
      ],
      [
       "Arête à 6 fonctions (coupe multicouche)",
       "cœur du Soleau"
      ],
      [
       "Circuit plasma fermé 24/60/36",
       "résout la parité de graphe"
      ],
      [
       "Face-pôle (axe d'ordre 3)",
       "vérifié — pas vertex-pôle"
      ],
      [
       "Plasmoïde FRC quasi-neutre = auto-détachement",
       "résout le faisceau d'ions"
      ],
      [
       "Palier maglev supra 1:10",
       "LE buildable (physique éprouvée) — dimensionné (v8.0) : SMB + NFAL ≈ <strong>14 kg / 10 W continu</strong>"
      ],
      [
       "Lumière He I (raies additives) — sans halo dans le vide",
       "mélange RGB recalculé ; couleur réelle à mesurer 🟡"
      ],
      [
       "Gravité par rotation 0,38 g",
       "a = ω²R vérifié"
      ],
      [
       "Gravité externe non-interférente par chute libre — <em>principe de l’auteur</em>",
       "en orbite = apesanteur, marée négligeable (1,6×10⁻⁶ g) ; ne pas hover/s'arrêter dans un puits (15 N vs 1,5 MN) mais le TRAVERSER = boost (Oberth) ; gravité propre découplée (rotation). ⛔ pas d'antigravité — inutile, la chute libre suffit"
      ],
      [
       "Effet Oberth — brûler au fond du puits <em>— intuition de l’auteur confirmée</em>",
       "même Δv rend ×11 d'énergie à Jupiter, ×109 en frôlant le Soleil (emprunté à la planète, conservation OK) → un puits est une RESSOURCE si on le TRAVERSE, pas un mur"
      ],
      [
       "Faces bi-fonction (réfléchissant Soleil / radiateur ombre)",
       "rien pour une seule raison"
      ],
      [
       "Échange thermique à contre-courant (biomimétique)",
       "garde l'YBCO froid"
      ],
      [
       "Eau + vivres = blindage double-emploi",
       "écran hydrogéné GCR"
      ],
      [
       "Assemblage modulaire (2 arêtes + 1 nœud répétés)",
       "monté en orbite"
      ]
     ]
    },
    {
     "type": "heading",
     "html": "🟡 À creuser"
    },
    {
     "type": "table",
     "h": "yellow",
     "head": [
      "Idée",
      "Note"
     ],
     "rows": [
      [
       "Thermique de l'arête (cryo + confinement)",
       "étude 2"
      ],
      [
       "Durée de vie YBCO sous neutrons",
       "étude 3 — arête pire-cas"
      ],
      [
       "Bifurcation habité / drone",
       "les DEUX gardées ouvertes"
      ],
      [
       "Cusp ~0,8 T pour fermer le budget de fuite",
       "ou densité /60"
      ],
      [
       "Concentration de flux aux 2 pôles (Halbach / miroir magnétique) — <em>intuition de l’auteur</em>",
       "LE mécanisme du cusp 0,8 T : aire du col ×8 → rayon /2,8 ; concentre aussi = <strong>miroir</strong> → réduit les pertes cusp (#4), + bouclier directionnel. Prix : forces ~B² (2,5 bar à 0,8 T, gérable)"
      ],
      [
       "M2P2 = bouclier SPE (excellent) + appoint",
       "jamais moteur principal"
      ],
      [
       "Storm-shelter eau anti-éruption",
       "volume protégé mutualisé"
      ],
      [
       "<strong>Face-sas multifonction</strong> — <em>manque repéré par l’auteur</em>",
       "entrer/sortir SANS couper d'arête : porte = panneau d'une face centrale (Ø ≤ 2,1 m, 18 candidates, 2 retenues à l'équateur) ; sas ⊕ port d'amarrage (docking §15 = sas contre sas) ⊕ cadre-raidisseur ⊕ soute ; chemin pressurisé tambour → moyeu dé-spinné → sas ; ~0,4 kg d'air/sortie"
      ],
      [
       "Multi-module anneau-C ouvert",
       "poussée + couverture des cusps"
      ]
     ]
    },
    {
     "type": "heading",
     "html": "🔵 Spéculatives — réelles mais non prouvées"
    },
    {
     "type": "table",
     "h": "blue",
     "head": [
      "Idée",
      "Note"
     ],
     "rows": [
      [
       "Réacteur DFD/PFRC à fusion nette",
       "le goulot dominant (~15–25 %)"
      ],
      [
       "Détachement net du plasmoïde à l'échelle",
       "TRL bas (ELF/FRC petite échelle)"
      ],
      [
       "Confinement / pertes aux cusps",
       "borne basse wiffle-ball"
      ],
      [
       "Bulle M2P2 — gonflage 1/r",
       "contesté, jamais démontré"
      ],
      [
       "Aérocapture plasma pour Mars (M2P2 4e rôle)",
       "à quantifier"
      ],
      [
       "<strong>Vaisseau à liberté totale — la vision fondatrice, chiffrée (vitesse de météore, sans la traînée)</strong>",
       "se pose partout + file sans bruit ni fumée = cahier des charges : poussée 2 MN (TWR 1,36), éjection plasma (sans fumée ✓ déjà le choix ARÈS-7), bulle plasma anti-feu/bruit (réduction), et LE mur : <strong>50–150 GW embarqués dans 150 t</strong> = ×5 000–30 000 la densité de puissance du DFD. <strong>PAS interdit par la physique</strong> (contrairement au zéro-friction) — un mur de densité de puissance + thermique. La géométrie 60/60, la bulle et les sas survivent tels quels : ARÈS-7 = l'étape 1 du même vaisseau"
      ]
     ]
    },
    {
     "type": "heading",
     "html": "⛔ Enterrées — notées pour NE PAS re-tenter"
    },
    {
     "type": "table",
     "h": "wall",
     "head": [
      "Idée morte",
      "Pourquoi"
     ],
     "rows": [
      [
       "Antigravité / warp / vol magnétique atmosphérique / décollage sol",
       "hors physique (mur Newton) — bilan des essais : Podkletnov non répliqué (NASA : nul), lifters = vent ionique (nul dans le vide), Hutchison/Searl = artefacts, AARO 2024 = rien, <strong>ALPHA-g CERN 2023 : même l'antimatière TOMBE</strong>. Seule « antigravité » réelle observée = énergie noire (cosmologique, non pilotable 🔵). Hypothèse-cadre « admettons » : résoudrait hover/décollage/puits, mais PAS le feu atmosphérique (l'air ≠ gravité) ni les rayons cosmiques (particules chargées → c'est le bouclier magnétique M2P2 qui fait la « bulle », déjà au design). Jamais au Soleau (crédibilité)."
      ],
      [
       "Propulsion par boucle interne fermée",
       "loi des lacets → poussée nulle"
      ],
      [
       "Faisceau d'ions nu",
       "rappel ambipolaire → plasmoïde à la place"
      ],
      [
       "Topologie « Option A étoile »",
       "degré impair 5 → circuit impossible"
      ],
      [
       "Vertex-pôle",
       "contredit le §4 (4 arguments)"
      ],
      [
       "Fente nanométrique 50–200 nm",
       "diffracte → détruit le blanc"
      ],
      [
       "Raie unique jaune / verte",
       "fossile photométrie (le mix = blanc)"
      ],
      [
       "Coque titane · réacteur central · « oignon »",
       "→ B₄C-SiC · polaire · concentrique"
      ]
     ]
    }
   ]
  },
  {
   "id": "sources",
   "num": "📚",
   "nav": "Sources",
   "title": "Sources — d'où viennent les chiffres",
   "lead": "Les références publiques sur lesquelles s'appuie le dossier. Les calculs propres au projet sont refaits dans <a href=\"#calculs\">Les calculs</a>.",
   "blocks": [
    {
     "type": "table",
     "head": [
      "Sujet",
      "Référence",
      "Utilisé pour"
     ],
     "rows": [
      [
       "Limite de dose des astronautes",
       "<a href=\"https://www.nasa.gov/wp-content/uploads/2023/03/radiation-protection-technical-brief-ochmo.pdf\" target=\"_blank\" rel=\"noopener\">NASA-STD-3001, vol. 1 (révision 2022) — note technique NASA OCHMO</a>",
       "600 mSv sur une carrière (habitat, planche E)"
      ],
      [
       "Dose en croisière vers Mars",
       "<a href=\"https://doi.org/10.1126/science.1235989\" target=\"_blank\" rel=\"noopener\">Zeitlin C. et al., Science 340, 1080 (2013), doi:10.1126/science.1235989</a>",
       "mesures de l'instrument RAD de Curiosity pendant le voyage"
      ],
      [
       "Dose au sol de Mars",
       "<a href=\"https://doi.org/10.1126/science.1244797\" target=\"_blank\" rel=\"noopener\">Hassler D. M. et al., Science 343 (2014), doi:10.1126/science.1244797</a>",
       "0,64 mSv/j au sol ; 1,84 mSv/j en croisière"
      ],
      [
       "Réacteur DFD / PFRC (D-³He)",
       "<a href=\"https://ntrs.nasa.gov/citations/20190031807\" target=\"_blank\" rel=\"noopener\">Thomas S., Paluszek M., Cohen S., « Fusion-Enabled Pluto Orbiter and Lander », NASA NIAC (2017-2019)</a>",
       "repères du réacteur à fusion (puissance, poussée par MW)"
      ],
      [
       "Bulle magnétique M2P2",
       "<a href=\"https://doi.org/10.1029/1999JA000334\" target=\"_blank\" rel=\"noopener\">Winglee R. M. et al., J. Geophys. Res. 105 (2000), doi:10.1029/1999JA000334</a>",
       "bouclier magnétique contre les éruptions"
      ],
      [
       "Raies de l'hélium",
       "<a href=\"https://physics.nist.gov/PhysRefData/ASD/lines_form.html\" target=\"_blank\" rel=\"noopener\">NIST Atomic Spectra Database</a>",
       "longueurs d'onde He I (lumière des arêtes)"
      ],
      [
       "Déchets en tuiles de blindage",
       "<a href=\"https://www.nasa.gov/ames/space-biosciences/what-is-nasas-heat-melt-compactor\" target=\"_blank\" rel=\"noopener\">NASA Ames — Heat Melt Compactor</a>",
       "habitat : déchets compactés = blindage"
      ],
      [
       "Douche fermée en apesanteur",
       "NASA, station Skylab (1973)",
       "habitat : douche fermée à aspiration"
      ],
      [
       "Recyclage de l'eau",
       "NASA, système de survie de l'ISS (≈ 98 % de l'eau récupérée, 2023)",
       "habitat : bilan eau / oxygène"
      ],
      [
       "Durée record en apesanteur",
       "V. Polyakov, 437 jours à bord de Mir (1994-1995)",
       "habitat : limite de l'apesanteur prolongée"
      ],
      [
       "Méthode",
       "Chiffres recalculés avec les constantes réelles, puis recoupés par plusieurs IA (relectures 2026) ; littérature sur le blindage via l'outil Consensus (juin 2026)",
       "tout le dossier"
      ]
     ]
    }
   ]
  },
  {
   "id": "lexique",
   "num": "A–Z",
   "nav": "Lexique",
   "title": "Lexique — les mots techniques, expliqués simplement",
   "lead": "Pour que tout le monde puisse lire le dossier. Les termes exacts sont gardés partout (les gens du domaine en ont besoin) — ici, leur traduction en français courant.",
   "blocks": [
    {
     "type": "table",
     "head": [
      "Terme",
      "En clair"
     ],
     "rows": [
      [
       "<strong>Géodésique f2</strong>",
       "une sphère construite en triangles (comme un ballon de foot) obtenue en subdivisant un icosaèdre (20 faces) une fois — d'où 42 sommets, 120 arêtes, 80 faces"
      ],
      [
       "<strong>Nœud φ (phi)</strong>",
       "l'un des 12 sommets « spéciaux » de la coque (5 arêtes au lieu de 6), placés selon le nombre d'or φ ≈ 1,618 — ce sont les distributeurs de plasma"
      ],
      [
       "<strong>Plasma</strong>",
       "un gaz si chaud que ses atomes perdent leurs électrons — il devient conducteur et répond aux aimants (4ᵉ état de la matière : le Soleil, les néons, la foudre)"
      ],
      [
       "<strong>Plasmoïde / FRC</strong>",
       "une « bulle » de plasma auto-organisée qui garde sa cohésion — le vaisseau en éjecte des milliers par seconde pour se propulser, comme des balles de fusil en gaz"
      ],
      [
       "<strong>YBCO / supraconducteur</strong>",
       "une céramique qui, refroidie sous −181 °C, conduit le courant SANS résistance — parfaite pour faire des aimants puissants qui ne chauffent pas"
      ],
      [
       "<strong>Isp (impulsion spécifique)</strong>",
       "le « rendement kilométrique » d'un moteur : combien de poussée par kilo de carburant. Plus c'est haut, plus on va loin avec peu (fusée classique ~450 s ; ARÈS-7 ~15 300 s)"
      ],
      [
       "<strong>Δv (delta-v)</strong>",
       "le « budget vitesse » d'une mission : la somme des changements de vitesse nécessaires (aller sur Mars ≈ 15 km/s aller-retour)"
      ],
      [
       "<strong>Duty cycle</strong>",
       "la fraction du temps où le moteur est allumé (15 % = il tire 15 % du temps, le reste il plane)"
      ],
      [
       "<strong>Cusp</strong>",
       "les deux « entonnoirs » aux pôles d'un champ magnétique en forme de donut — les seuls endroits où le plasma peut entrer/sortir : à la fois le point faible et la tuyère"
      ],
      [
       "<strong>Dipôle</strong>",
       "la forme de champ magnétique la plus simple (comme la Terre ou un barreau aimanté) : deux pôles, des boucles fermées entre les deux"
      ],
      [
       "<strong>M2P2 / bulle magnétique</strong>",
       "une « voile » de champ magnétique gonflée par du plasma autour du vaisseau — dévie les radiations (bouclier) et prend un peu de poussée du vent solaire"
      ],
      [
       "<strong>D-³He (deutérium–hélium-3)</strong>",
       "le carburant de fusion choisi : il produit surtout des particules chargées (utilisables) et peu de neutrons (nocifs) — mais l'hélium-3 est rarissime sur Terre"
      ],
      [
       "<strong>GCR / SPE</strong>",
       "les deux radiations de l'espace : GCR = rayons cosmiques permanents (on les réduit, jamais à zéro) ; SPE = éruptions solaires ponctuelles (on s'en abrite)"
      ],
      [
       "<strong>Effet Oberth</strong>",
       "brûler son carburant au plus profond d'un puits de gravité (au plus vite) rend plus d'énergie — plonger vers une planète et pousser au ras = boost gratuit"
      ],
      [
       "<strong>ISRU</strong>",
       "« faire le plein sur place » : récolter eau/carburant sur les comètes, astéroïdes, lunes au lieu de tout emporter"
      ],
      [
       "<strong>TRL</strong>",
       "échelle de maturité d'une technologie (1 = idée sur papier, 9 = ça vole en mission réelle)"
      ],
      [
       "<strong>e-Soleau</strong>",
       "dépôt horodaté à l'INPI (~15 €) qui prouve QUE vous avez eu l'idée à une date donnée — une preuve d'antériorité, pas un brevet"
      ],
      [
       "<strong>Canon</strong> (jargon du projet)",
       "la version officielle du projet — tout le reste est brouillon de travail"
      ],
      [
       "<strong>IDSS</strong>",
       "le standard international d'amarrage (NASA/ESA/JAXA/Roscosmos) : un « port USB » commun à tous les vaisseaux — passage ~0,8 m"
      ],
      [
       "<strong>Rockoon</strong>",
       "fusée lancée depuis un ballon stratosphérique (~35 km) : on monte en silence au-dessus de 99 % de l'air AVANT d'accélérer"
      ],
      [
       "<strong>Supercavitation</strong>",
       "une bulle de gaz générée autour d'un objet sous l'eau — la traînée chute d'un facteur ~1000 (torpilles réelles à 370 km/h)"
      ],
      [
       "<strong>Icosidodécaèdre</strong>",
       "le polyèdre formé par les 30 nœuds-milieux — son réseau supporte 3 coupures simultanées sans se déconnecter"
      ]
     ]
    }
   ]
  }
 ]
};
