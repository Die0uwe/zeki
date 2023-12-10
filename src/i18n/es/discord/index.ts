import { BaseTranslation } from "../../i18n-types";

const es_discord = {
  settings: {
    name: 'configuración',
    description: 'Acceda y administre la configuración de su servidor.',
  },
  ['settings.locale']: {
    name: 'idioma',
    description: 'Cambie la configuración de idioma para su servidor.',
  },
  ['settings.locale.value']: {
    name: 'valor',
    description: 'Especifique el idioma preferido para su servidor.',
  },
  ['settings.news']: {
    name: 'noticias',
    description: 'Controle la configuración de noticias para su servidor.',
  },
  ['settings.news.enable']: {
    name: 'habilitar',
    description: 'Active la función de noticias para su servidor.',
  },
  ['settings.news.enable.channel']: {
    name: 'canal',
    description: 'Designe el canal donde se publicarán las actualizaciones de noticias.',
  },
  ['settings.news.disable']: {
    name: 'desactivar',
    description: 'Desactive la función de noticias para su servidor.',
  },
  help: {
    name: 'ayuda',
    description: "Muestra una lista completa de los comandos disponibles de Zeki.",
  },
  about: {
    name: 'acerca de',
    description: 'Recupera información detallada sobre Zeki.',
  },
  quest: {
    name: 'búsqueda',
    description: 'Busque misiones e información relacionada.',
  },
  'quest.query': {
    name: 'consulta',
    description: '¿Qué misión estás buscando?',
  },
  villager: {
    name: 'aldeano',
    description: 'Busque información sobre aldeanos específicos.',
  },
  'villager.query': {
    name: 'consulta',
    description: '¿Qué aldeano estás buscando?',
  },
  recipe: {
    name: 'receta',
    description: 'Busque recetas de elaboración y detalles de elaboración.',
  },
  'recipe.query': {
    name: 'consulta',
    description: '¿Qué receta estás buscando?',
  },
  'recipe.amount': {
    name: 'cantidad',
    description: 'Determine la cantidad de elementos a elaborar.',
  },
  item: {
    name: 'objeto',
    description: 'Busque elementos y detalles de objetos.',
  },
  'item.query': {
    name: 'consulta',
    description: '¿Qué objeto estás buscando?',
  },
  weekly: {
    name: 'semanal',
    description: 'Recupere las preferencias y deseos semanales de los aldeanos.',
  },
  bundle: {
    name: 'paquete',
    description: 'Busque información sobre paquetes y su contenido.',
  },
  'bundle.query': {
    name: 'consulta',
    description: '¿Qué paquete estás buscando?',
  },
  accomplishment: {
    name: 'logro',
    description: 'Busque detalles de logros y logros.',
  },
  'accomplishment.query': {
    name: 'consulta',
    description: '¿Qué logro estás buscando?',
  },
} satisfies BaseTranslation;

export default es_discord;
