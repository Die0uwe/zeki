import type { BaseTranslation } from "../../i18n-types";

const it_embeds = {
  help: {
    title: "Comandi di {username}",
    description: "Ecco un elenco di tutti i miei comandi. Puoi anche vederli quando scrivi `/` su Discord.",
  },
  about: {
    description:
      '{username} è un bot Discord intuitivo e user-friendly collegato a https://paliapedia.com ed è stato creato da {developers}.',
    statistics_name: 'Statistiche',
    statistics_value: 'Server: {servers}\nUtenti: {users}',
    debug_name: "Debug",
    debug_value: "Shards: {shards}\nShardID: {shardId}",
  },
  item: {
    category: 'Categoria',
    rarity: 'Rarità',
    quality: 'Qualità',
    cost: 'Costo',
    value: 'Valore',
    sold_at: 'Venduto a',
    crafted_by: 'Creato da',
    gathered_from: 'Raccolto da',
    quest_reward_from: 'Ricompensa della missione',
    attached_to: 'Collegato a',
    obtained_by_reading: 'Ottenuto leggendo',
    reward_from: 'Ricompensa da',
    obtained_from: 'Ottenuto da',
    teaches_recipe: 'Insegna ricetta',
    needed_for_quest: 'Necessario per la missione',
    contains_item: 'Contiene oggetto',
  },
  quest: {
    starts_with: 'Inizia con',
    requirement: 'Requisito',
    requirements: 'Requisiti',
    branching_goals: 'Completa {count} dei seguenti',
    turn_in: 'Consegna',
    quest_return: 'Ritorno missione',
    reward: 'Ricompensa',
    rewards: 'Ricompense',
    friendship_points: 'x{amount} Punti di amicizia con {villager}',
    romance_points: 'x{amount} Punti romantici con {villager}',
    mail_message: "Posta di {villager}",
    visit_from: 'Una visita da parte di {villager}',
  },
  recipe: {
    cost: 'Costo',
    craft_time: 'Tempo di creazione',
    required_ingredients: 'Ingredienti necessari',
    produces: 'Produce',
    sold_at: 'Venduto a',
    vendors: 'Venditori',
    gatherables: 'Raccolte',
    mail: 'Posta',
    recipes: 'Ricette',
  },
  villager: {
    gift_preferences: 'Preferenze regalo',
    weekly_wants: 'Desideri settimanali',
    relationship:
      '{type} livello {level} - {levelName} (Richiede {requiredValue})',
  },
  weekly_wants: {
    title: 'Rotazione desideri settimanali',
    description:
      'La rotazione dei desideri settimanali per {date} è ora disponibile! Puoi trovare l\'elenco completo dei desideri settimanali su {url}.',
  },
  miscellaneous: {
    see_more: 'Vedi altri {count} ...',
    no_data: 'Nessun dato disponibile.',
  },
} satisfies BaseTranslation;

export default it_embeds;
