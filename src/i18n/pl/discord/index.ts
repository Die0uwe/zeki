import { BaseTranslation } from "../../i18n-types";

const pl_discord = {
  settings: {
    name: 'ustawienia',
    description: 'Dostęp i zarządzanie ustawieniami serwera.',
  },
  ['settings.locale']: {
    name: 'lokalizacja',
    description: 'Zmień ustawienia językowe dla swojego serwera.',
  },
  ['settings.locale.value']: {
    name: 'wartość',
    description: 'Określ preferowany język dla swojego serwera.',
  },
  ['settings.news']: {
    name: 'wiadomości',
    description: 'Kontroluj ustawienia wiadomości dla swojego serwera.',
  },
  ['settings.news.enable']: {
    name: 'włącz',
    description: 'Aktywuj funkcję wiadomości dla swojego serwera.',
  },
  ['settings.news.enable.channel']: {
    name: 'kanał',
    description: 'Wyznacz kanał, gdzie będą publikowane aktualizacje wiadomości.',
  },
  ['settings.news.disable']: {
    name: 'wyłącz',
    description: 'Dezaktywuj funkcję wiadomości dla swojego serwera.',
  },
  help: {
    name: 'pomoc',
    description: "Wyświetl kompletną listę dostępnych poleceń Zeki.",
  },
  about: {
    name: 'o',
    description: 'Pobierz szczegółowe informacje o Zeki.',
  },
  quest: {
    name: 'zadanie',
    description: 'Szukaj zadań i związanych z nimi informacji.',
  },
  'quest.query': {
    name: 'zapytanie',
    description: 'Jakie zadanie chcesz znaleźć?',
  },
  villager: {
    name: 'mieszkaniec',
    description: 'Sprawdź informacje o konkretnych mieszkańcach.',
  },
  'villager.query': {
    name: 'zapytanie',
    description: 'O jakiego mieszkańca chcesz zapytać?',
  },
  recipe: {
    name: 'przepis',
    description: 'Szukaj przepisów i szczegółów dotyczących rzemiosła.',
  },
  'recipe.query': {
    name: 'zapytanie',
    description: 'Jaki przepis chcesz znaleźć?',
  },
  'recipe.amount': {
    name: 'ilość',
    description: 'Określ ilość przedmiotów do wykonania.',
  },
  item: {
    name: 'przedmiot',
    description: 'Szukaj przedmiotów i szczegółów dotyczących przedmiotów.',
  },
  'item.query': {
    name: 'zapytanie',
    description: 'Jaki przedmiot chcesz znaleźć?',
  },
  weekly: {
    name: 'tygodniowo',
    description: 'Pobierz tygodniowe preferencje i życzenia mieszkańców.',
  },
  bundle: {
    name: 'pakiet',
    description: 'Szukaj informacji o paczkach i ich zawartości.',
  },
  'bundle.query': {
    name: 'zapytanie',
    description: 'Jaki pakiet chcesz znaleźć?',
  },
  accomplishment: {
    name: 'osiągnięcie',
    description: 'Szukaj osiągnięć i szczegółów dotyczących osiągnięć.',
  },
  'accomplishment.query': {
    name: 'zapytanie',
    description: 'Jakie osiągnięcie chcesz znaleźć?',
  },
} satisfies BaseTranslation;

export default pl_discord;
