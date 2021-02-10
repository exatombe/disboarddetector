/**
 * @param {String} author_id - Id de l'auteur du message de bump ( Disboard )
 * @param {String} embed_description - Description de l'embed que disboard a envoyé
 * @returns {Promise<Object>}
 */
module.exports.checkBump = function (author_id, embed_description) {
    return new Promise((resolve) => {
        if (author_id === "302050872383242240" /* Id De Disboard */) {
            const user_id = embed_description.substr(2, 18)
            if (embed_description.includes("Bump effectué !")) {
                resolve({
                    bump: true,
                    cooldown: false,
                    user_id: user_id
                })
            } else if (embed_description.includes("avant que le serveur puisse être bumpé !")) {
                resolve({
                    bump: false,
                    cooldown: true,
                    user_id: user_id
                })
            } else {
                resolve({
                    bump: false,
                    cooldown: false,
                    user_id: user_id
                })
            }
        }
    })
}
