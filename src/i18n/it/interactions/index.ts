import type { BaseTranslation } from '../../i18n-types';

const it_interactions = {
    settings: {
        news: {
            enabled: 'Le notizie saranno ora inviate in {channel}.',
            not_enabled: 'Le notizie non sono abilitate per questo server.',
            disabled: 'Le notizie non saranno più inviate in {channel}.',
        },
        locale: {
            success: 'La lingua è stata impostata su {locale}.',
        },
    },
    miscellaneous: {
        no_permissions:
            "Non ho il permesso di visualizzare o inviare messaggi in {channel}.",
        no_results: 'Nessun risultato trovato.',
        no_results_for: 'Nessun risultato trovato per "{query}".',
    },
} satisfies BaseTranslation;

export default it_interactions;
