import { BaseTranslation } from "../../i18n-types";

const it_discord = {
  settings: {
    name: 'impostazioni',
    description: 'Accedi e gestisci le impostazioni del tuo server.',
  },
  ['settings.locale']: {
    name: 'locale',
    description: 'Cambia le impostazioni della lingua per il tuo server.',
  },
  ['settings.locale.value']: {
    name: 'valore',
    description: 'Specifica la lingua preferita per il tuo server.',
  },
  ['settings.news']: {
    name: 'notizie',
    description: 'Controlla le impostazioni delle notizie per il tuo server.',
  },
  ['settings.news.enable']: {
    name: 'attiva',
    description: 'Attiva la funzione di notizie per il tuo server.',
  },
  ['settings.news.enable.channel']: {
    name: 'canale',
    description: 'Designa il canale in cui verranno pubblicate le notizie.',
  },
  ['settings.news.disable']: {
    name: 'disattiva',
    description: 'Disattiva la funzione di notizie per il tuo server.',
  },
  help: {
    name: 'aiuto',
    description: "Mostra un elenco completo dei comandi disponibili di Zeki.",
  },
  about: {
    name: 'info',
    description: 'Recupera informazioni dettagliate su Zeki.',
  },
  quest: {
    name: 'ricerca',
    description: 'Cerca missioni e informazioni correlate.',
  },
  'quest.query': {
    name: 'query',
    description: 'Quale missione stai cercando?',
  },
  villager: {
    name: 'abitante',
    description: 'Cerca informazioni su abitanti specifici.',
  },
  'villager.query': {
    name: 'query',
    description: 'Quale abitante stai cercando?',
  },
  recipe: {
    name: 'ricetta',
    description: 'Cerca ricette e dettagli sulla creazione.',
  },
  'recipe.query': {
    name: 'query',
    description: 'Quale ricetta stai cercando?',
  },
  'recipe.amount': {
    name: 'quantità',
    description: 'Determina la quantità di oggetti da creare.',
  },
  item: {
    name: 'oggetto',
    description: 'Cerca oggetti e dettagli sugli oggetti.',
  },
  'item.query': {
    name: 'query',
    description: 'Quale oggetto stai cercando?',
  },
  weekly: {
    name: 'settimanale',
    description: 'Recupera le preferenze settimanali e i desideri degli abitanti.',
  },
  bundle: {
    name: 'pacchetto',
    description: 'Cerca informazioni su pacchetti e i loro contenuti.',
  },
  'bundle.query': {
    name: 'query',
    description: 'Quale pacchetto stai cercando?',
  },
  accomplishment: {
    name: 'realizzazione',
    description: 'Cerca dettagli su realizzazioni e obiettivi.',
  },
  'accomplishment.query': {
    name: 'query',
    description: 'Quale realizzazione stai cercando?',
  },
} satisfies BaseTranslation;

export default it_discord;
