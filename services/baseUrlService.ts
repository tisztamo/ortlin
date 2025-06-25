const pool = {
    url: null as string | null,
};

const baseUrlService = {
    name: "ortlin_base_url",
    defaultUrl: "http://localhost:2638/v1/",
    async set(url: string): Promise<void> {
        localStorage.setItem(this.name, url);
        pool.url = url;
    },
    async get(): Promise<string> {
        if (pool.url) return pool.url;
        const url = localStorage.getItem(this.name) || this.defaultUrl;
        pool.url = url;
        return url;
    },
};

export default baseUrlService;
