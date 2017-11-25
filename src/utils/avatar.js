export default class AvatarUtils {
    /**
     * Check if the avatar is the default one
     *
     * @param uri
     * @returns {boolean}
     */
    static isDefault(uri) {
        const reg = /default_avatar_[1-8]\.svg(\/?)$/;
        return reg.test(uri);
    }

    /**
     * Get Default avatar name without extension
     *
     * @param uri
     * @returns {*|string|void|XML}
     */
    static getDefaultName(uri) {
        const uriArray = uri.split('/');
        const [name] = uriArray.slice(-1);
        return name.replace('.svg', '');
    }
}