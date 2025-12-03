import { CourseModule, Level } from './types';

// Enriched database with Free A1 and Premium A2 content

export const COURSE_CONTENT: CourseModule[] = [
  {
    level: Level.A1,
    title: "Débutant (Beginner)",
    description: "Start your journey with essential greetings, introductions, and survival phrases.",
    lessons: [
      {
        id: 'l-a1-1',
        level: Level.A1,
        title: "Salutations & Quotidien",
        description: "Greetings, introductions, and essential daily routine vocabulary.",
        icon: "👋",
        isPremium: false,
        vocabulary: [
          // Greetings
          { id: 'v1', french: "Bonjour", english: "Hello / Good morning", gender: 'm' },
          { id: 'v2', french: "Au revoir", english: "Goodbye", gender: 'm' },
          { id: 'v3', french: "S'il vous plaît", english: "Please (formal)", context: "Used with strangers or elders." },
          { id: 'v4', french: "Merci", english: "Thank you" },
          { id: 'v_intro', french: "Enchanté(e)", english: "Nice to meet you", gender: 'm' },
          // Daily Life Additions
          { id: 'v5', french: "Le matin", english: "The morning", gender: 'm' },
          { id: 'v6', french: "L'après-midi", english: "The afternoon", gender: 'm' },
          { id: 'v7', french: "Le soir", english: "The evening", gender: 'm' },
          { id: 'v8', french: "Travailler", english: "To work" },
          { id: 'v9', french: "Manger", english: "To eat" },
          { id: 'v10', french: "Aujourd'hui", english: "Today" },
          { id: 'v11', french: "Demain", english: "Tomorrow" },
          { id: 'v12', french: "La semaine", english: "The week", gender: 'f' },
        ],
        phrases: [
          { id: 'p1', french: "Comment ça va ?", english: "How is it going?", formal: false },
          { id: 'p2', french: "Je vais bien, merci.", english: "I am doing well, thank you.", formal: true },
          { id: 'p3', french: "Quoi de neuf ?", english: "What's new?", formal: false },
          { id: 'p4', french: "Je suis fatigué(e).", english: "I am tired.", formal: false },
          { id: 'p5', french: "À tout à l'heure.", english: "See you later.", formal: false },
          { id: 'p6', french: "Bonne journée !", english: "Have a good day!", formal: true },
          { id: 'p7', french: "Tu fais quoi ?", english: "What are you doing?", formal: false },
        ],
        scenario: {
          title: "Une rencontre au café",
          description: "Two people meeting for the first time at a casual coffee shop in Paris.",
          lines: [
            { speaker: "Marc", french: "Bonjour ! Est-ce que cette chaise est libre ?", english: "Hello! Is this chair free?", avatar: "👨🏻" },
            { speaker: "Sophie", french: "Bonjour. Oui, bien sûr. Allez-y.", english: "Hello. Yes, of course. Go ahead.", avatar: "👩🏽" },
            { speaker: "Marc", french: "Merci. Je m'appelle Marc. Et vous ?", english: "Thank you. My name is Marc. And you?", avatar: "👨🏻" },
            { speaker: "Sophie", french: "Moi, c'est Sophie. Enchantée.", english: "I'm Sophie. Nice to meet you.", avatar: "👩🏽" },
            { speaker: "Marc", french: "Enchanté Sophie. Vous habitez à Paris ?", english: "Nice to meet you Sophie. Do you live in Paris?", avatar: "👨🏻" },
            { speaker: "Sophie", french: "Non, je suis en vacances.", english: "No, I am on vacation.", avatar: "👩🏽" },
          ]
        }
      },
      {
        id: 'l-a1-2',
        level: Level.A1,
        title: "Au Restaurant",
        description: "Ordering food, asking for the bill, and understanding the menu.",
        icon: "🥐",
        isPremium: false,
        vocabulary: [
          { id: 'v1', french: "L'addition", english: "The bill", gender: 'f' },
          { id: 'v2', french: "Le menu", english: "The menu", gender: 'm' },
          { id: 'v3', french: "L'eau", english: "Water", gender: 'f' },
          { id: 'v4', french: "Le vin", english: "Wine", gender: 'm' },
          { id: 'v5', french: "Délicieux", english: "Delicious" },
          { id: 'v6', french: "Le pain", english: "Bread", gender: 'm' },
        ],
        phrases: [
          { id: 'p1', french: "Je voudrais le menu, s'il vous plaît.", english: "I would like the menu, please.", formal: true },
          { id: 'p2', french: "C'est délicieux !", english: "It's delicious!", formal: false },
          { id: 'p3', french: "L'addition, s'il vous plaît.", english: "The check, please.", formal: true },
          { id: 'p4', french: "Je suis végétarien.", english: "I am vegetarian.", formal: true },
        ],
        scenario: {
          title: "Commander le déjeuner",
          description: "Ordering a simple lunch at a bistro.",
          lines: [
            { speaker: "Serveur", french: "Bonjour, vous avez choisi ?", english: "Hello, have you decided?", avatar: "🤵" },
            { speaker: "Client", french: "Oui, je vais prendre le poulet rôti.", english: "Yes, I will have the roast chicken.", avatar: "👱" },
            { speaker: "Serveur", french: "Et comme boisson ?", english: "And for a drink?", avatar: "🤵" },
            { speaker: "Client", french: "Une carafe d'eau, merci.", english: "A jug of water, thank you.", avatar: "👱" },
            { speaker: "Serveur", french: "Très bien, ça arrive tout de suite.", english: "Very well, coming right up.", avatar: "🤵" },
          ]
        }
      },
      {
        id: 'l-a1-3',
        level: Level.A1,
        title: "Ma Routine",
        description: "Describing your daily habits: waking up, transport, and meals.",
        icon: "⏰",
        isPremium: false,
        vocabulary: [
          { id: 'v1', french: "Se réveiller", english: "To wake up" },
          { id: 'v2', french: "Se laver", english: "To wash oneself" },
          { id: 'v3', french: "Le petit-déjeuner", english: "Breakfast", gender: 'm' },
          { id: 'v4', french: "Prendre le bus", english: "To take the bus" },
          { id: 'v5', french: "Rentrer", english: "To go home/come back" },
        ],
        phrases: [
          { id: 'p1', french: "Je me réveille à sept heures.", english: "I wake up at seven.", formal: false },
          { id: 'p2', french: "Je prends un café.", english: "I am having a coffee.", formal: false },
          { id: 'p3', french: "Je pars au travail.", english: "I am leaving for work.", formal: false },
        ],
        scenario: {
          title: "Une matinée typique",
          description: "Talking about morning habits.",
          lines: [
            { speaker: "Ami", french: "Tu te lèves tôt le matin ?", english: "Do you get up early in the morning?", avatar: "🧢" },
            { speaker: "Moi", french: "Oui, je me lève à six heures.", english: "Yes, I get up at six.", avatar: "😐" },
            { speaker: "Ami", french: "C'est tôt ! Tu prends le petit-déjeuner ?", english: "That's early! Do you eat breakfast?", avatar: "🧢" },
            { speaker: "Moi", french: "Juste un café, et je pars.", english: "Just a coffee, and I leave.", avatar: "😐" },
          ]
        }
      }
    ]
  },
  {
    level: Level.A2,
    title: "Élémentaire (Elementary)",
    description: "Unlock full potential. Talk about travel, work, and past experiences.",
    lessons: [
      {
        id: 'l-a2-1',
        level: Level.A2,
        title: "Les Voyages",
        description: "Booking tickets, navigating airports, and asking for directions.",
        icon: "✈️",
        isPremium: true,
        vocabulary: [
          { id: 'v1', french: "Le billet", english: "The ticket", gender: 'm' },
          { id: 'v2', french: "La gare", english: "The train station", gender: 'f' },
          { id: 'v3', french: "La valise", english: "The suitcase", gender: 'f' },
          { id: 'v4', french: "L'avion", english: "The plane", gender: 'm' },
          { id: 'v5', french: "Partir", english: "To leave" },
        ],
        phrases: [
          { id: 'p1', french: "À quelle heure part le train ?", english: "What time does the train leave?", formal: true },
          { id: 'p2', french: "Je cherche la gare.", english: "I am looking for the train station.", formal: true },
          { id: 'p3', french: "J'ai perdu ma valise.", english: "I lost my suitcase.", formal: true },
        ],
        scenario: {
          title: "À la gare",
          description: "Buying a ticket to Lyon.",
          lines: [
            { speaker: "Voyageur", french: "Bonjour, un billet pour Lyon, s'il vous plaît.", english: "Hello, one ticket to Lyon, please.", avatar: "🎒" },
            { speaker: "Guichetier", french: "Aller-simple ou aller-retour ?", english: "One-way or round-trip?", avatar: "👮" },
            { speaker: "Voyageur", french: "Aller-retour. Départ aujourd'hui.", english: "Round-trip. Departing today.", avatar: "🎒" },
            { speaker: "Guichetier", french: "C'est 50 euros.", english: "That is 50 euros.", avatar: "👮" },
          ]
        }
      },
      {
        id: 'l-a2-2',
        level: Level.A2,
        title: "Shopping & Mode",
        description: "Buying clothes, asking for sizes, and colors.",
        icon: "🛍️",
        isPremium: true,
        vocabulary: [
          { id: 'v1', french: "Le magasin", english: "The store", gender: 'm' },
          { id: 'v2', french: "Cher / Chère", english: "Expensive" },
          { id: 'v3', french: "La taille", english: "The size", gender: 'f' },
          { id: 'v4', french: "Payer", english: "To pay" },
          { id: 'v5', french: "La carte", english: "The card", gender: 'f' },
          { id: 'v6', french: "Essayer", english: "To try on" },
        ],
        phrases: [
          { id: 'p1', french: "Combien ça coûte ?", english: "How much does it cost?", formal: true },
          { id: 'p2', french: "Je peux essayer ?", english: "Can I try it on?", formal: true },
          { id: 'p3', french: "Avez-vous une autre taille ?", english: "Do you have another size?", formal: true },
        ],
        scenario: {
          title: "Dans une boutique",
          description: "Buying a sweater.",
          lines: [
            { speaker: "Vendeur", french: "Je peux vous aider ?", english: "Can I help you?", avatar: "👔" },
            { speaker: "Client", french: "Oui, je cherche un pull rouge.", english: "Yes, I am looking for a red sweater.", avatar: "🧢" },
            { speaker: "Vendeur", french: "Quelle est votre taille ?", english: "What is your size?", avatar: "👔" },
            { speaker: "Client", french: "Je fais du M.", english: "I wear a medium.", avatar: "🧢" },
          ]
        }
      },
      {
        id: 'l-a2-3',
        level: Level.A2,
        title: "Santé & Médecin",
        description: "Explaining symptoms, visiting the doctor, and pharmacy basics.",
        icon: "🩺",
        isPremium: true,
        vocabulary: [
          { id: 'v1', french: "Le médecin", english: "The doctor", gender: 'm' },
          { id: 'v2', french: "Malade", english: "Sick" },
          { id: 'v3', french: "La fièvre", english: "Fever", gender: 'f' },
          { id: 'v4', french: "Le médicament", english: "Medicine", gender: 'm' },
          { id: 'v5', french: "La tête", english: "Head", gender: 'f' },
        ],
        phrases: [
          { id: 'p1', french: "Je ne me sens pas bien.", english: "I don't feel well.", formal: false },
          { id: 'p2', french: "J'ai mal à la tête.", english: "I have a headache.", formal: false },
          { id: 'p3', french: "Il faut prendre ce médicament.", english: "You must take this medicine.", formal: true },
        ],
        scenario: {
          title: "Consultation médicale",
          description: "Describing symptoms to a doctor.",
          lines: [
            { speaker: "Médecin", french: "Qu'est-ce qui ne va pas ?", english: "What is wrong?", avatar: "👩‍⚕️" },
            { speaker: "Patient", french: "J'ai très mal au ventre et j'ai de la fièvre.", english: "I have a bad stomach ache and I have a fever.", avatar: "🤒" },
            { speaker: "Médecin", french: "Depuis quand ?", english: "Since when?", avatar: "👩‍⚕️" },
            { speaker: "Patient", french: "Depuis hier soir.", english: "Since last night.", avatar: "🤒" },
          ]
        }
      }
    ]
  }
];