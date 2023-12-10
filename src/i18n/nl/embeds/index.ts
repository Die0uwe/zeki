import type { BaseTranslation } from "../../i18n-types";

const nl_embeds = {
	help: {
		title: "Commando's van {username}",
		description: "Hier is een lijst van al mijn commando's. Je kunt ze ook zien wanneer je `/` typt in Discord.",
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
		zeldzaamheid: 'Zeldzaamheid',
		kwaliteit: 'Kwaliteit',
		kosten: 'Kosten',
		waarde: 'Waarde',
		verkocht_bij: 'Verkocht bij',
		gemaakt_door: 'Gemaakt door',
		verzameld_van: 'Verzameld van',
		quest_beloning_van: 'Questbeloning van',
		bevestigd_aan: 'Bevestigd aan',
		verkregen_door_te_lezen: 'Verkregen door te lezen',
		beloning_van: 'Beloning van',
		verkregen_van: 'Verkregen van',
		leert_recept: 'Leert recept',
		nodig_voor_quest: 'Nodig voor quest',
		bevat_item: 'Bevat item',
	},
	quest: {
		begint_met: 'Begint met',
		vereiste: 'Vereiste',
		vereisten: 'Vereisten',
		tak_doelen: 'Voltooi {count} van het volgende',
		omdraaien: 'Inleveren bij',
		quest_terugkeer: 'Quest terugkeer',
		beloning: 'Beloning',
		beloningen: 'Beloningen',
		vriendschapspunten: 'x{amount} Vriendschapspunten met {villager}',
		romantiekspunten: 'x{amount} Romantiekspunten met {villager}',
		mail_bericht: "Mail van {villager}",
		bezoek_van: 'Een bezoek van {villager}',
	},
	recipe: {
		kosten: 'Kosten',
		maaktijd: 'Maaktijd',
		vereiste_ingredienten: 'Vereiste ingrediënten',
		produceert: 'Produceert',
		verkocht_bij: 'Verkocht bij',
		verkopers: 'Verkopers',
		verzamelobjecten: 'Verzamelobjecten',
		mail: 'Mail',
		recepten: 'Recepten',
	},
	villager: {
		cadeau_voorkeuren: 'Cadeauvoorkeuren',
		wekelijkse_verlangens: 'Wekelijkse verlangens',
		relatie:
			'{type} niveau {level} - {levelName} (Vereist {requiredValue})',
	},
	wekelijkse_verlangens: {
		title: 'Rotatie Wekelijkse Verlangens',
		description:
			'De rotatie van wekelijkse verlangens voor {date} is nu beschikbaar! Je kunt de volledige lijst met wekelijkse verlangens vinden op {url}.',
	},
	diversen: {
		zie_meer: 'Zie {count} meer ...',
		geen_gegevens: 'Geen gegevens beschikbaar.',
	},
} satisfies BaseTranslation;

export default nl_embeds;
