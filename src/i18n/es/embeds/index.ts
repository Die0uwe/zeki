import type { BaseTranslation } from "../../i18n-types";

const es_embeds = {
	help: {
		title: "Comandos de {username}",
		description: "Aquí tienes una lista de todos mis comandos. También puedes verlos cuando escribes `/` en Discord.",
	},
	about: {
		description:
			'{username} es un bot de Discord intuitivo y fácil de usar conectado a https://paliapedia.com y ha sido creado por {developers}.',
		statistics_name: 'Estadísticas',
		statistics_value: 'Servidores: {servers}\nUsuarios: {users}',
		debug_name: "Depuración",
		debug_value: "Fragmentos: {shards}\nID del fragmento: {shardId}",
	},
	item: {
		category: 'Categoría',
		rarity: 'Rareza',
		quality: 'Calidad',
		cost: 'Costo',
		value: 'Valor',
		sold_at: 'Vendido en',
		crafted_by: 'Creado por',
		gathered_from: 'Recolectado de',
		quest_reward_from: 'Recompensa de la misión',
		attached_to: 'Adjunto a',
		obtained_by_reading: 'Obtenido al leer',
		reward_from: 'Recompensa de',
		obtained_from: 'Obtenido de',
		teaches_recipe: 'Enseña receta',
		needed_for_quest: 'Necesario para la misión',
		contains_item: 'Contiene ítem',
	},
	quest: {
		starts_with: 'Comienza con',
		requirement: 'Requisito',
		requirements: 'Requisitos',
		branching_goals: 'Completa {count} de los siguientes',
		turn_in: 'Entregar en',
		quest_return: 'Devolver misión',
		reward: 'Recompensa',
		rewards: 'Recompensas',
		friendship_points: 'x{amount} Puntos de amistad con {villager}',
		romance_points: 'x{amount} Puntos románticos con {villager}',
		mail_message: "Correo de {villager}",
		visit_from: 'Visita de {villager}',
	},
	recipe: {
		cost: 'Costo',
		craft_time: 'Tiempo de elaboración',
		required_ingredients: 'Ingredientes necesarios',
		produces: 'Produce',
		sold_at: 'Vendido en',
		vendors: 'Vendedores',
		gatherables: 'Recolectables',
		mail: 'Correo',
		recipes: 'Recetas',
	},
	villager: {
		gift_preferences: 'Preferencias de regalos',
		weekly_wants: 'Deseos semanales',
		relationship:
			'Nivel {type} {level} - {levelName} (Requiere {requiredValue})',
	},
	weekly_wants: {
		title: 'Rotación de Deseos Semanales',
		description:
			"¡La rotación de deseos semanales para {date} ya está disponible! Puedes encontrar la lista completa de deseos semanales en {url}.",
	},
	miscellaneous: {
		see_more: 'Ver {count} más ...',
		no_data: 'No hay datos disponibles.',
	},
} satisfies BaseTranslation;

export default es_embeds;
