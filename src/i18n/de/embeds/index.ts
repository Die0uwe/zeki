import type { BaseTranslation } from "../../i18n-types";

const de_embeds = {
	help: {
		title: "Befehle von {username}",
		description: "Hier ist eine Liste aller meiner Befehle. Du kannst sie auch sehen, wenn du `/` in Discord eingibst.",
	},
	about: {
		description:
			'{username} ist ein intuitiver und benutzerfreundlicher Discord-Bot, der mit https://paliapedia.com verbunden ist und von {developers} erstellt wurde.',
		statistics_name: 'Statistiken',
		statistics_value: 'Server: {servers}\nBenutzer: {users}',
		debug_name: "Debug",
		debug_value: "Shards: {shards}\nShardID: {shardId}",
	},
	item: {
		category: 'Kategorie',
		rarity: 'Seltenheit',
		quality: 'Qualität',
		cost: 'Kosten',
		value: 'Wert',
		sold_at: 'Verkauft bei',
		crafted_by: 'Hergestellt von',
		gathered_from: 'Gesammelt von',
		quest_reward_from: 'Belohnung von der Quest',
		attached_to: 'Angebracht an',
		obtained_by_reading: 'Erhalten durch Lesen',
		reward_from: 'Belohnung von',
		obtained_from: 'Erhalten von',
		teaches_recipe: 'Lehrt Rezept',
		needed_for_quest: 'Benötigt für Quest',
		contains_item: 'Enthält Gegenstand',
	},
	quest: {
		starts_with: 'Beginnt mit',
		requirement: 'Anforderung',
		requirements: 'Anforderungen',
		branching_goals: 'Vervollständige {count} der folgenden',
		turn_in: 'Abgeben bei',
		quest_return: 'Rückkehr der Quest',
		reward: 'Belohnung',
		rewards: 'Belohnungen',
		friendship_points: 'x{amount} Freundschaftspunkte mit {villager}',
		romance_points: 'x{amount} Romantikpunkte mit {villager}',
		mail_message: "{villager}'s Post",
		visit_from: 'Ein Besuch von {villager}',
	},
	recipe: {
		cost: 'Kosten',
		craft_time: 'Herstellungszeit',
		required_ingredients: 'Benötigte Zutaten',
		produces: 'Produziert',
		sold_at: 'Verkauft bei',
		vendors: 'Verkäufer',
		gatherables: 'Sammelbares',
		mail: 'Post',
		recipes: 'Rezepte',
	},
	villager: {
		gift_preferences: 'Geschenkvorlieben',
		weekly_wants: 'Wöchentliche Wünsche',
		relationship:
			'{type} Level {level} - {levelName} (Benötigt {requiredValue})',
	},
	weekly_wants: {
		title: 'Rotation der Wöchentlichen Wünsche',
		description:
			'Die Rotation der wöchentlichen Wünsche für den {date} ist jetzt verfügbar! Du kannst die vollständige Liste der wöchentlichen Wünsche auf {url} finden.',
	},
	miscellaneous: {
		see_more: 'Siehe {count} mehr ...',
		no_data: 'Keine Daten verfügbar.',
	},
} satisfies BaseTranslation;

export default de_embeds;
