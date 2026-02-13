// Vocabulari data - 58 illustrated pages
var VOCAB_SECTIONS = [
  {id: "exteriors", name: "Els exteriors", icon: "🏞️", color: "#3498DB"},
  {id: "habitatges", name: "Els habitatges", icon: "🏠", color: "#E74C3C"},
  {id: "serveis", name: "Els serveis", icon: "🏪", color: "#9B59B6"},
  {id: "aliments", name: "Els aliments", icon: "🍎", color: "#F39C12"},
  {id: "altres", name: "Altres àrees", icon: "📚", color: "#1ABC9C"}
];

var VOCABULARI = [
  // ELS EXTERIORS (12 pages)
  {id: 18, title: "Vista panoràmica", subtitle: "Panoramic view", section: "exteriors", icon: "🏞️", img: "assets/vocabulari/19.jpeg", page: 18},
  {id: 19, title: "Els transports", subtitle: "Transport", section: "exteriors", icon: "🚗", img: "assets/vocabulari/20.jpeg", page: 19},
  {id: 20, title: "El poble", subtitle: "The village", section: "exteriors", icon: "🏘️", img: "assets/vocabulari/21.jpeg", page: 20},
  {id: 21, title: "El parc", subtitle: "The park", section: "exteriors", icon: "🌳", img: "assets/vocabulari/22.jpeg", page: 21},
  {id: 22, title: "La ciutat", subtitle: "The city", section: "exteriors", icon: "🏙️", img: "assets/vocabulari/23.jpeg", page: 22},
  {id: 24, title: "La festa", subtitle: "The party", section: "exteriors", icon: "🎉", img: "assets/vocabulari/25.jpeg", page: 24},
  {id: 25, title: "El lleure", subtitle: "Leisure", section: "exteriors", icon: "🎨", img: "assets/vocabulari/26.jpeg", page: 25},
  {id: 26, title: "La muntanya i el bosc", subtitle: "Mountains & forest", section: "exteriors", icon: "⛰️", img: "assets/vocabulari/27.jpeg", page: 26},
  {id: 27, title: "A pagès", subtitle: "In the country", section: "exteriors", icon: "🌾", img: "assets/vocabulari/28.jpeg", page: 27},
  {id: 28, title: "El mar", subtitle: "The sea", section: "exteriors", icon: "🌊", img: "assets/vocabulari/29.jpeg", page: 28},
  {id: 29, title: "La platja", subtitle: "The beach", section: "exteriors", icon: "🏖️", img: "assets/vocabulari/30.jpeg", page: 29},
  {id: 30, title: "El port", subtitle: "The port", section: "exteriors", icon: "⚓", img: "assets/vocabulari/31.jpeg", page: 30},
  
  // ELS HABITATGES (9 pages)
  {id: 32, title: "La casa", subtitle: "The house", section: "habitatges", icon: "🏠", img: "assets/vocabulari/33.jpeg", page: 32},
  {id: 33, title: "El càmping", subtitle: "The campsite", section: "habitatges", icon: "⛺", img: "assets/vocabulari/34.jpeg", page: 33},
  {id: 34, title: "L'hotel", subtitle: "The hotel", section: "habitatges", icon: "🏨", img: "assets/vocabulari/35.jpeg", page: 34},
  {id: 35, title: "El dormitori", subtitle: "The bedroom", section: "habitatges", icon: "🛏️", img: "assets/vocabulari/36.jpeg", page: 35},
  {id: 36, title: "El bany", subtitle: "The bathroom", section: "habitatges", icon: "🚿", img: "assets/vocabulari/37.jpeg", page: 36},
  {id: 37, title: "La cuina", subtitle: "The kitchen", section: "habitatges", icon: "🍳", img: "assets/vocabulari/38.jpeg", page: 37},
  {id: 38, title: "Els estris de cuina", subtitle: "Kitchen utensils", section: "habitatges", icon: "🍴", img: "assets/vocabulari/39.jpeg", page: 38},
  {id: 39, title: "El menjador", subtitle: "The dining room", section: "habitatges", icon: "🍽️", img: "assets/vocabulari/40.jpeg", page: 39},
  {id: 40, title: "La sala d'estar", subtitle: "The living room", section: "habitatges", icon: "🛋️", img: "assets/vocabulari/41.jpeg", page: 40},
  
  // ELS SERVEIS (11 pages)
  {id: 42, title: "La confecció", subtitle: "Clothing", section: "serveis", icon: "👗", img: "assets/vocabulari/43.jpeg", page: 42},
  {id: 43, title: "La ferreteria", subtitle: "Hardware store", section: "serveis", icon: "🔧", img: "assets/vocabulari/44.jpeg", page: 43},
  {id: 44, title: "Aparells electrònics", subtitle: "Electronics", section: "serveis", icon: "📱", img: "assets/vocabulari/45.jpeg", page: 44},
  {id: 45, title: "La cafeteria", subtitle: "The café", section: "serveis", icon: "☕", img: "assets/vocabulari/46.jpeg", page: 45},
  {id: 46, title: "El restaurant", subtitle: "The restaurant", section: "serveis", icon: "🍴", img: "assets/vocabulari/47.jpeg", page: 46},
  {id: 47, title: "La neteja", subtitle: "Cleaning", section: "serveis", icon: "🧹", img: "assets/vocabulari/48.jpeg", page: 47},
  {id: 48, title: "El garatge", subtitle: "The garage", section: "serveis", icon: "🚗", img: "assets/vocabulari/49.jpeg", page: 48},
  {id: 49, title: "Els serveis públics", subtitle: "Public services", section: "serveis", icon: "🏛️", img: "assets/vocabulari/50.jpeg", page: 49},
  {id: 50, title: "Urgències", subtitle: "Emergencies", section: "serveis", icon: "🚑", img: "assets/vocabulari/51.jpeg", page: 50},
  {id: 51, title: "Els oficis", subtitle: "Professions", section: "serveis", icon: "👷", img: "assets/vocabulari/52.jpeg", page: 51},
  {id: 52, title: "La farmàcia", subtitle: "The pharmacy", section: "serveis", icon: "💊", img: "assets/vocabulari/53.jpeg", page: 52},
  
  // ELS ALIMENTS (10 pages)
  {id: 54, title: "El supermercat", subtitle: "The supermarket", section: "aliments", icon: "🛒", img: "assets/vocabulari/55.jpeg", page: 54},
  {id: 55, title: "El mercat", subtitle: "The market", section: "aliments", icon: "🏪", img: "assets/vocabulari/56.jpeg", page: 55},
  {id: 56, title: "Els queviures", subtitle: "Groceries", section: "aliments", icon: "🥫", img: "assets/vocabulari/57.jpeg", page: 56},
  {id: 57, title: "La carnisseria", subtitle: "The butcher", section: "aliments", icon: "🥩", img: "assets/vocabulari/58.jpeg", page: 57},
  {id: 58, title: "La peixateria", subtitle: "The fish shop", section: "aliments", icon: "🐟", img: "assets/vocabulari/59.jpeg", page: 58},
  {id: 59, title: "La fleca", subtitle: "The bakery", section: "aliments", icon: "🍞", img: "assets/vocabulari/60.jpeg", page: 59},
  {id: 60, title: "Les fruites", subtitle: "Fruits", section: "aliments", icon: "🍎", img: "assets/vocabulari/61.jpeg", page: 60},
  {id: 62, title: "Les verdures", subtitle: "Vegetables", section: "aliments", icon: "🥬", img: "assets/vocabulari/63.jpeg", page: 62},
  {id: 64, title: "Les herbes i espècies", subtitle: "Herbs & spices", section: "aliments", icon: "🌿", img: "assets/vocabulari/65.jpeg", page: 64},
  {id: 65, title: "La pastisseria", subtitle: "The pastry shop", section: "aliments", icon: "🍰", img: "assets/vocabulari/66.jpeg", page: 65},
  
  // ALTRES ÀREES (16 pages)
  {id: 68, title: "El cos humà", subtitle: "The human body", section: "altres", icon: "🧍", img: "assets/vocabulari/69.jpeg", page: 68},
  {id: 69, title: "Accidents i malalties", subtitle: "Accidents & illnesses", section: "altres", icon: "🤕", img: "assets/vocabulari/70.jpeg", page: 69},
  {id: 70, title: "Els esports", subtitle: "Sports", section: "altres", icon: "⚽", img: "assets/vocabulari/71.jpeg", page: 70},
  {id: 72, title: "Les hores i els nombres", subtitle: "Time & numbers", section: "altres", icon: "🕐", img: "assets/vocabulari/73.jpeg", page: 72},
  {id: 73, title: "El temps", subtitle: "The weather", section: "altres", icon: "☀️", img: "assets/vocabulari/74.jpeg", page: 73},
  {id: 74, title: "El calendari", subtitle: "The calendar", section: "altres", icon: "📅", img: "assets/vocabulari/75.jpeg", page: 74},
  {id: 75, title: "Els colors", subtitle: "Colors", section: "altres", icon: "🎨", img: "assets/vocabulari/76.jpeg", page: 75},
  {id: 76, title: "Els àpats", subtitle: "Meals", section: "altres", icon: "🍽️", img: "assets/vocabulari/77.jpeg", page: 76},
  {id: 77, title: "Les festes tradicionals", subtitle: "Traditional festivals", section: "altres", icon: "🎊", img: "assets/vocabulari/78.jpeg", page: 77},
  {id: 78, title: "L'escola bressol", subtitle: "Nursery school", section: "altres", icon: "👶", img: "assets/vocabulari/79.jpeg", page: 78},
  {id: 79, title: "L'escola d'adults", subtitle: "Adult school", section: "altres", icon: "📚", img: "assets/vocabulari/80.jpeg", page: 79},
  {id: 80, title: "Verbs", subtitle: "Verbs", section: "altres", icon: "▶️", img: "assets/vocabulari/81.jpeg", page: 80},
  {id: 81, title: "Adjectius", subtitle: "Adjectives", section: "altres", icon: "✨", img: "assets/vocabulari/82.jpeg", page: 82},
  {id: 82, title: "Vostè és aquí", subtitle: "You are here", section: "altres", icon: "📍", img: "assets/vocabulari/83.jpeg", page: 82},
  {id: 84, title: "Frases d'ús corrent", subtitle: "Common phrases", section: "altres", icon: "💬", img: "assets/vocabulari/85.jpeg", page: 84},
  {id: 93, title: "Conversa per whatsapp", subtitle: "WhatsApp conversation", section: "altres", icon: "📱", img: "assets/vocabulari/94.jpeg", page: 93}
];
