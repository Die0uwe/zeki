import type { BaseTranslation } from '../../i18n-types';

const pl_interactions = {
  settings: {
    news: {
      enabled: 'Teraz wiadomości będą wysyłane na {channel}.',
      not_enabled: 'Wiadomości nie są włączone dla tego serwera.',
      disabled: 'Wiadomości nie będą już wysyłane na {channel}.',
    },
    locale: {
      success: 'Język ustawiono na {locale}.',
    },
  },
  miscellaneous: {
    no_permissions:
      "Nie mam uprawnień do przeglądania lub wysyłania wiadomości na kanale {channel}.",
    no_results: 'Nie znaleziono wyników.',
    no_results_for: 'Nie znaleziono wyników dla "{query}".',
  },
} satisfies BaseTranslation;

export default pl_interactions;
