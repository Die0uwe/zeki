import type { BaseTranslation } from "../../i18n-types";

const nl_embeds = {
  help: {
    title: "{username}'s commando's",
    description: "Hier is een lijst met al mijn commando's. Je kunt ze ook zien wanneer je `/` typt in Discord.",
  },
  about: {
    description:
      '{username} is een intuïtieve en gebruiksvriendelijke Discord-bot verbonden met https://paliapedia.com en is gemaakt door {developers}.',
    statistics_name: 'Statistieken',
    statistics_value: 'Servers: {servers}\nGebruikers: {users}',
    debug_name: "Debug",
    debug_value: "Shards: {shards}\nShardID: {shardId}",
  },
  item: {
    category: 'Categorie',
    rarity: 'Zeldzaamheid',
    kwaliteit: 'Kwaliteit',
    cost: 'Kosten',
    value: 'Waarde',
    verkocht_bij: 'Verkocht bij',
    gemaakt_door: 'Gemaakt door',
    verzameld_uit: 'Verzameld uit',
    quest_beloning_van: 'Quest beloning van',
    gehecht_aan: 'Gehecht aan',
    verkregen_door_te_lezen: 'Verkregen door te lezen',
    beloning_van: 'Beloning van',
    verkregen_uit: 'Verkregen uit',
    leert_recept: 'Leert recept',
    nodig_voor_quest: 'Nodig voor quest',
    bevat_item: 'Bevat item',
  },
  quest: {
    begint_met: 'Begint met',
    vereiste: 'Vereiste',
    vereisten: 'Vereisten',
    tak_doelen: 'Voltooi {count} van de volgende',
    inleveren_bij: 'Inleveren bij',
    quest_terugkeer: 'Quest terugkeer',
    beloning: 'Beloning',
    beloningen: 'Beloningen',
    vriendschap_punten: 'x{amount} Vriendschapspunten met {villager}',
    romantiek_punten: 'x{amount} Romantiekpunten met {villager}',
    mail_bericht: "{villager}'s post",
    bezoek_van: 'Een bezoek van {villager}',
  },
  recipe: {
    kosten: 'Kosten',
    craft_tijd: 'Craft tijd',
    benodigde_ingredienten: 'Benodigde ingrediënten',
    produceert: 'Produceert',
    verkocht_bij: 'Verkocht bij',
    verkopers: 'Verkopers',
    verzamelbare_items: 'Verzamelbare items',
    post: 'Post',
    recepten: 'Recepten',
  },
  villager: {
    cadeau_voorkeuren: 'Cadeau voorkeuren',
    wekelijkse_wensen: 'Wekelijkse wensen',
    relatie:
      '{type} niveau {level} - {levelName} (Vereist {requiredValue})',
  },
  wekelijkse_wensen: {
    title: 'Rotatie van Wekelijkse Wensen',
    description:
      'De rotatie van wekelijkse wensen voor {date} is nu beschikbaar! Je kunt de volledige lijst van wekelijkse wensen vinden op {url}.',
  },
  diverse: {
    zie_meer: 'Zie {count} meer ...',
    geen_gegevens: 'Geen gegevens beschikbaar.',
  },
} voldoet aan BaseTranslation;

export default nl_embeds;
