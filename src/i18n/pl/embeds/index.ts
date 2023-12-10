import type { BaseTranslation } from '../../i18n-types';

const pl_embeds = {
	help: {
		title: 'Komendy użytkownika {username}',
		description: 'Oto lista wszystkich moich komend. Możesz również je zobaczyć, wpisując `/` na Discordzie.',
	},
	about: {
		description:
			'{username} to intuicyjny i przyjazny użytkownikowi bot Discord połączony z https://paliapedia.com i stworzony przez {developers}.',
		statistics_name: 'Statystyki',
		statistics_value: 'Serwery: {servers}\nUżytkownicy: {users}',
		debug_name: 'Debugowanie',
		debug_value: 'Kawałki: {shards}\nID Kawałka: {shardId}',
	},
	item: {
		category: 'Kategoria',
		rarity: 'Rzadkość',
		quality: 'Jakość',
		cost: 'Koszt',
		value: 'Wartość',
		sold_at: 'Sprzedane w',
		crafted_by: 'Stworzone przez',
		gathered_from: 'Zebrane z',
		quest_reward_from: 'Nagroda za zadanie od',
		attached_to: 'Dołączone do',
		obtained_by_reading: 'Uzyskane z czytania',
		reward_from: 'Nagroda od',
		obtained_from: 'Uzyskane od',
		teaches_recipe: 'Naucza receptury',
		needed_for_quest: 'Potrzebne do zadania',
		contains_item: 'Zawiera przedmiot',
	},
	quest: {
		starts_with: 'Zaczyna się od',
		requirement: 'Wymaganie',
		requirements: 'Wymagania',
		branching_goals: 'Ukończ {count} z poniższych',
		turn_in: 'Oddaj',
		quest_return: 'Powrót z zadania',
		reward: 'Nagroda',
		rewards: 'Nagrody',
		friendship_points: 'x{amount} Punkty przyjaźni z {villager}',
		romance_points: 'x{amount} Punkty romansu z {villager}',
		mail_message: 'List od {villager}',
		visit_from: 'Wizyta od {villager}',
	},
	recipe: {
		cost: 'Koszt',
		craft_time: 'Czas produkcji',
		required_ingredients: 'Wymagane składniki',
		produces: 'Produkuje',
		sold_at: 'Sprzedane w',
		vendors: 'Sprzedawcy',
		gatherables: 'Zbierane',
		mail: 'Poczta',
		recipes: 'Receptury',
	},
	villager: {
		gift_preferences: 'Preferencje podarunków',
		weekly_wants: 'Tygodniowe życzenia',
		relationship:
			'{type} poziom {level} - {levelName} (Wymaga {requiredValue})',
	},
	weekly_wants: {
		title: 'Rotacja tygodniowych życzeń',
		description:
			'Rotacja tygodniowych życzeń na dzień {date} jest teraz dostępna! Pełną listę tygodniowych życzeń znajdziesz pod adresem {url}.',
	},
	miscellaneous: {
		see_more: 'Zobacz {count} więcej...',
		no_data: 'Brak dostępnych danych.',
	},
} satisfies BaseTranslation;

export default pl_embeds;
