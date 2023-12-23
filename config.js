module.exports = {
    app: {
        token: 'MTE4ODA0MDkzMTMwODQ4MjYxMA.G_W0Qo.Q1RMqt3ZnT0vL0KuMcYRDfx_cXVZr3ngAw8TFQ',
        playing: '',
        global: true,
        guild: '1187516655501320313',
        ExtraMessages: false,
        loopMessage: false,

    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 200,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
