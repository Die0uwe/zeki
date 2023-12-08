import type { BaseTranslation } from '../../i18n-types';

const nl_interactions = {
  settings: {
    news: {
      enabled: 'Nieuws wordt nu verstuurd in {channel}.',
      not_enabled: 'Nieuws is niet ingeschakeld voor deze server.',
      disabled: 'Nieuws wordt niet langer verstuurd in {channel}.',
    },
    locale: {
      success: 'De taalinstelling is gewijzigd naar {locale}.',
    },
  },
  miscellaneous: {
    no_permissions:
      "Ik heb niet de toestemming om berichten te bekijken of te versturen in {channel}.",
    no_results: 'Geen resultaten gevonden.',
    no_results_for: 'Geen resultaten gevonden voor "{query}".',
  },
} voldoet aan BaseTranslation;

export default nl_interactions;
