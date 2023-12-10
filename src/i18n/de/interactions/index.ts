import type { BaseTranslation } from '../../i18n-types';

const de_interactions = {
    settings: {
      news: {
        enabled: 'Nachrichten werden jetzt in {channel} gesendet.',
        not_enabled: 'Nachrichten sind für diesen Server nicht aktiviert.',
        disabled: 'Nachrichten werden nicht mehr in {channel} gesendet.',
      },
      locale: {
        success: 'Die Spracheinstellung wurde auf {locale} festgelegt.',
      },
    },
    miscellaneous: {
      no_permissions:
        "Ich habe nicht die Berechtigung, Nachrichten in {channel} anzusehen oder zu senden.",
      no_results: 'Keine Ergebnisse gefunden.',
      no_results_for: 'Keine Ergebnisse gefunden für "{query}".',
    },
} satisfies BaseTranslation;

export default de_interactions;
