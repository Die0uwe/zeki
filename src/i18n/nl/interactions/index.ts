import type { BaseTranslation } from '../../i18n-types';

const nl_interactions = {
    settings: {
      news: {
        enabled: 'Nieuws zal nu worden verzonden in {channel}.',
        not_enabled: 'Nieuws is niet ingeschakeld voor deze server.',
        disabled: 'Nieuws zal niet langer worden verzonden in {channel}.',
      },
      locale: {
        success: 'De taalinstelling is gewijzigd naar {locale}.',
      },
    },
    miscellaneous: {
      no_permissions:
        "Ik heb geen toestemming om berichten te bekijken of te verzenden in {channel}.",
      no_results: 'Geen resultaten gevonden.',
      no_results_for: 'Geen resultaten gevonden voor "{query}".',
    },
} satisfies BaseTranslation;

export default nl_interactions;

