/* Balzac Bangkok - i18n dictionary and language engine */

(function () {
  "use strict";

  var LANG_KEY = "cp_lang";
  var DEFAULT_LANG = "fr";
  var LANGS = ["en", "fr", "th"];

  var dict = {
    fr: {
      "ribbon.text": "Maquette de site cr\u00e9\u00e9e pour le Balzac par Mikaro Studio. Ce n'est pas encore le site officiel.",
      "ribbon.close": "Fermer ce message",

      "nav.about": "A Propos",
      "nav.librairie": "Librairie",
      "nav.cafe": "Caf\u00e9",
      "nav.galerie": "Galerie",
      "nav.events": "\u00c9v\u00e9nements",
      "nav.contact": "Contact",
      "nav.cta": "Nous rendre visite",
      "float.txt": "\u00c9crivez-nous",
      "hamburger.label": "Menu",
      "drawer.close": "Fermer le menu",

      "title.home": "Balzac Bangkok - Salon litt\u00e9raire au c\u0153ur de Bangkok",
      "title.librairie": "La librairie - Balzac Bangkok",
      "title.cafe": "Le caf\u00e9 - Balzac Bangkok",
      "title.galerie": "La galerie - Balzac Bangkok",
      "title.events": "\u00c9v\u00e9nements - Balzac Bangkok",
      "title.contact": "Contact - Balzac Bangkok",

      "h.eyebrow": "LIBRAIRIE \u00b7 CAF\u00c9 \u00b7 GALERIE",
      "h.h1": "Un salon litt\u00e9raire au c\u0153ur de Bangkok",
      "h.sub": "Fond\u00e9 par une famille d'\u00e9crivains et de voyageurs suisses, le Balzac r\u00e9unit une librairie francophone, un caf\u00e9 et une galerie d'art, \u00e0 deux pas de l'ambassade de France, dans le quartier des \u00e9meraudes.",
      "h.cta1": "Voir les \u00e9v\u00e9nements",
      "h.cta2": "Vendre ou chercher un livre",
      "h.t1": "\u00c0 deux pas de l'ambassade de France",
      "h.t2": "Achat et vente de livres",
      "h.t3": "Expositions et cin\u00e9-club chaque mois",

      "eyebrow.about": "A propos",
      "ap.p1": "Connaissez-vous le Balzac ? Ce lieu enti\u00e8rement consacr\u00e9 \u00e0 la francophonie est nich\u00e9 au c\u0153ur du quartier des galeries et des vendeurs d'\u00e9meraudes, sur Charoen Krung 43. A quelques pas seulement de l'ambassade de France et de la poste centrale, non loin du d\u00e9barcad\u00e8re d'o\u00f9 vous pourrez aller \u00e0 la d\u00e9couverte des plus beaux temples de la ville et du Palais Royal .",
      "ap.p2": "A l'initiative d'une famille d'\u00e9crivains et de voyageurs suisses, le Balzac est \u00e0 la crois\u00e9e des chemins de traverse pour les francophiles . Un peu comme un de ces lieux embl\u00e9matiques du Boulevard Saint-Michel, o\u00f9 l'on aime venir fl\u00e2ner apr\u00e8s le boulot, vendre ou acheter quelques br\u00fblots ou beaux livres d\u00e9nich\u00e9s \u00e0 bon prix .",

      "mo.title": "Ce mois-ci au Balzac",
      "mo1.title": "Cin\u00e9-club \u00b7 films en version originale",
      "mo1.desc": "Une soir\u00e9e, un classique, un d\u00e9bat autour d'un verre.",
      "mo2.title": "Exposition du mois \u00b7 vernissage",
      "mo2.desc": "Un artiste, un accrochage, un verre de bienvenue.",
      "mo3.title": "Caf\u00e9-rencontres et lectures",
      "mo3.desc": "Auteurs, d\u00e9dicaces et conversations en fran\u00e7ais.",
      "mo.btn": "R\u00e9server ma place",
      "mo.note": "Sur le site final, ce tableau se met \u00e0 jour en quelques secondes, sans webmaster.",

      "note.cine": "Cin\u00e9-club",
      "note.expo": "Vernissage",
      "note.lecture": "Caf\u00e9-rencontre",
      "note.collab": "Proposition d'exposition",

      "rv1.text": "Une parenth\u00e8se parisienne \u00e0 Bangkok. On y retourne pour les livres, on y reste pour le chocolat chaud.",
      "rv1.author": "Une habitu\u00e9e",
      "rv2.text": "Le cin\u00e9-club du Balzac est devenu notre rendez-vous du mois. Accueil adorable.",
      "rv2.author": "Un couple d'expatri\u00e9s",
      "rv.sample": "Avis exemple \u00b7 remplac\u00e9 par vos vrais avis Google",

      "cl.h": "Passez nous voir, on vous garde une place",

      "l.h1": "La librairie",
      "l.sub": "Des romans classiques aux beaux livres, achet\u00e9s et vendus \u00e0 bon prix. Le stock change chaque semaine, la chasse fait partie du plaisir.",
      "l.cat1": "Romans classiques",
      "l.cat2": "Polars",
      "l.cat3": "Beaux livres",
      "l.cat4": "Bandes dessin\u00e9es",
      "l.cat5": "Jeunesse",
      "l.cat6": "Essais",
      "l.tile.note": "Le catalogue en ligne arrive avec le site final. Passez nous voir ou \u00e9crivez-nous.",
      "l.wa": "Demander sur WhatsApp",

      "sell.h": "Vendez vos livres",
      "sell.p": "Vous quittez Bangkok ou faites de la place ? Nous rachetons romans, beaux livres et BD en fran\u00e7ais.",
      "sell.field1": "Titre ou auteur",
      "sell.field2": "Nombre de livres",
      "sell.field3": "T\u00e9l\u00e9phone ou WhatsApp",
      "sell.field4": "Message",
      "sell.btn": "Proposer mes livres",
      "sell.modal": "Merci. Ceci est une maquette, rien n'a \u00e9t\u00e9 envoy\u00e9. Sur le site final, votre proposition arrive directement sur le WhatsApp de la librairie.",

      "c.h1": "Le caf\u00e9",
      "c.p": "Un caf\u00e9 serr\u00e9, un chocolat chaud, une merveille aux myrtilles, et Brassens ou Brel sur le vinyle. On lit, on \u00e9crit, on refait le monde.",
      "c.menu.title": "Carte du caf\u00e9",
      "c.item1": "Espresso",
      "c.item2": "Caf\u00e9 cr\u00e8me",
      "c.item3": "Chocolat chaud",
      "c.item4": "Th\u00e9",
      "c.item5": "Merveille aux myrtilles",
      "c.item6": "Croissant",
      "c.note": "Prix d'exemple pour la maquette",

      "g.h1": "La galerie",
      "g.p": "Une exposition nouvelle chaque mois : peinture, photographie, mode, artistes francophones et siamois. Toutes les propositions de collaboration sont les bienvenues.",
      "g.cta.h": "Artiste ou commissaire ?",
      "g.cta.btn": "Proposer une exposition",

      "e.h1": "\u00c9v\u00e9nements",
      "e.p": "Cin\u00e9-club en version originale, vernissages, lectures et rencontres : le programme change chaque mois. Laissez votre contact \u00e0 l'accueil ou sur WhatsApp pour \u00eatre pr\u00e9venu.",

      "ct.h1": "Nous trouver \u00e0 Charoen Krung",
      "c.card.address": "Adresse",
      "c.card.phone": "T\u00e9l\u00e9phone",
      "c.card.whatsapp": "WhatsApp",
      "c.card.email": "Email",
      "c.card.instagram": "Instagram",
      "map.open": "Ouvrir dans Google Maps",

      "f.tag": "Librairie, caf\u00e9 et galerie francophones \u00e0 Bangkok.",
      "f.col.contact": "Horaires & contact",
      "f.col.find": "Nous trouver",
      "f.addr": "Soi Charoen Krung 43, Bang Rak, Bangkok 10500",
      "f.credit": "Maquette par Mikaro Studio \u00b7 mikaro.studio",

      "form.name": "Nom",
      "form.phone": "T\u00e9l\u00e9phone ou WhatsApp",
      "form.reason": "Motif",
      "form.message": "Message",
      "form.reason.visit": "Visite ou question",
      "form.reason.sell": "Vendre des livres",
      "form.reason.cine": "Cin\u00e9-club",
      "form.reason.expo": "Vernissage",
      "form.reason.lecture": "Caf\u00e9-rencontre",
      "form.reason.collab": "Proposition d'exposition",
      "v.btn": "Envoyer",

      "modal.text": "Merci. Ceci est une maquette, rien n'a \u00e9t\u00e9 envoy\u00e9. Sur le site final, votre message arrive directement sur le WhatsApp ou l'email de la librairie, sans interm\u00e9diaire.",
      "modal.close": "Fermer",

      "dish.note": "Le catalogue en ligne arrive avec le site final. Passez nous voir ou \u00e9crivez-nous.",

      "alt.hero": "Le Balzac, librairie et caf\u00e9 \u00e0 Bangkok",
      "alt.books": "Rayons de la librairie Balzac",
      "alt.cafe": "Le caf\u00e9 du Balzac",
      "alt.gallery": "Galerie du Balzac",
      "alt.event": "Soir\u00e9e au Balzac",
      "alt.logo": "Balzac Bangkok"
    },

    en: {
      "ribbon.text": "Live design preview prepared for Balzac Bangkok by Mikaro Studio. Not the official website yet.",
      "ribbon.close": "Close this message",

      "nav.about": "About",
      "nav.librairie": "Bookshop",
      "nav.cafe": "Caf\u00e9",
      "nav.galerie": "Gallery",
      "nav.events": "Events",
      "nav.contact": "Contact",
      "nav.cta": "Visit us",
      "float.txt": "Message us",
      "hamburger.label": "Menu",
      "drawer.close": "Close menu",

      "title.home": "Balzac Bangkok - A literary salon in Bangkok",
      "title.librairie": "The bookshop - Balzac Bangkok",
      "title.cafe": "The caf\u00e9 - Balzac Bangkok",
      "title.galerie": "The gallery - Balzac Bangkok",
      "title.events": "Events - Balzac Bangkok",
      "title.contact": "Contact - Balzac Bangkok",

      "h.eyebrow": "LIBRAIRIE \u00b7 CAF\u00c9 \u00b7 GALERIE",
      "h.h1": "A literary salon in the heart of Bangkok",
      "h.sub": "Founded by a Swiss family of writers and travellers, Balzac brings together a French bookshop, a caf\u00e9 and an art gallery, steps from the French embassy in the emerald quarter.",
      "h.cta1": "See events",
      "h.cta2": "Sell or find a book",
      "h.t1": "Steps from the French embassy",
      "h.t2": "We buy and sell books",
      "h.t3": "Monthly exhibitions and film nights",

      "eyebrow.about": "About",
      "ap.p1": "Do you know Balzac? A place devoted entirely to the francophone world, tucked among the galleries and emerald dealers of Charoen Krung 43. Part caf\u00e9, part bookshop, part art gallery, it is a crossroads for travellers, homesick expats and Thai lovers of French culture: coffee with Brassens on vinyl, film nights in version originale, and a new exhibition every month.",
      "ap.p2": "",

      "mo.title": "This month at Balzac",
      "mo1.title": "Film club \u00b7 original-version screenings",
      "mo1.desc": "One night, one classic, one conversation.",
      "mo2.title": "Exhibition of the month \u00b7 opening night",
      "mo2.desc": "One artist, one hanging, one welcome drink.",
      "mo3.title": "Meet-ups and readings",
      "mo3.desc": "Authors, signings and conversation in French.",
      "mo.btn": "Save my seat",
      "mo.note": "On the finished website this board updates in seconds, no webmaster needed.",

      "note.cine": "Film club",
      "note.expo": "Opening night",
      "note.lecture": "Reading",
      "note.collab": "Exhibition proposal",

      "rv1.text": "A Parisian interlude in Bangkok. You come for the books, you stay for the hot chocolate.",
      "rv1.author": "A regular",
      "rv2.text": "The Balzac film club has become our monthly ritual. Wonderful hosts.",
      "rv2.author": "An expat couple",
      "rv.sample": "Sample review \u00b7 replaced by your real Google reviews",

      "cl.h": "Come by, we'll keep you a seat",

      "l.h1": "The bookshop",
      "l.sub": "From classics to art books, bought and sold at fair prices. The shelves change weekly, the hunt is part of the pleasure.",
      "l.cat1": "Classic novels",
      "l.cat2": "Crime",
      "l.cat3": "Art books",
      "l.cat4": "Comics",
      "l.cat5": "Children",
      "l.cat6": "Essays",
      "l.tile.note": "The online catalogue arrives with the finished website. Visit us or message us.",
      "l.wa": "Ask on WhatsApp",

      "sell.h": "Sell us your books",
      "sell.p": "Leaving Bangkok or clearing shelves? We buy French novels, art books and comics.",
      "sell.field1": "Title or author",
      "sell.field2": "How many books",
      "sell.field3": "Phone or WhatsApp",
      "sell.field4": "Message",
      "sell.btn": "Offer my books",
      "sell.modal": "Thank you. This is a preview, nothing was sent. On the finished website your offer lands straight in the bookshop's WhatsApp.",

      "c.h1": "The caf\u00e9",
      "c.p": "A proper espresso, hot chocolate, a blueberry merveille, and Brassens or Brel on vinyl. People read, write and put the world to rights.",
      "c.menu.title": "Caf\u00e9 menu",
      "c.item1": "Espresso",
      "c.item2": "Caf\u00e9 cr\u00e8me",
      "c.item3": "Hot chocolate",
      "c.item4": "Tea",
      "c.item5": "Blueberry merveille",
      "c.item6": "Croissant",
      "c.note": "Sample prices for the preview",

      "g.h1": "The gallery",
      "g.p": "A new exhibition every month: painting, photography, fashion, francophone and Thai artists. Collaboration proposals are always welcome.",
      "g.cta.h": "Artist or curator?",
      "g.cta.btn": "Propose an exhibition",

      "e.h1": "Events",
      "e.p": "Original-version film nights, openings, readings and meet-ups: the programme changes monthly. Leave your contact at the counter or on WhatsApp to hear first.",

      "ct.h1": "Find us on Charoen Krung",
      "c.card.address": "Address",
      "c.card.phone": "Phone",
      "c.card.whatsapp": "WhatsApp",
      "c.card.email": "Email",
      "c.card.instagram": "Instagram",
      "map.open": "Open in Google Maps",

      "f.tag": "A French-language bookshop, caf\u00e9 and gallery in Bangkok.",
      "f.col.contact": "Hours & contact",
      "f.col.find": "Find us",
      "f.addr": "Soi Charoen Krung 43, Bang Rak, Bangkok 10500",
      "f.credit": "Design preview by Mikaro Studio \u00b7 mikaro.studio",

      "form.name": "Name",
      "form.phone": "Phone or WhatsApp",
      "form.reason": "Reason",
      "form.message": "Message",
      "form.reason.visit": "Visit or question",
      "form.reason.sell": "Sell books",
      "form.reason.cine": "Film club",
      "form.reason.expo": "Opening night",
      "form.reason.lecture": "Reading",
      "form.reason.collab": "Exhibition proposal",
      "v.btn": "Send",

      "modal.text": "Thank you. This is a preview, nothing was sent. On the finished website your message lands straight in the bookshop's WhatsApp or email, with no middleman.",
      "modal.close": "Close",

      "dish.note": "The online catalogue arrives with the finished website. Visit us or message us.",

      "alt.hero": "Balzac bookshop and caf\u00e9 in Bangkok",
      "alt.books": "Bookshelves at Balzac",
      "alt.cafe": "The Balzac caf\u00e9",
      "alt.gallery": "Balzac gallery",
      "alt.event": "An evening at Balzac",
      "alt.logo": "Balzac Bangkok"
    },

    th: {
      "ribbon.text": "\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c\u0e17\u0e35\u0e48\u0e2d\u0e2d\u0e01\u0e41\u0e1a\u0e1a\u0e43\u0e2b\u0e49 Balzac Bangkok \u0e42\u0e14\u0e22 Mikaro Studio \u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e17\u0e32\u0e07\u0e01\u0e32\u0e23",
      "ribbon.close": "\u0e1b\u0e34\u0e14\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e19\u0e35\u0e49",

      "nav.about": "\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e40\u0e23\u0e32",
      "nav.librairie": "\u0e23\u0e49\u0e32\u0e19\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d",
      "nav.cafe": "\u0e04\u0e32\u0e40\u0e9f\u0e48",
      "nav.galerie": "\u0e41\u0e01\u0e25\u0e40\u0e25\u0e2d\u0e23\u0e35",
      "nav.events": "\u0e01\u0e34\u0e08\u0e01\u0e23\u0e23\u0e21",
      "nav.contact": "\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d",
      "nav.cta": "\u0e21\u0e32\u0e40\u0e22\u0e37\u0e48\u0e2d\u0e21\u0e40\u0e23\u0e32",
      "float.txt": "\u0e17\u0e31\u0e01\u0e2b\u0e32\u0e40\u0e23\u0e32",
      "hamburger.label": "\u0e40\u0e21\u0e19\u0e39",
      "drawer.close": "\u0e1b\u0e34\u0e14\u0e40\u0e21\u0e19\u0e39",

      "title.home": "Balzac Bangkok - \u0e0b\u0e32\u0e25\u0e2d\u0e19\u0e27\u0e23\u0e23\u0e13\u0e01\u0e23\u0e23\u0e21\u0e43\u0e08\u0e01\u0e25\u0e32\u0e07\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e\u0e2f",
      "title.librairie": "\u0e23\u0e49\u0e32\u0e19\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d - Balzac Bangkok",
      "title.cafe": "\u0e04\u0e32\u0e40\u0e9f\u0e48 - Balzac Bangkok",
      "title.galerie": "\u0e41\u0e01\u0e25\u0e40\u0e25\u0e2d\u0e23\u0e35 - Balzac Bangkok",
      "title.events": "\u0e01\u0e34\u0e08\u0e01\u0e23\u0e23\u0e21 - Balzac Bangkok",
      "title.contact": "\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d - Balzac Bangkok",

      "h.eyebrow": "LIBRAIRIE \u00b7 CAF\u00c9 \u00b7 GALERIE",
      "h.h1": "\u0e0b\u0e32\u0e25\u0e2d\u0e19\u0e27\u0e23\u0e23\u0e13\u0e01\u0e23\u0e23\u0e21\u0e43\u0e08\u0e01\u0e25\u0e32\u0e07\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e\u0e2f",
      "h.sub": "\u0e01\u0e48\u0e2d\u0e15\u0e31\u0e49\u0e07\u0e42\u0e14\u0e22\u0e04\u0e23\u0e2d\u0e1a\u0e04\u0e23\u0e31\u0e27\u0e19\u0e31\u0e01\u0e40\u0e02\u0e35\u0e22\u0e19\u0e41\u0e25\u0e30\u0e19\u0e31\u0e01\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07\u0e0a\u0e32\u0e27\u0e2a\u0e27\u0e34\u0e07 Balzac \u0e23\u0e27\u0e21\u0e23\u0e49\u0e32\u0e19\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d\u0e09\u0e23\u0e31\u0e48\u0e07\u0e40\u0e28\u0e2a \u0e04\u0e32\u0e40\u0e9f\u0e48 \u0e41\u0e25\u0e30\u0e41\u0e01\u0e25\u0e40\u0e25\u0e2d\u0e23\u0e35\u0e28\u0e34\u0e25\u0e1b\u0e30\u0e44\u0e27\u0e49\u0e43\u0e19\u0e17\u0e35\u0e48\u0e40\u0e14\u0e35\u0e22\u0e27 \u0e43\u0e01\u0e25\u0e49\u0e2a\u0e16\u0e32\u0e19\u0e17\u0e39\u0e15\u0e1d\u0e23\u0e31\u0e48\u0e07\u0e40\u0e28\u0e2a\u0e43\u0e19\u0e22\u0e48\u0e32\u0e19\u0e04\u0e49\u0e32\u0e2d\u0e31\u0e0d\u0e21\u0e13\u0e35",
      "h.cta1": "\u0e14\u0e39\u0e01\u0e34\u0e08\u0e01\u0e23\u0e23\u0e21",
      "h.cta2": "\u0e02\u0e32\u0e22\u0e2b\u0e23\u0e37\u0e2d\u0e15\u0e32\u0e21\u0e2b\u0e32\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d",
      "h.t1": "\u0e43\u0e01\u0e25\u0e49\u0e2a\u0e16\u0e32\u0e19\u0e17\u0e39\u0e15\u0e1d\u0e23\u0e31\u0e48\u0e07\u0e40\u0e28\u0e2a",
      "h.t2": "\u0e23\u0e31\u0e09\u0e0b\u0e37\u0e49\u0e41\u0e25\u0e30\u0e02\u0e32\u0e22\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d",
      "h.t3": "\u0e19\u0e34\u0e17\u0e23\u0e23\u0e28\u0e01\u0e32\u0e23\u0e41\u0e25\u0e30\u0e09\u0e32\u0e22\u0e2b\u0e19\u0e31\u0e07\u0e17\u0e38\u0e01\u0e40\u0e14\u0e37\u0e2d\u0e19",

      "eyebrow.about": "\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e40\u0e23\u0e32",
      "ap.p1": "\u0e23\u0e39\u0e49\u0e08\u0e31\u0e01 Balzac \u0e44\u0e2b\u0e21 \u0e1e\u0e37\u0e49\u0e19\u0e17\u0e35\u0e48\u0e17\u0e35\u0e48\u0e2d\u0e38\u0e17\u0e34\u0e28\u0e43\u0e2b\u0e49\u0e27\u0e31\u0e12\u0e19\u0e18\u0e23\u0e23\u0e21\u0e20\u0e32\u0e29\u0e32\u0e2d\u0e07\u0e04\u0e23\u0e15\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14 \u0e0b\u0e48\u0e2d\u0e19\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e39\u0e48\u0e17\u0e48\u0e32\u0e21\u0e01\u0e25\u0e32\u0e07\u0e41\u0e01\u0e25\u0e40\u0e25\u0e2d\u0e23\u0e35\u0e41\u0e25\u0e30\u0e23\u0e49\u0e32\u0e19\u0e2d\u0e31\u0e0d\u0e21\u0e13\u0e35\u0e1a\u0e19\u0e40\u0e08\u0e23\u0e34\u0e0d\u0e01\u0e23\u0e38\u0e07 43 \u0e17\u0e31\u0e49\u0e07\u0e04\u0e32\u0e40\u0e9f\u0e48 \u0e23\u0e49\u0e32\u0e19\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d \u0e41\u0e25\u0e30\u0e41\u0e01\u0e25\u0e40\u0e25\u0e2d\u0e23\u0e35\u0e28\u0e34\u0e25\u0e1b\u0e30\u0e44\u0e27\u0e49\u0e43\u0e19\u0e17\u0e35\u0e48\u0e40\u0e14\u0e35\u0e22\u0e27 \u0e08\u0e38\u0e14\u0e19\u0e31\u0e14\u0e1e\u0e1a\u0e02\u0e2d\u0e07\u0e19\u0e31\u0e01\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07 \u0e0a\u0e32\u0e27\u0e15\u0e48\u0e32\u0e07\u0e0a\u0e32\u0e15\u0e34\u0e17\u0e35\u0e48\u0e04\u0e34\u0e14\u0e16\u0e36\u0e07\u0e1a\u0e49\u0e32\u0e19 \u0e41\u0e25\u0e30\u0e04\u0e19\u0e44\u0e17\u0e22\u0e1c\u0e39\u0e49\u0e2b\u0e25\u0e07\u0e23\u0e31\u0e01\u0e27\u0e31\u0e12\u0e19\u0e18\u0e23\u0e23\u0e21\u0e09\u0e23\u0e31\u0e48\u0e07\u0e40\u0e28\u0e2a \u0e08\u0e34\u0e1a\u0e01\u0e32\u0e41\u0e1f\u0e1f\u0e31\u0e07\u0e41\u0e1c\u0e48\u0e19\u0e40\u0e2a\u0e35\u0e22\u0e07 Brassens \u0e0a\u0e21\u0e20\u0e32\u0e1e\u0e22\u0e19\u0e15\u0e23\u0e4c\u0e40\u0e2a\u0e35\u0e22\u0e07\u0e15\u0e49\u0e19\u0e09\u0e1a\u0e31\u0e1a \u0e41\u0e25\u0e30\u0e19\u0e34\u0e17\u0e23\u0e23\u0e28\u0e01\u0e32\u0e23\u0e43\u0e2b\u0e21\u0e48\u0e17\u0e38\u0e01\u0e40\u0e14\u0e37\u0e2d\u0e19",
      "ap.p2": "",

      "mo.title": "\u0e40\u0e14\u0e37\u0e2d\u0e19\u0e19\u0e35\u0e49\u0e17\u0e35\u0e48 Balzac",
      "mo1.title": "\u0e09\u0e32\u0e22\u0e2b\u0e19\u0e31\u0e07\u0e04\u0e25\u0e32\u0e2a\u0e2a\u0e34\u0e01\u0e40\u0e2a\u0e35\u0e22\u0e07\u0e15\u0e49\u0e19\u0e09\u0e1a\u0e31\u0e1a",
      "mo1.desc": "\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e04\u0e48\u0e33\u0e04\u0e37\u0e19 \u0e2b\u0e19\u0e36\u0e48\u0e07\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e04\u0e25\u0e32\u0e2a\u0e2a\u0e34\u0e01 \u0e41\u0e25\u0e30\u0e1a\u0e17\u0e2a\u0e19\u0e17\u0e19\u0e32\u0e14\u0e35\u0e46",
      "mo2.title": "\u0e19\u0e34\u0e17\u0e23\u0e23\u0e28\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e40\u0e14\u0e37\u0e2d\u0e19 \u00b7 \u0e07\u0e32\u0e19\u0e40\u0e1b\u0e34\u0e14\u0e15\u0e31\u0e27",
      "mo2.desc": "\u0e28\u0e34\u0e25\u0e1b\u0e34\u0e19\u0e40\u0e14\u0e35\u0e22\u0e27\u0e04\u0e19 \u0e1c\u0e25\u0e07\u0e32\u0e19\u0e40\u0e14\u0e35\u0e22\u0e27\u0e0a\u0e38\u0e14 \u0e41\u0e25\u0e30\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e14\u0e37\u0e48\u0e21\u0e15\u0e49\u0e2d\u0e19\u0e23\u0e31\u0e1a",
      "mo3.title": "\u0e1e\u0e1a\u0e1b\u0e30\u0e19\u0e31\u0e01\u0e2d\u0e48\u0e32\u0e19\u0e41\u0e25\u0e30\u0e01\u0e34\u0e08\u0e01\u0e23\u0e23\u0e21\u0e2d\u0e48\u0e32\u0e19\u0e2b\u0e19\u0e07\u0e2a\u0e37\u0e2d",
      "mo3.desc": "\u0e19\u0e31\u0e01\u0e40\u0e02\u0e35\u0e22\u0e19 \u0e41\u0e08\u0e01\u0e25\u0e32\u0e22\u0e40\u0e0b\u0e47\u0e19 \u0e41\u0e25\u0e30\u0e1a\u0e17\u0e2a\u0e19\u0e17\u0e19\u0e32\u0e20\u0e32\u0e29\u0e32\u0e09\u0e23\u0e31\u0e48\u0e07\u0e40\u0e28\u0e2a",
      "mo.btn": "\u0e08\u0e2d\u0e07\u0e17\u0e35\u0e48\u0e19\u0e31\u0e48\u0e07",
      "mo.note": "\u0e43\u0e19\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c\u0e08\u0e23\u0e34\u0e07 \u0e23\u0e49\u0e32\u0e19\u0e2d\u0e31\u0e1b\u0e40\u0e14\u0e15\u0e1a\u0e2d\u0e23\u0e4c\u0e14\u0e19\u0e35\u0e49\u0e40\u0e2d\u0e07\u0e44\u0e14\u0e49\u0e43\u0e19\u0e44\u0e21\u0e48\u0e01\u0e35\u0e48\u0e27\u0e34\u0e19\u0e32\u0e17\u0e35",

      "note.cine": "\u0e09\u0e32\u0e22\u0e2b\u0e19\u0e31\u0e07",
      "note.expo": "\u0e07\u0e32\u0e19\u0e40\u0e1b\u0e34\u0e14\u0e19\u0e34\u0e17\u0e23\u0e23\u0e28\u0e01\u0e32\u0e23",
      "note.lecture": "\u0e01\u0e34\u0e08\u0e01\u0e23\u0e23\u0e21\u0e2d\u0e48\u0e32\u0e19\u0e2b\u0e19\u0e07\u0e2a\u0e37\u0e2d",
      "note.collab": "\u0e02\u0e49\u0e2d\u0e40\u0e2a\u0e19\u0e2d\u0e08\u0e31\u0e14\u0e19\u0e34\u0e17\u0e23\u0e23\u0e28\u0e01\u0e32\u0e23",

      "rv1.text": "\u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19\u0e2b\u0e25\u0e38\u0e14\u0e44\u0e1b\u0e1b\u0e32\u0e23\u0e35\u0e2a\u0e01\u0e25\u0e32\u0e07\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e\u0e2f \u0e21\u0e32\u0e40\u0e1e\u0e23\u0e32\u0e30\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d \u0e41\u0e15\u0e48\u0e2d\u0e22\u0e39\u0e48\u0e15\u0e48\u0e2d\u0e40\u0e1e\u0e23\u0e32\u0e30\u0e0a\u0e47\u0e2d\u0e01\u0e42\u0e01\u0e41\u0e25\u0e15\u0e23\u0e49\u0e2d\u0e19",
      "rv1.author": "\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32\u0e1b\u0e23\u0e30\u0e08\u0e33",
      "rv2.text": "\u0e09\u0e32\u0e22\u0e2b\u0e19\u0e31\u0e07\u0e17\u0e35\u0e48 Balzac \u0e01\u0e25\u0e32\u0e22\u0e40\u0e1b\u0e47\u0e19\u0e19\u0e31\u0e14\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e40\u0e14\u0e37\u0e2d\u0e19\u0e02\u0e2d\u0e07\u0e40\u0e23\u0e32 \u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07\u0e23\u0e49\u0e32\u0e19\u0e19\u0e48\u0e32\u0e23\u0e31\u0e01\u0e21\u0e32\u0e01",
      "rv2.author": "\u0e04\u0e39\u0e48\u0e23\u0e31\u0e01\u0e0a\u0e32\u0e27\u0e15\u0e48\u0e32\u0e07\u0e0a\u0e32\u0e15\u0e34",
      "rv.sample": "\u0e23\u0e35\u0e27\u0e34\u0e27\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07 \u00b7 \u0e08\u0e30\u0e41\u0e17\u0e19\u0e17\u0e35\u0e48\u0e14\u0e49\u0e27\u0e22\u0e23\u0e35\u0e27\u0e34\u0e27\u0e08\u0e23\u0e34\u0e07\u0e08\u0e32\u0e01 Google",

      "cl.h": "\u0e41\u0e27\u0e30\u0e21\u0e32\u0e19\u0e30 \u0e40\u0e23\u0e32\u0e40\u0e01\u0e47\u0e1a\u0e17\u0e35\u0e48\u0e44\u0e27\u0e49\u0e43\u0e2b\u0e49\u0e41\u0e25\u0e49\u0e27",

      "l.h1": "\u0e23\u0e49\u0e32\u0e19\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d",
      "l.sub": "ตั้งแต่วรรณกรรมคลาสสิกถึงหนังสือศิลปะ รับซื้อและขายในราคายุติธรรม ชั้นหนังสือเปลี่ยนทุกสัปดาห์ การตามหาคือความสนุก",
      "l.cat1": "\u0e27\u0e23\u0e23\u0e13\u0e01\u0e23\u0e23\u0e21\u0e04\u0e25\u0e32\u0e2a\u0e2a\u0e34\u0e01",
      "l.cat2": "\u0e19\u0e34\u0e22\u0e32\u0e22\u0e2a\u0e37\u0e1a\u0e2a\u0e27\u0e19",
      "l.cat3": "\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d\u0e28\u0e34\u0e25\u0e1b\u0e30",
      "l.cat4": "\u0e01\u0e32\u0e23\u0e4c\u0e15\u0e39\u0e19",
      "l.cat5": "\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d\u0e40\u0e14\u0e47\u0e01",
      "l.cat6": "\u0e04\u0e27\u0e32\u0e21\u0e40\u0e23\u0e35\u0e22\u0e07",
      "l.tile.note": "\u0e41\u0e04\u0e15\u0e15\u0e32\u0e25\u0e47\u0e2d\u0e07\u0e2d\u0e2d\u0e19\u0e44\u0e25\u0e19\u0e4c\u0e08\u0e30\u0e21\u0e32\u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c\u0e08\u0e23\u0e34\u0e07 \u0e41\u0e27\u0e30\u0e21\u0e32\u0e2b\u0e23\u0e37\u0e2d\u0e17\u0e31\u0e01\u0e2b\u0e32\u0e40\u0e23\u0e32\u0e44\u0e14\u0e49\u0e40\u0e25\u0e22",
      "l.wa": "\u0e16\u0e32\u0e21\u0e17\u0e32\u0e07 WhatsApp",

      "sell.h": "\u0e02\u0e32\u0e22\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d\u0e43\u0e2b\u0e49\u0e40\u0e23\u0e32",
      "sell.p": "\u0e01\u0e33\u0e25\u0e31\u0e07\u0e08\u0e30\u0e22\u0e49\u0e32\u0e22\u0e2b\u0e23\u0e37\u0e2d\u0e2d\u0e22\u0e32\u0e01\u0e40\u0e04\u0e25\u0e35\u0e22\u0e23\u0e4c\u0e0a\u0e31\u0e49\u0e19\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d \u0e40\u0e23\u0e32\u0e23\u0e31\u0e1a\u0e0b\u0e37\u0e49\u0e19\u0e34\u0e22\u0e32\u0e22 \u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0eAD\u0e28\u0e34\u0e25\u0e1b\u0e30 \u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e4c\u0e15\u0e39\u0e19\u0e20\u0e32\u0e29\u0e32\u0e2d\u0e07\u0e04\u0e23\u0e31\u0e48\u0e07\u0e40\u0e28\u0e2a",
      "sell.field1": "\u0e0a\u0e37\u0e48\u0e2d\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d\u0e2b\u0e23\u0e37\u0e2d\u0e19\u0e31\u0e01\u0e40\u0e02\u0e35\u0e22\u0e19",
      "sell.field2": "\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e25\u0e48\u0e21",
      "sell.field3": "\u0e40\u0e01\u0e23\u0e2d\u0e02\u0e42\u0e17\u0e23\u0e2b\u0e23\u0e37\u0e2d WhatsApp",
      "sell.field4": "\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21",
      "sell.btn": "\u0e40\u0e2a\u0e19\u0e2d\u0e02\u0e32\u0e22\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d",
      "sell.modal": "\u0e02\u0e2d\u0e1a\u0e04\u0e38\u0e13\u0e04\u0e23\u0e31\u0e1a \u0e2b\u0e19\u0e49\u0e32\u0e19\u0e35\u0e49\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07 \u0e23\u0e30\u0e1a\u0e1a\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e2a\u0e48\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e08\u0e23\u0e34\u0e07 \u0e43\u0e19\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c\u0e08\u0e23\u0e34\u0e07 \u0e02\u0e49\u0e2d\u0e40\u0e2a\u0e19\u0e2d\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e08\u0e30\u0e2a\u0e48\u0e07\u0e15\u0e23\u0e07\u0e16\u0e36\u0e07 WhatsApp \u0e02\u0e2d\u0e07\u0e23\u0e49\u0e32\u0e19",

      "c.h1": "\u0e04\u0e32\u0e40\u0e9f\u0e48",
      "c.p": "\u0e40\u0e2d\u0e2a\u0e40\u0e1e\u0e23\u0e2a\u0e42\u0e14\u0e40\u0e02\u0e49\u0e21\u0e46 \u0e0a\u0e47\u0e2d\u0e01\u0e42\u0e01\u0e41\u0e25\u0e15\u0e23\u0e49\u0e2d\u0e19 \u0e02\u0e19\u0e21\u0e40\u0e21\u0e2d\u0e23\u0e40\u0e27\u0e22\u0e1a\u0e25\u0e39\u0e40\u0e1a\u0e2d\u0e23\u0e23\u0e35 \u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e41\u0e1c\u0e48\u0e19\u0e40\u0e2a\u0e35\u0e22\u0e07 Brassens \u0e41\u0e25\u0e30 Brel \u0e19\u0e31\u0e48\u0e07\u0e2d\u0e48\u0e32\u0e19 \u0e19\u0e31\u0e48\u0e07\u0e40\u0e02\u0e35\u0e22\u0e19 \u0e19\u0e31\u0e48\u0e07\u0e04\u0e38\u0e22\u0e01\u0e31\u0e19\u0e44\u0e14\u0e49\u0e17\u0e31\u0e49\u0e07\u0e27\u0e31\u0e19",
      "c.menu.title": "\u0e40\u0e21\u0e19\u0e39\u0e04\u0e32\u0e40\u0e9f\u0e48",
      "c.item1": "Espresso",
      "c.item2": "Caf\u00e9 cr\u00e8me",
      "c.item3": "\u0e0a\u0e47\u0e2d\u0e01\u0e42\u0e01\u0e41\u0e25\u0e15\u0e23\u0e49\u0e2d\u0e19",
      "c.item4": "\u0e0a\u0e32",
      "c.item5": "\u0e02\u0e19\u0e21\u0e40\u0e21\u0e2d\u0e23\u0e40\u0e27\u0e22\u0e1a\u0e25\u0e39\u0e40\u0e1a\u0e2d\u0e23\u0e23\u0e35",
      "c.item6": "Croissant",
      "c.note": "\u0e23\u0e32\u0e04\u0e32\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",

      "g.h1": "\u0e41\u0e01\u0e25\u0e40\u0e25\u0e2d\u0e23\u0e35",
      "g.p": "\u0e19\u0e34\u0e17\u0e23\u0e23\u0e28\u0e01\u0e32\u0e23\u0e43\u0e2b\u0e21\u0e48\u0e17\u0e38\u0e01\u0e40\u0e14\u0e37\u0e2d\u0e19 \u0e17\u0e31\u0e49\u0e07\u0e08\u0e34\u0e15\u0e23\u0e01\u0e23\u0e23\u0e21 \u0e20\u0e32\u0e1e\u0e16\u0e48\u0e32\u0e22 \u0e41\u0e1f\u0e0a\u0e31\u0e48\u0e19 \u0e08\u0e32\u0e01\u0e28\u0e34\u0e25\u0e1b\u0e34\u0e19\u0e09\u0e23\u0e31\u0e48\u0e07\u0e40\u0e28\u0e2a\u0e41\u0e25\u0e30\u0e44\u0e17\u0e22 \u0e22\u0e34\u0e19\u0e14\u0e35\u0e23\u0e31\u0e1a\u0e02\u0e49\u0e2d\u0e40\u0e2a\u0e19\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e23\u0e48\u0e27\u0e21\u0e21\u0e37\u0eAD\u0e40\u0e2a\u0e21\u0e2d",
      "g.cta.h": "\u0e40\u0e1b\u0e47\u0e19\u0e28\u0e34\u0e25\u0e1b\u0e34\u0e19\u0e2b\u0e23\u0e37\u0e2d\u0e20\u0e31\u0e13\u0e11\u0e32\u0e23\u0e01\u0e29\u0e4c?",
      "g.cta.btn": "\u0e40\u0e2a\u0e19\u0e2d\u0e08\u0e31\u0e14\u0e19\u0e34\u0e17\u0e23\u0e23\u0e28\u0e01\u0e32\u0e23",

      "e.h1": "\u0e01\u0e34\u0e08\u0e01\u0e23\u0e23\u0e21",
      "e.p": "\u0e09\u0e32\u0e22\u0e2b\u0e19\u0e31\u0e07\u0e40\u0e2a\u0e35\u0e22\u0e07\u0e15\u0e49\u0e19\u0e09\u0e1a\u0e31\u0e1a \u0e07\u0e32\u0e19\u0e40\u0e1b\u0e34\u0e14\u0e19\u0e34\u0e17\u0e23\u0e23\u0e28\u0e01\u0e32\u0e23 \u0e41\u0e25\u0e30\u0e01\u0e34\u0e08\u0e01\u0e23\u0e23\u0e21\u0e19\u0e31\u0e01\u0e2d\u0e48\u0e32\u0e19 \u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e17\u0e38\u0e01\u0e40\u0e14\u0e37\u0e2d\u0e19 \u0e1d\u0e32\u0e01\u0e0a\u0e48\u0e2d\u0e07\u0e17\u0e32\u0e07\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e44\u0e27\u0e49\u0e17\u0e35\u0e48\u0e23\u0e49\u0e32\u0e19\u0e2b\u0e23\u0e37\u0e2d\u0e17\u0e32\u0e07 WhatsApp \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e31\u0e1a\u0e02\u0e48\u0e32\u0e27\u0e01\u0e48\u0e2d\u0e43\u0e04\u0e23",

      "ct.h1": "\u0e21\u0e32\u0e2b\u0e32\u0e40\u0e23\u0e32\u0e17\u0e35\u0e48\u0e40\u0e08\u0e23\u0e34\u0e0d\u0e01\u0e23\u0e38\u0e07",
      "c.card.address": "\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48",
      "c.card.phone": "\u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c",
      "c.card.whatsapp": "WhatsApp",
      "c.card.email": "\u0e2d\u0e35\u0e40\u0e21\u0e25",
      "c.card.instagram": "Instagram",
      "map.open": "\u0e40\u0e1b\u0e34\u0e14\u0e43\u0e19 Google Maps",

      "f.tag": "\u0e23\u0e49\u0e32\u0e19\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d \u0e04\u0e32\u0e40\u0e9f\u0e48 \u0e41\u0e25\u0e30\u0e41\u0e01\u0e25\u0e40\u0e25\u0e2d\u0e23\u0e35\u0e20\u0e32\u0e29\u0e32\u0e2d\u0e07\u0e04\u0e23\u0e31\u0e48\u0e07\u0e40\u0e28\u0e2a\u0e43\u0e19\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e\u0e2f",
      "f.col.contact": "\u0e40\u0e27\u0e25\u0e32\u0e17\u0e33\u0e01\u0e32\u0e23\u0e41\u0e25\u0e30\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d",
      "f.col.find": "\u0e21\u0e32\u0e2b\u0e32\u0e40\u0e23\u0e32",
      "f.addr": "\u0e0b\u0e2d\u0e22\u0e40\u0e08\u0e23\u0e34\u0e0d\u0e01\u0e23\u0e38\u0e07 43 \u0e1a\u0e32\u0e07\u0e23\u0e31\u0e01 \u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e\u0e2f 10500",
      "f.credit": "\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e07\u0e32\u0e19\u0e2d\u0e2d\u0e01\u0e41\u0e1a\u0e1a\u0e42\u0e14\u0e22 Mikaro Studio \u00b7 mikaro.studio",

      "form.name": "\u0e0a\u0e37\u0e48\u0e2d",
      "form.phone": "\u0e40\u0e01\u0e23\u0e2d\u0e02\u0e42\u0e17\u0e23\u0e2b\u0e23\u0e37\u0e2d WhatsApp",
      "form.reason": "\u0e40\u0e2b\u0e15\u0e38\u0e1c\u0e25",
      "form.message": "\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21",
      "form.reason.visit": "\u0e40\u0e22\u0e35\u0e48\u0e22\u0e21\u0e0a\u0e21\u0e2b\u0e23\u0e37\u0e2d\u0e2a\u0e2d\u0e1a\u0e16\u0e32\u0e21",
      "form.reason.sell": "\u0e02\u0e32\u0e22\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d",
      "form.reason.cine": "\u0e09\u0e32\u0e22\u0e2b\u0e19\u0e31\u0e07",
      "form.reason.expo": "\u0e07\u0e32\u0e19\u0e40\u0e1b\u0e34\u0e14\u0e19\u0e34\u0e17\u0e23\u0e23\u0e28\u0e01\u0e32\u0e23",
      "form.reason.lecture": "\u0e01\u0e34\u0e08\u0e01\u0e23\u0e23\u0e21\u0e2d\u0e48\u0e32\u0e19\u0e2b\u0e19\u0e07\u0e2a\u0e37\u0e2d",
      "form.reason.collab": "\u0e40\u0e02\u0e19\u0e2d\u0e08\u0e31\u0e14\u0e19\u0e34\u0e17\u0e23\u0e23\u0e28\u0e01\u0e32\u0e23",
      "v.btn": "\u0e2a\u0e48\u0e07\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21",

      "modal.text": "\u0e02\u0e2d\u0e1a\u0e04\u0e38\u0e13\u0e04\u0e23\u0e31\u0e1a \u0e2b\u0e19\u0e49\u0e32\u0e19\u0e35\u0e49\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07 \u0e23\u0e30\u0e1a\u0e1a\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e2a\u0e48\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e08\u0e23\u0e34\u0e07 \u0e43\u0e19\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c\u0e08\u0e23\u0e34\u0e07 \u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e08\u0e30\u0e2a\u0e48\u0e07\u0e15\u0e23\u0e07\u0e16\u0e36\u0e07 WhatsApp \u0e2b\u0e23\u0e37\u0e2d\u0e2d\u0e35\u0e40\u0e21\u0e25\u0e02\u0e2d\u0e07\u0e23\u0e49\u0e32\u0e19 \u0e42\u0e14\u0e22\u0e44\u0e21\u0e48\u0e1c\u0e48\u0e32\u0e19\u0e15\u0e31\u0e27\u0e01\u0e25\u0e32\u0e07",
      "modal.close": "\u0e1b\u0e34\u0e14",

      "dish.note": "\u0e41\u0e04\u0e15\u0e15\u0e32\u0e25\u0e47\u0e2d\u0e07\u0e2d\u0e2d\u0e19\u0e44\u0e25\u0e19\u0e4c\u0e08\u0e30\u0e21\u0e32\u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c\u0e08\u0e23\u0e34\u0e07 \u0e41\u0e27\u0e30\u0e21\u0e32\u0e2b\u0e23\u0e37\u0e2d\u0e17\u0e31\u0e01\u0e2b\u0e32\u0e40\u0e23\u0e32\u0e44\u0e14\u0e49\u0e40\u0e25\u0e22",

      "alt.hero": "Balzac \u0e23\u0e49\u0e32\u0e19\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d\u0e41\u0e25\u0e30\u0e04\u0e32\u0e40\u0e9f\u0e48\u0e43\u0e19\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e\u0e2f",
      "alt.books": "\u0e0a\u0e31\u0e49\u0e19\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d\u0e17\u0e35\u0e48 Balzac",
      "alt.cafe": "\u0e04\u0e32\u0e40\u0e9f\u0e48 Balzac",
      "alt.gallery": "\u0e41\u0e01\u0e25\u0e40\u0e25\u0e2d\u0e23\u0e35 Balzac",
      "alt.event": "\u0e01\u0e34\u0e08\u0e01\u0e23\u0e23\u0e21\u0e22\u0e32\u0e21\u0e04\u0e48\u0e33\u0e17\u0e35\u0e48 Balzac",
      "alt.logo": "Balzac Bangkok"
    }
  };

  function getStoredLang() {
    try {
      var stored = window.localStorage.getItem(LANG_KEY);
      if (stored && LANGS.indexOf(stored) !== -1) {
        return stored;
      }
    } catch (e) {
      /* localStorage unavailable */
    }
    return DEFAULT_LANG;
  }

  function storeLang(lang) {
    try {
      window.localStorage.setItem(LANG_KEY, lang);
    } catch (e) {
      /* localStorage unavailable */
    }
  }

  function translateEl(el, lang) {
    var key = el.getAttribute("data-i18n");
    if (key && dict[lang] && dict[lang][key] !== undefined) {
      el.textContent = dict[lang][key];
    }

    for (var i = 0; i < el.attributes.length; i++) {
      var attr = el.attributes[i];
      if (attr.name.indexOf("data-i18n-") === 0) {
        var targetAttr = attr.name.replace("data-i18n-", "");
        var attrKey = attr.value;
        if (dict[lang] && dict[lang][attrKey] !== undefined) {
          el.setAttribute(targetAttr, dict[lang][attrKey]);
        }
      }
    }
  }

  function applyLang(lang) {
    if (LANGS.indexOf(lang) === -1) {
      lang = DEFAULT_LANG;
    }

    document.documentElement.setAttribute("lang", lang);

    var nodes = document.querySelectorAll("[data-i18n], [data-i18n-alt], [data-i18n-aria-label], [data-i18n-title], [data-i18n-placeholder]");
    nodes.forEach(function (el) {
      try {
        translateEl(el, lang);
      } catch (e) {
        /* one bad node must not stop the rest of the page translating */
      }
    });

    try {
      var titleKey = document.documentElement.getAttribute("data-i18n-page-title");
      if (titleKey && dict[lang] && dict[lang][titleKey]) {
        document.title = dict[lang][titleKey];
      }
    } catch (e) {
      /* ignore */
    }

    var toggleButtons = document.querySelectorAll(".lang-toggle button");
    toggleButtons.forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", isActive);
      if (isActive) {
        btn.setAttribute("aria-current", "true");
      } else {
        btn.removeAttribute("aria-current");
      }
    });

    storeLang(lang);

    try {
      document.dispatchEvent(new CustomEvent("cp:langchange", { detail: { lang: lang } }));
    } catch (e) {
      /* CustomEvent unavailable in very old browsers */
    }
  }

  function initLangToggle() {
    var toggleButtons = document.querySelectorAll(".lang-toggle button");
    toggleButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        try {
          applyLang(btn.getAttribute("data-lang"));
        } catch (e) {
          if (window.console && console.warn) {
            console.warn("Balzac: language toggle failed", e);
          }
        }
      });
    });
  }

  window.chezPapaI18n = {
    dict: dict,
    applyLang: applyLang,
    getStoredLang: getStoredLang,
    initLangToggle: initLangToggle
  };

  document.addEventListener("DOMContentLoaded", function () {
    try {
      initLangToggle();
    } catch (e) {
      if (window.console && console.warn) {
        console.warn("Balzac: initLangToggle failed", e);
      }
    }
    try {
      applyLang(getStoredLang());
    } catch (e) {
      if (window.console && console.warn) {
        console.warn("Balzac: applyLang failed", e);
      }
    }
  });
})();
