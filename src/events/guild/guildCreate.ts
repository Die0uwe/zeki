import { Events, Guild } from "discord.js";
import { inject, injectable } from "tsyringe";

import { Event } from "../../structures/Event.js";
import { Client } from "../../structures/Client.js";

import { clientSymbol } from "../../utils/Constants.js";

import { db } from "../../db/index.js";
import { guilds } from "../../db/schema/index.js";

@injectable()
export default class GuildCreate extends Event {
	constructor(@inject(clientSymbol) private client: Client) {
		super("onGuildCreate", Events.GuildCreate);
	}

	async run(guild: Guild): Promise<void> {
		if (!this.client.isReady) return;

		try {
			await db.insert(guilds).values({
				guildId: guild.id,
			});
		} catch (error) {
			this.client.logger.error(`Error while inserting a guild into the database: ${error}`);
		}

		this.client.logger.info(`Joined ${guild.name} (${guild.id})`);
	}
}
