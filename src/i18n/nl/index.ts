import type { Translation } from '../i18n-types';

const nl = {
  embeds: {
    help: {
      title: "{username}'s commands",
      description: 'Hier een overzicht van mijn commando's .',
    },
    info: {
      description:
        '{username} is een intuïtieve en gebruiksvriendelijke Discord-bot die verbonden is met https://paliapedia.com en is gemaakt door [glazk0](discord://-/users/247344130798256130).',
      statistics_name: 'Statistics',
      statistics_value: 'Servers: {servers}\nUsers: {users}',
      debug_name: 'Debug',
      debug_value:
        'Clusters: {clusters}\nShards: {shards}\nShardID: {shardId}\nClusterID: {clusterId}',
    },
  },
  interactions: {
    settings: {
      news: {
        no_permissions:
          "ik heb geen toestemming het kanaal te bekijken of berichten te versturen in {channel}.",
        enabled: 'Nieuws word nu vermeld in {channel}.',
        not_enabled: 'Nieuws staat niet aan op deze server.',
        disabled: 'Nieuws word niet langer vermeld in {channel}.',
      },
      locale: {
        success: 'De taal is ingesteld op {locale}.',
      },
    },
    miscellaneous: {
      no_results: 'No results found.',
      no_results_for: 'No results found for "{query}".',
    },
  },
} satisfies Translation;

export default nl;
